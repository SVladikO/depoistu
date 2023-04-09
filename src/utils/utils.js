import translations from "./translations";
import translation from "./translation.json";

export const checkAccess = () => {
    const isTrustedCustomer = localStorage.getItem('trastedCustomer');

    if(isTrustedCustomer) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    localStorage.setItem('trastedCustomer', true);
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
    const isTrustedCustomer = localStorage.getItem('trastedCustomer');

    if(isTrustedCustomer) return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return securityCheck();
    }
    localStorage.setItem('trastedCustomer', true);
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

    getCustomer: () => JSON.parse(localStorage.getItem('customer')),
    removeGuest: () => localStorage.removeItem('customer'),
}
export const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export const getRegions = cities => Object.keys(cities);
export const resolveTranslation = key => translation[key]["ua"];

export function schedule(str){

    let weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    let scheduleArray =  str?.replace(/\s/g, '').split(',');
    let result = {};
    scheduleArray.forEach((dayName, i) => {
        if(scheduleArray[i]){
            result[scheduleArray[i]] = (result[scheduleArray[i]] ? result[scheduleArray[i]] + ', ' : '') + weekDayNames[i];
        }
    })
    return result;
}

