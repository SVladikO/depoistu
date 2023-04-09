import {useState, useEffect} from "react";
import {fetchData} from "./fetch";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../features/request/requestSlice";
import {LocalStorage} from "./utils";

export const useLocalStorageFetch = (storageKey, initialState, url, setError = () => {}) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageState) {
            return;
        }

        dispatch(startLoading());

        fetchData(url)
            .then(res => {
                setTimeout(() => dispatch(stopLoading()), 1000)
                setValue(res)
                localStorage.setItem(storageKey, JSON.stringify(res))
            })
            .catch(e => {
                dispatch(stopLoading());
                setError(e.message);
            })
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};
