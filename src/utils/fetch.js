import {BE_DOMAIN, URL} from "./config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {DEFAULT_LANGUAGE, getCurrentLanguage, translate, TRANSLATION} from "./translation";
import {publishNotificationEvent} from "./event";
import {updateLocalStorage} from "./management";


export const BE_API = {
    //TODO candidate to delete
    // GET_ALL_CATEGORIES_ID_FOR_COMPANY: companyId => `${BE_DOMAIN}/company/${companyId}/category`,
    //TODO candidate to delete
    // GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${BE_DOMAIN}/company/${companyId}/menu_item/${categoryId}`,
    CUSTOMER: {
        SING_IN: () => `${BE_DOMAIN}/sign-in`,
        SING_UP: () => `${BE_DOMAIN}/sign-up`,
        CHANGE_PASSWORD: () => `${BE_DOMAIN}/change-password`,
        EDIT_CUSTOMER_TYPE: () => `${BE_DOMAIN}/edit-business-type`,
        PUT_VERIFY_EMAIL: () => `${BE_DOMAIN}/verify-email`,
    },
    FAVORITE_COMPANY: {
        GET: customerId => `${BE_DOMAIN}/favorite-companies/${customerId}`,
        ADD: () => `${BE_DOMAIN}/favorite-companies`,
        DELETE: () => `${BE_DOMAIN}/favorite-companies`,
    },
    ORDER_HISTORY: {
        GET_ALL_BY_CUSTOMER_ID: customerId => `${BE_DOMAIN}/order-histories/${customerId}`, // we take customer id from token
        POST_CREATE: () => `${BE_DOMAIN}/order-histories`,
    },
    ORDER_HISTORY_DETAILS: {
        GET_BY_ORDER_HISTORY_ID: orderHistoryId => `${BE_DOMAIN}/order-history-details/${orderHistoryId}`,
    },
    COMPANY: {
        GET_BY_CUSTOMER_ID: customerId => `${BE_DOMAIN}/companies/customers/${customerId}`,
        GET_BY_COMPANY_ID: companyId => `${BE_DOMAIN}/companies/${companyId}`,
        GET_AVAILABLE_CITIES: () => `${BE_DOMAIN}/available-city-ids`,
        GET_BY_CITY_ID: city_id => `${BE_DOMAIN}/companies/cities/${city_id}`,
        GET_ALL: () => `${BE_DOMAIN}/companies`,
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
        API: () => `${BE_DOMAIN}/api-list`,
        DB_MODE: () => `${BE_DOMAIN}/db-mode`
    }
    // PLACE_ORDER: () => `${BE_DOMAIN}/place-order`,
};

const promiseReject = message => new Promise((resolve, reject) => reject({body: {message}}));

export const fetchDataRedux = async (url, body) => {
    // No internet no request
    if (!window.navigator.onLine) {
        return promiseReject(translate(TRANSLATION.NOTIFICATION.NO_INTERNET));
    }

    const response =   await fetch(decodeURIComponent(url), getOptions(body));

    if (!response.ok) {
        const json = await response.json();
        throw new Error(json.message)
    }

    return response;
}

export const fetchData = async (url, body) => {
    let response;

    const promiseReject = message => new Promise((resolve, reject) => reject({body: {message}}));

    // No internet no request
    if (!window.navigator.onLine) {
        return promiseReject(translate(TRANSLATION.NOTIFICATION.NO_INTERNET));
    }

    try {
        response = await fetch(decodeURIComponent(url), getOptions(body));
    } catch (error) {
        return promiseReject(
            error.message === 'Failed to fetch'
                ? translate(TRANSLATION.NOTIFICATION.UN_ABLE_MAKE_REQUEST)
                : error.message
        );
    }

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message)
    }

    return new Promise(resolve => resolve({body: json}))
}

// prepare options conditionally
function getOptions(body) {
    const defaultOption = {
        headers: {
            'client-version': LocalStorage.get(LOCAL_STORAGE_KEY.PROJECT_VERSION),
            'Content-Type': 'application/json',
            "current-language": getCurrentLanguage() || DEFAULT_LANGUAGE
        },
        mode: 'cors',
    };

    //Only GET method works without body
    if (!body) {
        return defaultOption;
    }

    const customer = LocalStorage.get(LOCAL_STORAGE_KEY.REDUX_STATE)?.customer?.value;

    //Let's send x-access-token for POST, PUT, DELETE only after customer sing in.
    if (customer) {
        defaultOption.headers["x-access-token"] = customer.token;
    }

    return {
        ...defaultOption,
        ...{
            method: body?.method || 'POST',
            body: JSON.stringify(body)
        }
    }
}

export function errorHandlerRedux(e) {
    let notificationMessage;

    if (e.message === 'Failed to fetch') {
        notificationMessage = translate(TRANSLATION.NOTIFICATION.UN_ABLE_MAKE_REQUEST);
    } else if (e.status === 408) {
        updateLocalStorage()
        window.location.replace(window.location.origin + URL.PROJECT_UPDATED)
    } else {
        notificationMessage = e.message
    }
    publishNotificationEvent.error(notificationMessage);
}

export function errorHandler(e) {
    if (e.status === 408) {
        updateLocalStorage()
        window.location.replace(window.location.origin + URL.PROJECT_UPDATED)
    } else {
        console.log(1111111, e);
        publishNotificationEvent.error(e.message)
    }
}