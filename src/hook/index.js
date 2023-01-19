import {useState, useEffect} from "react";
import {fetchData} from "../fetch";

export const useLocalStorageFetch = (storageKey, initialState, url) => {
    const localStorageState = JSON.parse(localStorage.getItem(storageKey))
    const [value, setValue] = useState(localStorageState ?? initialState);

    useEffect(() => {
        !localStorageState &&
        fetchData(url)
            .then(res => {
                setValue(res)
                localStorage.setItem(storageKey, JSON.stringify(res))
            })
            .catch(e => console.log('Fetch error: ', e))
    }, [value, storageKey]);

    return [value, setValue];
};
