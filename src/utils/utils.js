import {TRANSLATION, resolveTranslation} from "./translation.js";

export const setBrowserTabTitle = () => document.title = resolveTranslation(TRANSLATION.COMPANY_NAME);

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const getRegions = cities => Object.keys(cities);




