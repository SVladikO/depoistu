import {BE_DOMAIN} from "./config";

const getOptions = body => ({
    method: body.method || 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

export const fetchData = async (url, body) => {
    let response;

    try {
        response = await (body
                ? fetch(decodeURIComponent(url), getOptions(body))
                : fetch(decodeURIComponent(url))
        );
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject({status: 500, body: {errorMessage: 'Unable to make request.'}});
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
        CHANGE_PASSWORD: () => `${BE_DOMAIN}/change-password`
    },
    COMPANY: {
        GET_BY_CUSTOMER_ID: customer_id => `${BE_DOMAIN}/companies/by/customer/${customer_id}`,
        GET_BY_COMPANY_ID: companyId => `${BE_DOMAIN}/companies/by/id/${companyId}`,
        GET_BY_CITY: city => `${BE_DOMAIN}/companies/by/city/${city}`,
        POST_CREATE: () => `${BE_DOMAIN}/companies`,
        PUT_UPDATE: () => `${BE_DOMAIN}/companies`,
        DELETE: id => `${BE_DOMAIN}/companies/${id}`,
    },
    MENU_ITEM: {
        GET_BY_COMPANY_ID: company_id => `${BE_DOMAIN}/menu/${company_id}`,
        POST_CREATE: () => `${BE_DOMAIN}/menu`,
        PUT_UPDATE: () => `${BE_DOMAIN}/menu`,
        DELETE: () => `${BE_DOMAIN}/menu`,
    },
    // PLACE_ORDER: () => `${BE_DOMAIN}/place-order`,
};