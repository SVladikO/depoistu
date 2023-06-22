import {useState, useEffect} from "react";
import {fetchData} from "./fetch";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../features/request/requestSlice";
import {LocalStorage} from "./localStorage";

export const useLocalStorage = (storageKey, initialState) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);

    const set = value => {
        LocalStorage.set(storageKey, value);
        setValue(value);
    }

    return [value, set];
};

export const useLocalStorageFetch = (storageKey, initialState, url, setError = () => {}, customCondition = () => {}) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
    console.log(222, storageKey)
        if (localStorageState || customCondition(value)) {
            return;
        }
        console.log(333, storageKey)

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
