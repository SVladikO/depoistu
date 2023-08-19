export const LocalStorage = {
    set: (storageKey, value) => localStorage.setItem(storageKey, JSON.stringify(value)),
    get: storageKey => JSON.parse(localStorage.getItem(storageKey)),
    remove: storageKey => localStorage.removeItem(storageKey),
}

export const LOCAL_STORAGE_KEY = {
    CUSTOMER: 'CUSTOMER',
    SHOW_INTRO: 'SHOW_INTRO',
    CUSTOMER_COMPANIES: 'CUSTOMER_COMPANIES',
    IS_TRUSTED_CUSTOMER: 'IS_TRUSTED_CUSTOMER',
    COMPANY_SEARCH_RESULT: 'COMPANY_SEARCH_RESULT',
    COMPANY_ID_FOR_EDIT_MENU: 'COMPANY_ID_FOR_EDIT_MENU',
    COMPANY_CANDIDATE_TO_EDIT: 'COMPANY_CANDIDATE_TO_EDIT',
    AVAILABLE_CITIES_FOR_SEARCH_COMPANIES: 'AVAILABLE_CITIES_FOR_SEARCH_COMPANIES',
    MENU_ITEM_CANDIDATE_TO_EDIT: 'MENU_ITEM_CANDIDATE_TO_EDIT',
    COMPANY_SEARCH_SELECTED_CITY_ID: 'COMPANY_SEARCH_SELECTED_CITY_ID',
    COMPANY_SEARCH_SELECTED_REGION_ID: 'COMPANY_SEARCH_SELECTED_REGION_ID',
    WAS_COMPANY_CREATION_WARNING_SHOW: 'WAS_COMPANY_CREATION_WARNING_SHOW',
    WEBSITE_SETTINGS: 'WEBSITE_SETTINGS',
    REDUX_STATE: 'REDUX_STATE',
}