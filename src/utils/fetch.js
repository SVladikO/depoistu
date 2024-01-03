import {BE_DOMAIN} from "./config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {DEFAULT_LANGUAGE, getCurrentLanguage, translate, TRANSLATION} from "./translation";

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

export const fetchData = async (url, body) => {
    let response;

    // No internet no request
    if (!window.navigator.onLine) {
        return new Promise((resolve, reject) => {
            reject({body: {errorMessage: translate(TRANSLATION.NOTIFICATION.NO_INTERNET)}});
        })
    }

    try {
        response = await fetch(decodeURIComponent(url), getOptions(body));
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject({
                    status: 500,
                    body: {
                        errorMessage: error.message === 'Failed to fetch'
                            ? translate(TRANSLATION.NOTIFICATION.UN_ABLE_MAKE_REQUEST)
                            : error.message
                    }
                }
            );
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
        POST_CREATE: companyId => `${BE_DOMAIN}/order-histories`,
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