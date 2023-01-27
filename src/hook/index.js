import {useState, useEffect} from "react";
import {fetchData} from "../fetch";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../features/request/requestSlice";
import {showErrorMessage, closeErrorMessage} from "../features/error/errorSlice";

export const useLocalStorageFetch = (storageKey, initialState, url) => {
    const localStorageState = JSON.parse(localStorage.getItem(storageKey))
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageState) {
            return;
        }

        dispatch(startLoading());
        dispatch(closeErrorMessage());

        fetchData(url)
            .then(res => {
                dispatch(stopLoading());
                setValue(res)
                localStorage.setItem(storageKey, JSON.stringify(res))
            })
            .catch(e => {
                dispatch(stopLoading());
                dispatch(showErrorMessage(e.message));
                console.log('Fetch error: ', e.message, e)
            })
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};
