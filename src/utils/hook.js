import {useState, useEffect} from "react";
import {fetchData} from "./fetch";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../features/request/requestSlice";
import {addErrorMessage,deleteErrorMessage} from "../features/error/errorSlice";
import {LocalStorage} from "./utils";

export const useLocalStorageFetch = (storageKey, initialState, url) => {
    const localStorageState = LocalStorage.get(storageKey);
    const [value, setValue] = useState(localStorageState ?? initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorageState) {
            return;
        }

        dispatch(startLoading());
        dispatch(deleteErrorMessage());

        fetchData(url)
            .then(res => {
                dispatch(stopLoading());
                setValue(res)
                localStorage.setItem(storageKey, JSON.stringify(res))
            })
            .catch(e => {
                dispatch(stopLoading());
                dispatch(addErrorMessage(e.message));
            })
    }, [value, storageKey, dispatch, localStorageState, url]);

    return [value, setValue];
};
