import translations from "./translations";
import translation from "./translation.json";

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

export function hexToRgbA(hex, a=1){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length=== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' +a+')';
    }
    throw new Error('Bad Hex');
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

export const LOCAL_STORAGE_KEY = {
    CUSTOMER: 'CUSTOMER',
    CUSTOMER_COMPANIES: 'CUSTOMER_COMPANIES',
    IS_TRUSTED_CUSTOMER: 'IS_TRUSTED_CUSTOMER',
    COMPANY_SEARCH_RESULT: 'COMPANY_SEARCH_RESULT',
    COMPANY_CANDIDATE_TO_EDIT: 'COMPANY_CANDIDATE_TO_EDIT',
    MENU_ITEM_CANDIDATE_TO_EDIT: 'MENU_ITEM_CANDIDATE_TO_EDIT',
}

export const LocalStorage = {
    set: (storageKey, value) => localStorage.setItem(storageKey, JSON.stringify(value)),
    get: storageKey => JSON.parse(localStorage.getItem(storageKey)),
    remove: storageKey => localStorage.removeItem(storageKey),
}

export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = key => translation[key]["ua"];


