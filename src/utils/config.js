import SearchPage from "../page/search/Search.page";
import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import SettingPage from "../page/setting/Setting.page";
import AboutUsPage from "../page/about-us/AboutUs.page";
import OurTeamPage from "../page/our-team/OurTeam.page";
import EditMenuPage from "../page/edit-menu/EditMenu.page";
import AddCompanyPage from "../page/add-company/AddCompany.page";
import AddMenuItemPage from "../page/add-menu-item/AddMenuItem.page";
import EditCompanyPage from "../page/edit-company/EditCompany.page";
import EditMenuItemPage from "../page/edit-menu-item/EditMenuItem.page";
import SearchDetailsPage from "../page/search-details/SearchDetails.page";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";
import ForgetPasswordPage from "../page/forgot-password/ForgetPassword.page";
import CustomerCompaniesPage from "../page/customer-companies/CustomerCompanies.page";

// TODO: Hidden second version
// import OrderPage from "../page/order/Order.page";
// import CategoryPage from "../page/category/Category.page";
// import OrderHistoryPage from "../page/order-history/OrderHistory.page";
// import {HistoryTabBar} from "../components";

import {TRANSLATION, translate} from "./translation.js";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import EditCustomerPage from "../page/edit-customer/EditCustomer.page";

export const DEV_ROUTER = {
    COMPONENTS: 'components',
    PAGES: 'pages',
    ADMIN: 'admin',
};

export const IS_MASTER_ENV = process.env.REACT_APP_NODE_ENV === 'production';

const MASTER_BE_DOMAIN = 'https://pizza-mobile-api-master.herokuapp.com';
const DEVELOP_BE_DOMAIN = 'https://pizza-mobile-api-develop.herokuapp.com';
export const BE_DOMAIN = IS_MASTER_ENV ? MASTER_BE_DOMAIN : DEVELOP_BE_DOMAIN;
// export const BE_DOMAIN = 'http://localhost:4000';

export const URL = {
    SEARCH: '/',
    SEARCH_DETAILS: '/',
    MENU: '/menu',
    SING_IN: '/sign-in',
    SING_UP: '/sing-up',
    SETTING: '/setting',
    CHANGE_PASSWORD: '/change-password',
    FORGOT_PASSWORD: '/forgot-password',
    ABOUT_US: '/about-us',
    EDIT_CUSTOMER: '/edit-customer',
    OUR_TEAM: '/our-team',

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
        TITLE: translate(TRANSLATION.PAGE.SEARCH.TOP_TITLE),
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
        TITLE: translate(TRANSLATION.PAGE.SETTINGS.TOP_TITLE),
        page: SettingPage,
        showBottomMenu: true
    },
    SING_UP: {
        URL: URL.SING_UP,
        TITLE: translate(TRANSLATION.PAGE.SING_UP.TOP_TITLE),
        page: SingUpPage,
        showBottomMenu: true
    },
    SING_IN: {
        URL: URL.SING_IN,
        TITLE: translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE),
        page: SignInPage,
        showBottomMenu: true
    },
    FORGOT_PASSWORD: {
        URL: URL.FORGOT_PASSWORD,
        TITLE: translate(TRANSLATION.PAGE.FORGOT_PASSWORD.TOP_TITLE),
        page: ForgetPasswordPage,
        BACK_URL: URL.SETTING
    },
    CHANGE_PASSWORD: {
        URL: URL.CHANGE_PASSWORD,
        TITLE: translate(TRANSLATION.PAGE.CHANGE_PASSWORD.TOP_TITLE),
        page: ChangePasswordPage,
        showBottomMenu: true,
        BACK_URL: URL.SETTING,
    },
    ABOUT_US: {
        URL: URL.ABOUT_US,
        TITLE: translate(TRANSLATION.PAGE.ABOUT_US.TOP_TITLE),
        page: AboutUsPage,
        showBottomMenu: true,
        BACK_URL: URL.SETTING,
    },
    OUR_TEAM: {
        URL: URL.OUR_TEAM,
        TITLE: translate(TRANSLATION.PAGE.OUR_TEAM.TOP_TITLE),
        page: OurTeamPage,
        showBottomMenu: true,
        BACK_URL: URL.SETTING,
    },
    EDIT_USER: {
        URL: URL.EDIT_CUSTOMER,
        TITLE: translate(TRANSLATION.PAGE.EDIT_USER_PROFILE.TOP_TITLE),
        page: EditCustomerPage,
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
