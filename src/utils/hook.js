import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";
import {fetchData} from "./fetch";

import {URL} from "./config";
import {LocalStorage} from "./localStorage";
import {publishNotificationEvent} from "./event";
import {stopLoadingWithDelay} from "./utils";

export const useLocalStorage = (storageKey, initialState) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);

    const set = value => {
        if (value === undefined) {
            LocalStorage.remove(storageKey, value);
        } else {
            LocalStorage.set(storageKey, value);
        }

        setValue(value);
    }

    return [value, set];
};

/**
 * Let us hide elements on scroll.
 *
 * @param id
 * @param top
 */
export const useHideOnScroll = (id, top) => {
    let prevScrollpos = window.pageYOffset;

    const onScroll = () => {
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;

            if (currentScrollPos < 250) {
                document.getElementById(id).style.top = "0";
            } else {
                document.getElementById(id).style.top = prevScrollpos > currentScrollPos ? "0" : top;
            }

            prevScrollpos = currentScrollPos;
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [id, top])
}

// A custom hook that builds on useLocation to parse
// the query string for you.
export function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Redirect to settings page is customer isn't signed in.
 * That's for security reasons on frontend side.
 *
 */
export const useRedirectToSettingPage = () => {
    const customer = useSelector(state => state.customer.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (!customer) {
            navigate(URL.SETTING)
        }
    })
}
export const useScrollUp = () => {
    useEffect(() => {
        window.scrollTo({
            top: -100,
            behavior: "smooth",
        })
    }, [])
};

export const useLocalStorageFetch = (
    storageKey,
    initialState,
    url,
    setLoading = () => {},
    customCondition = () => {}
) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorageState || customCondition(value)) {
            return;
        }

        setLoading(true)
        const stopLoading = stopLoadingWithDelay([() => setLoading(false)])

        fetchData(url)
            .then(res => {
                setValue(res.body)
                localStorage.setItem(storageKey, JSON.stringify(res.body))
            })
            .catch(e => {
                publishNotificationEvent.error(e.body.errorMessage)
            })
            .finally(() => stopLoading.allow())
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};

export const useWindowScrollPositions = () => {
    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}