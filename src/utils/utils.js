import {TRANSLATION} from "./translation.js";

export const setBrowserTabTitle = () => document.title = resolveTranslation(TRANSLATION.COMPANY_NAME);

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}


export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = obj => {
    console.log(888, obj);
    return obj["ua"];
}



