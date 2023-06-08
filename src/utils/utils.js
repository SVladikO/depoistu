import translations from "./translations";
import translation from "./translation.json";

export const setBrowserTabTitle = () => document.title = translations.company_name;

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}


export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = key => translation[key]["ua"];



