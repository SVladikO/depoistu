import {useState, useEffect} from "react";

export const useLocalStorageFetch = (storageKey, fallbackState, _fetch) => {
    const initValue = JSON.parse(localStorage.getItem(storageKey))
    console.log(storageKey, initValue)
    const [value, setValue] = useState(initValue ?? fallbackState);

    useEffect(() => {
        !initValue &&
        _fetch(value => {
            console.log('_fetch: ', storageKey, value);
            setValue(value)
            localStorage.setItem(storageKey, JSON.stringify(value))
        })
    }, [value, storageKey]);

    return [value, setValue];
};
//
// const useLocalStorageFetch = (storageKey, fallbackState) => {
//     const [value, setValue] = React.useState(
//         JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
//     );
//
//     React.useEffect(() => {
//         localStorage.setItem(storageKey, JSON.stringify(value));
//     }, [value, storageKey]);
//
//     return [value, setValue];
// };