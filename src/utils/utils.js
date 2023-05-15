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
    HIDE_INTRO: 'HIDE_INTRO',
    CUSTOMER_COMPANIES: 'CUSTOMER_COMPANIES',
    IS_TRUSTED_CUSTOMER: 'IS_TRUSTED_CUSTOMER',
    COMPANY_SEARCH_RESULT: 'COMPANY_SEARCH_RESULT',
    COMPANY_ID_FOR_EDIT_MENU: 'COMPANY_ID_FOR_EDIT_MENU',
    COMPANY_CANDIDATE_TO_EDIT: 'COMPANY_CANDIDATE_TO_EDIT',
    MENU_ITEM_CANDIDATE_TO_EDIT: 'MENU_ITEM_CANDIDATE_TO_EDIT',
    COMPANY_SEARCH_SELECTED_CITY: 'COMPANY_SEARCH_SELECTED_CITY',
    COMPANY_SEARCH_SELECTED_REGION: 'COMPANY_SEARCH_SELECTED_REGION',
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

export function initSchedule(schedule) {
    const times = schedule.split(',')?.map(el => el.trim());
    let result = {};
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        .forEach((key, index) => {
            const [from, to] = times[index]?.split('-') ?? "";
            result[key] = {
                isChecked: !!times[index],
                from: from?.replace('.', ':'),
                to: to?.replace('.', ':')
            };
        })
    return result;
}

export function getScheduleAsObject(schedule) {
    const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    let obj = {};

    schedule = schedule
        .split(',')
        .map(el => el.trim())

    weekDayNames.forEach((el,i) =>{
        obj[el] = schedule[i];
    })
    return obj;
}


export const getScheduleAsString = values => {
    let result = ''

    result += values.monIsChecked ? `${values.monFrom}-${values.monTo},` : ',';
    result += values.tueIsChecked ? `${values.tueFrom}-${values.tueTo},` : ',';
    result += values.wedIsChecked ? `${values.wedFrom}-${values.wedTo},` : ',';
    result += values.thuIsChecked ? `${values.thuFrom}-${values.thuTo},` : ',';
    result += values.friIsChecked ? `${values.friFrom}-${values.friTo},` : ',';
    result += values.satIsChecked ? `${values.satFrom}-${values.satTo},` : ',';
    result += values.sunIsChecked ? `${values.sunFrom}-${values.sunTo}` : '';

    return result;
}

export const isScheduleValid = values =>
    values.monIsChecked ||
    values.tueIsChecked ||
    values.wedIsChecked ||
    values.thuIsChecked ||
    values.friIsChecked ||
    values.satIsChecked ||
    values.sunIsChecked;