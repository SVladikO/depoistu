import {BE_DOMAIN} from "./config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {translate, TRANSLATION} from "./translation";

// it's function because we take data from localStorage
const getOptions = body => {
    const defaultOption = {
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": LocalStorage.get(LOCAL_STORAGE_KEY.REDUX_STATE)?.customer?.value?.token,
            "current-language": LocalStorage.get(LOCAL_STORAGE_KEY.REDUX_STATE).language.siteLanguage,
        }
    };

    if (!body) {
        return defaultOption;
    }

    return {
        ...defaultOption,
        ...{
            method: body?.method || 'POST',
            body: JSON.stringify(body)
        }
    }
};

export const fetchData = async (url, body) => {
    let response;
    try {
        response = await fetch(decodeURIComponent(url), getOptions(body));
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject({status: 500, body: {errorMessage: translate(TRANSLATION.NOTIFICATION.UN_ABLE_MAKE_REQUEST)}});
        })
    }

    const json = await response.json();

    const {status, statusText, headers} = response;

    if (response.ok) {
        return new Promise((resolve) => {
            resolve({status, statusText, headers, body: json});
        })
    }


    return new Promise((resolve, reject) => {
        reject({status, statusText, headers, body: json});
    })
}

export const BE_API = {
    //TODO candidate to delete
    // GET_ALL_CATEGORIES_ID_FOR_COMPANY: companyId => `${BE_DOMAIN}/company/${companyId}/category`,
    //TODO candidate to delete
    // GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${BE_DOMAIN}/company/${companyId}/menu_item/${categoryId}`,
    CUSTOMER: {
        SING_IN: () => `${BE_DOMAIN}/sign-in`,
        SING_UP: () => `${BE_DOMAIN}/sign-up`,
        CHANGE_PASSWORD: () => `${BE_DOMAIN}/change-password`,
        PUT_VERIFY_EMAIL: () => `${BE_DOMAIN}/verify-email`,
    },
    COMPANY: {
        GET_BY_CUSTOMER_ID: () => `${BE_DOMAIN}/companies/by/customer`,
        GET_BY_COMPANY_ID: companyId => `${BE_DOMAIN}/companies/by/id/${companyId}`,
        GET_AVAILABLE_CITIES: () => `${BE_DOMAIN}/companies/cities`,
        GET_BY_CITY_ID: city_id => `${BE_DOMAIN}/companies/by/city_id/${city_id}`,
        POST_CREATE: () => `${BE_DOMAIN}/companies`,
        PUT_UPDATE: () => `${BE_DOMAIN}/companies`,
        DELETE: () => `${BE_DOMAIN}/companies`,
    },
    MENU_ITEM: {
        GET_BY_COMPANY_ID: company_id => `${BE_DOMAIN}/menu/${company_id}`,
        GET_ONLY_VISIBLE_BY_COMPANY_ID: company_id => `${BE_DOMAIN}/menu/only-visible/${company_id}`,
        POST_CREATE: () => `${BE_DOMAIN}/menu`,
        PUT_UPDATE: () => `${BE_DOMAIN}/menu`,
        DELETE: () => `${BE_DOMAIN}/menu`,
        CHANGE_IS_VISIBLE: () => `${BE_DOMAIN}/menu/visible`
    },
    DEVELOPMENT: {
        API: () =>   `${BE_DOMAIN}/api`,
        DB_MODE: () =>   `${BE_DOMAIN}/db-mode`
    }
    // PLACE_ORDER: () => `${BE_DOMAIN}/place-order`,
};