import translations from "./translations";
import translation from "./translation.json";
import {LocalStorage, LOCAL_STORAGE_KEY} from './localStorage';

export const checkAccess = () => {
    const isTrustedCustomer = LocalStorage.get(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER);

    if(isTrustedCustomer) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    LocalStorage.set(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER, true);
}

export const securityCheck = () => {
    const isTrustedCustomer = LocalStorage.get(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER);

    if(isTrustedCustomer) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return securityCheck();
    }

    LocalStorage.set(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER, true);
}

export const setBrowserTabTitle = () => document.title = translations.company_name;

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = key => translation[key]["ua"];



