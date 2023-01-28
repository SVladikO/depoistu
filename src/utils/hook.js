import {useState, useEffect} from "react";
import {fetchData} from "./fetch";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../features/request/requestSlice";

export const useLocalStorageFetch = (storageKey, initialState, url) => {
    const localStorageState = JSON.parse(localStorage.getItem(storageKey))
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageState) {
            return;
        }

        dispatch(startLoading());

        fetchData(url)
            .then(res => {
                dispatch(stopLoading());
                setValue(res)
                localStorage.setItem(storageKey, JSON.stringify(res))
            })
            .catch(e => {
                dispatch(stopLoading());
                console.log('Fetch error: ', e)
            })
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};
