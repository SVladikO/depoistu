import {TRANSLATION, translate} from "./translation.js";

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
        allow: () => {isLoaded = true}
    }
}


export const getRegions = cities => Object.keys(cities);




