import translations from "./translations";
import translation from "./translation.json";

export const checkAccess = () => {
    const isTrustedUser = localStorage.getItem('trastedUser');

    if(isTrustedUser) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    localStorage.setItem('trastedUser', true);
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
    const isTrustedUser = localStorage.getItem('trastedUser');

    if(isTrustedUser) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return securityCheck();
    }
    localStorage.setItem('trastedUser', true);
}

export const setBrowserTabTitle = () => document.title = translations.company_name;

export const LOCAL_STORAGE_KEY = {
    COMPANY_CANDIDATE_TO_EDIT: 'COMPANY_CANDIDATE_TO_EDIT',
}

const setToLocalStorage = (storageKey, value) => localStorage.setItem(storageKey, JSON.stringify(value));
const getFromLocalStorage = storageKey => JSON.parse(localStorage.getItem(storageKey));

export const LocalStorage = {
    setCompanyCandidateToEdit:   value => setToLocalStorage(LOCAL_STORAGE_KEY.COMPANY_CANDIDATE_TO_EDIT, value),
    getCompanyCandidateToEdit:   () => getFromLocalStorage(LOCAL_STORAGE_KEY.COMPANY_CANDIDATE_TO_EDIT),

    getGuest: () => JSON.parse(localStorage.getItem('guest')),
    removeGuest: () => localStorage.removeItem('guest'),
}
export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = key => translation[key]["ua"];


