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
    const storageVersion = localStorage.getItem('LAST_UPDATE_DATE') ?? localStorage.setItem('LAST_UPDATE_DATE', '06.08.2023');
    const reduxStore = JSON.parse(localStorage.getItem('REDUX_STATE'));

    const preserveKey = reduxStore.language.siteLanguage;
    console.log(1, currentVersion);
    console.log(2, storageVersion);
    if (currentVersion !== storageVersion) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key !== preserveKey) {
                localStorage.removeItem(key);
            }
        }
        console.log('it was some update');
    } else {
        console.log('No update detected');
    }
}



