import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {fetchData} from "./fetch";

import {URL} from "./config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {startLoading, stopLoading} from "../features/request/requestSlice";

export const useLocalStorage = (storageKey, initialState) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);

    const set = value => {
        LocalStorage.set(storageKey, value);
        setValue(value);
    }

    return [value, set];
};

export const useHideOnScroll = (id, top) => {
    let prevScrollpos = window.pageYOffset;

    const onScroll = () => {
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            document.getElementById(id).style.top = prevScrollpos > currentScrollPos ? "0" : top;
            prevScrollpos = currentScrollPos;
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [id, top])
}

export const useRedirectToSettingPage = () => {
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));
    const navigate = useNavigate();

    useEffect(() => {
        if (!customer) {
            navigate(URL.SETTING)
        }
    })
}
export const useScrollUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
};

export const useLocalStorageFetch = (storageKey, initialState, url, setError = () => {
}, customCondition = () => {
}) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageState || customCondition(value)) {
            return;
        }

        dispatch(startLoading());

        fetchData(url)
            .then(res => {
                setValue(res.body)
                localStorage.setItem(storageKey, JSON.stringify(res.body))
                setTimeout(() => dispatch(stopLoading()), 1000)
            })
            .catch(e => {
                dispatch(stopLoading());
                setError(e.body.message);
            })
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};
