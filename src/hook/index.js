import {useState, useEffect} from "react";

export const useLocalStorageFetch = (storageKey, initialState, fetchWrapper) => {
    const localStorageState = JSON.parse(localStorage.getItem(storageKey))
    const [value, setValue] = useState(localStorageState ?? initialState);

    useEffect(() => {
        !localStorageState && fetchWrapper(res => {
            setValue(res)
            localStorage.setItem(storageKey, JSON.stringify(res))
        })
    }, [value, storageKey]);

    return [value, setValue];
};
