import {TRANSLATION, translate} from "./translation.js";
import packageInfo from "../../package.json";

export const setBrowserTabTitle = () => document.title = translate(TRANSLATION.COMPANY_NAME);

export const getRandom = () => (Math.random() + 1).toString(36).substring(7);

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const stopLoadingWithDelay = callbacks => {
    let isLoaded = false;
    let intervalId;

    setTimeout(() => {
        console.log('timeout')

        if (isLoaded) {
            callbacks.forEach(cb => cb())
        } else {
            intervalId = setInterval(() => {
                console.log('interval')
                if (isLoaded) {
                    console.log('DONE')
                    callbacks.forEach(cb => cb())
                    clearInterval(intervalId)
                }
            }, 1000)
        }
    }, 2000)

    return {
        /**
         * Only stop interval no actions.
         */
        onError: () => clearInterval(intervalId),
        /**
         * Let run callback
         */
        allow: () => {
            isLoaded = true
        }
    }
}


export const getRegions = cities => Object.keys(cities);

export function checkUpdates() {
    const currentVersion = packageInfo.lastUpdateDate;
    const storageVersion = localStorage.getItem('LAST_UPDATE_DATE') ?? '09.08.2023';

    if (currentVersion !== storageVersion) {
        const localStorageKey = 'REDUX_STATE';
        for(let key in localStorage){
            if(key !== localStorageKey){
                localStorage.removeItem(key)
            }
            const storedDataField = JSON.parse(localStorage.getItem(localStorageKey)) || {};
            const fieldToPreserve = 'language';
            for (const field in storedDataField) {
                if (field !== fieldToPreserve) {
                    delete storedDataField[field];
                }
            }
            localStorage.setItem(localStorageKey, JSON.stringify(storedDataField));
        }
        console.log('it was some update');
    } else {
        console.log('No update detected');
    }
}



