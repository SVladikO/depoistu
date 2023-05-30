import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import SettingPage from "../page/setting/Setting.page";
import EditMenuPage from "../page/edit-menu/EditMenu.page";
import EditMenuItemPage from "../page/edit-menu-item/EditMenuItem.page";
import EditCompanyPage from "../page/edit-company/EditCompany.page";
// TODO: Hidden second version
// import OrderPage from "../page/order/Order.page";
// import CategoryPage from "../page/category/Category.page";
// import OrderHistoryPage from "../page/order-history/OrderHistory.page";
// import {HistoryTabBar} from "../components";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";
import SearchPage from "../page/search/Search.page";
import SearchDetailsPage from "../page/search-details/SearchDetails.page";

import {ReactComponent as BakeryIcon} from "../icons/category/bakery.svg";
import {ReactComponent as BeverageIcon} from "../icons/category/beverage.svg";
import {ReactComponent as BurgerIcon} from "../icons/category/burger.svg";
import {ReactComponent as NoodlesIcon} from "../icons/category/noodles.svg";
import {ReactComponent as PizzaIcon} from "../icons/category/pizza.svg";
import {ReactComponent as SandwitchIcon} from "../icons/category/sandwitch.svg";
import {ReactComponent as Sea_foodIcon} from "../icons/category/sea_food.svg";
import {ReactComponent as VagetableIcon} from "../icons/category/vagetable.svg";
import {LOCAL_STORAGE_KEY, LocalStorage, resolveTranslation} from "./utils";
import CustomerCompaniesPage from "../page/customer-companies/CustomerCompanies.page";
import AddCompanyPage from "../page/add-company/AddCompany.page";
import AddMenuItemPage from "../page/add-menu-item/AddMenuItem.page";

export const DEV_ROUTER = {
    COMPONENTS: 'components',
    PAGES: 'pages',
    ADMIN: 'admin',
};

// export const BE_DOMAIN = 'https://pizza-mobile-api-production.herokuapp.com';
// export const BE_DOMAIN = 'https://pizza-mobile-api-develop.herokuapp.com';
export const BE_DOMAIN = 'http://localhost:4000';

export const BE_API = {
    //TODO candidate to delete
    // GET_ALL_CATEGORIES_ID_FOR_COMPANY: companyId => `${BE_DOMAIN}/company/${companyId}/category`,
    //TODO candidate to delete
    // GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${BE_DOMAIN}/company/${companyId}/menu_item/${categoryId}`,

    SING_IN: () => `${BE_DOMAIN}/sign-in`,
    // PLACE_ORDER: () => `${BE_DOMAIN}/place-order`,

    GET_COMPANIES_BY_CUSTOMER_ID: customer_id => `${BE_DOMAIN}/companies/by/customer/${customer_id}`,
    GET_COMPANIES_BY_CITY: city => `${BE_DOMAIN}/companies/by/city/${city}`,
    GET_COMPANY_BY_COMPANY_ID: companyId => `${BE_DOMAIN}/companies/by/id/${companyId}`,
    POST_COMPANY_CREATE: () => `${BE_DOMAIN}/companies`,
    DELETE_COMPANY_CREATE: companyId => `${BE_DOMAIN}/companies/${companyId}`,

    GET_MENU_ITEMS_BY_COMPANY_ID: company_id => `${BE_DOMAIN}/menu/${company_id}`,
    POST_MENU_ITEM: () => `${BE_DOMAIN}/menu`
};

export const CATEGORY_MAPPER = {
    1: {id: 1, title: resolveTranslation("CATEGORIES.BAKERY"), icon: BakeryIcon, measurement: 'g'},
    2: {id: 2, title: resolveTranslation("CATEGORIES.BEVERAGE"), icon: BeverageIcon, measurement: 'L'},
    3: {id: 3, title: resolveTranslation("CATEGORIES.BURGERS"), icon: BurgerIcon, measurement: 'g'},
    4: {id: 4, title: resolveTranslation("CATEGORIES.NOODLES"), icon: NoodlesIcon, measurement: 'g'},
    5: {id: 5, title: resolveTranslation("CATEGORIES.PIZZA"), icon: PizzaIcon, measurement: 'g'},
    6: {id: 6, title: resolveTranslation("CATEGORIES.SANDWITCH"), icon: SandwitchIcon, measurement: 'g'},
    7: {id: 7, title: resolveTranslation("CATEGORIES.SEAFOOD"), icon: Sea_foodIcon, measurement: 'g'},
    8: {id: 8, title: resolveTranslation("CATEGORIES.VEGETABLE"), icon: VagetableIcon, measurement: 'g'},
    9: {id: 9, title: resolveTranslation("CATEGORIES.ALCOHOL"), icon: BeverageIcon, measurement: 'ml'},
    10: {id: 10, title: resolveTranslation("CATEGORIES.WINE_CARD"), icon: BeverageIcon, measurement: 'ml'},
    11: {id: 11, title: resolveTranslation("CATEGORIES.HOT_DRINKS"), icon: BeverageIcon, measurement: 'ml'},
};

export const URL = {
    SEARCH: '/',
    SEARCH_DETAILS: '/',
    MENU: '/menu',
    SING_IN: '/sign-in',
    SING_UP: '/sing-up',
    SETTING: '/setting',
    CHANGE_PASSWORD: '/change-password',

    CUSTOMER_COMPANIES: '/customer-companies',
    ADD_COMPANY: '/add-company',
    EDIT_COMPANY: '/edit-company',
    EDIT_MENU: '/edit-menu',
    EDIT_MENU_ITEM: '/edit-menu-item',
    ADD_MENU_ITEM: '/add-menu-item',
};

export const ROUTER = {
    // ORDER_REVIEW: {URL: '/order',  TITLE: 'Order review', page: OrderPage, showBottomMenu: true},
    // ORDER_HISTORY: {URL: '/history',  TITLE: 'Order History', page: OrderHistoryPage, subHeader: HistoryTabBar, showBottomMenu: true},
    // Favorite: {URL: '/Favorite',  TITLE: 'Favorite Cart', page: () => {}},
    // Profile: {URL: '/Profile',  TITLE: 'Profile', page: () => {}},
    // USER_ACCOUNT = {URL: '/user_account',  TITLE: 'USER_ACCOUNT', page: () => {}, showBottomMenu: true, BACK_URL: ROUTER.SETTING.URL};
    SEARCH: {
        URL: URL.SEARCH,
        TITLE: resolveTranslation("PAGE.SEARCH.TOP_TITLE"),
        page: SearchPage,
        showBottomMenu: true
    },
    SEARCH_DETAILS: {
        URL: URL.SEARCH_DETAILS,
        PARAMS: '/:companyId',
        TITLE: 'Company details',
        page: SearchDetailsPage,
        showBottomMenu: true,
        BACK_URL: URL.SEARCH
    },
    SETTING: {
        URL: URL.SETTING,
        TITLE: resolveTranslation("PAGE.SETTINGS.TOP_TITLE"),
        page: SettingPage,
        showBottomMenu: true
    },
    SING_UP: {
        URL: URL.SING_UP,
        TITLE: resolveTranslation("PAGE.SING_UP.TOP_TITLE"),
        page: SingUpPage,
        showBottomMenu: true
    },
    SING_IN: {
        URL: URL.SING_IN,
        TITLE: resolveTranslation("PAGE.SING_IN.TOP_TITLE"),
        page: SignInPage,
        showBottomMenu: true
    },
    CHANGE_PASSWORD: {
        URL: URL.CHANGE_PASSWORD,
        TITLE: resolveTranslation("PAGE.CHANGE_PASSWORD.TOP_TITLE"),
        page: ChangePasswordPage,
        showBottomMenu: true,
        BACK_URL: URL.SETTING,
    },

    CUSTOMER_COMPANIES: {
        URL: URL.CUSTOMER_COMPANIES,
        TITLE: 'Your companies',
        page: CustomerCompaniesPage,
        showBottomMenu: true,
        BACK_URL: URL.SETTING
    },
    EDIT_COMPANY: {
        URL: URL.EDIT_COMPANY,
        PARAMS: '/:companyId',
        TITLE: 'Edit company',
        page: EditCompanyPage,
        showBottomMenu: true,
        BACK_URL: URL.CUSTOMER_COMPANIES
    },
    ADD_COMPANY: {
        URL: URL.ADD_COMPANY,
        TITLE: 'Add company',
        page: AddCompanyPage,
        showBottomMenu: true,
        BACK_URL: URL.CUSTOMER_COMPANIES
    },
    EDIT_MENU: {
        URL: URL.EDIT_MENU,
        PARAMS: '/:companyId',
        TITLE: 'Edit menu',
        page: EditMenuPage,
        showBottomMenu: true,
        BACK_URL: URL.CUSTOMER_COMPANIES
    },
    EDIT_MENU_ITEM: {
        URL: URL.EDIT_MENU_ITEM,
        TITLE: 'Edit menu item',
        page: EditMenuItemPage,
        showBottomMenu: true,
        BACK_URL: () => {
            const COMPANY_ID = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU);
            return `${URL.EDIT_MENU}/${COMPANY_ID}`;
        }
    },

    ADD_MENU_ITEM: {
        URL: URL.ADD_MENU_ITEM,
        TITLE: 'Add menu item',
        page: AddMenuItemPage,
        showBottomMenu: true,
        BACK_URL: () => {
            const COMPANY_ID = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU);
            return `${URL.EDIT_MENU}/${COMPANY_ID}`;
        }
    },
};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
