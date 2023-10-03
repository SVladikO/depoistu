import SearchPage from "page/search/Search.page";
import SignInPage from "page/sing-in/SignIn.page";
import SingUpPage from "page/sing-up/SingUp.page";
import SettingPage from "page/setting/Setting.page";
import AboutUsPage from "page/about-us/AboutUs.page";
import OurTeamPage from "page/our-team/OurTeam.page";
import EditMenuPage from "page/edit-menu/EditMenu.page";
import AddCompanyPage from "page/add-company/AddCompany.page";
import AddMenuItemPage from "page/add-menu-item/AddMenuItem.page";
import EditCompanyPage from "page/edit-company/EditCompany.page";
import EditMenuItemPage from "page/edit-menu-item/EditMenuItem.page";
import SearchDetailsPage from "page/search-details/SearchDetails.page";
import ChangePasswordPage from "page/change-password/ChangePassword.page";
import ForgetPasswordPage from "page/forgot-password/ForgetPassword.page";
import CustomerCompaniesPage from "page/customer-companies/CustomerCompanies.page";

// TODO: Hidden second version
// import OrderPage from "page/order/Order.page";
// import CategoryPage from "page/category/Category.page";
// import OrderHistoryPage from "page/order-history/OrderHistory.page";
// import {HistoryTabBar} from "components";

import {TRANSLATION, translate} from "./translation.js";
import EditCustomerPage from "page/edit-customer/EditCustomer.page";

export const DEV_ROUTER = {
    COMPONENTS: 'components',
    PAGES: 'pages',
    ADMIN: 'admin',
    API: 'api'
};

export const {REACT_APP_NODE_ENV} = process.env;

export const AVAILABLE_DOMAINS = {
    0: {
        name: 'localhost',
        url: 'http://localhost:4000'
    },
    1: {
        name: 'develop',
        url: 'https://depoistu-develop-ab315caf64ab.herokuapp.com'
    },
    2: {
        name: 'stage',
        url: 'https://depoistu-stage-8139a3f5250c.herokuapp.com'
    },
    3: {
        name: 'production',
        url: 'https://depoistu-main-bb2676f3bc70.herokuapp.com'
    }
}

export const SELECTED_BE_DOMAIN = AVAILABLE_DOMAINS[REACT_APP_NODE_ENV || 0];
export const BE_DOMAIN = SELECTED_BE_DOMAIN.url;

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
    FAVORITE: {URL: '/Favorite',  TITLE: 'Favorite Cart', page: () => {}},
    MENU: {URL: '/menu',  TITLE: 'Favorite Cart', page: () => {}},
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
        PARAMS: 'company/:companyId',
        TITLE: translate(TRANSLATION.PAGE.COMPANY_DETAILS.TOP_TITLE),
        page: SearchDetailsPage,
        showBottomMenu: true,
        backUrl: URL.SEARCH
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
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    SING_IN: {
        URL: URL.SING_IN,
        TITLE: translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE),
        page: SignInPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    FORGOT_PASSWORD: {
        URL: URL.FORGOT_PASSWORD,
        TITLE: translate(TRANSLATION.PAGE.FORGOT_PASSWORD.TOP_TITLE),
        page: ForgetPasswordPage,
        backUrl: URL.SETTING
    },
    CHANGE_PASSWORD: {
        URL: URL.CHANGE_PASSWORD,
        TITLE: translate(TRANSLATION.PAGE.CHANGE_PASSWORD.TOP_TITLE),
        page: ChangePasswordPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    ABOUT_US: {
        URL: URL.ABOUT_US,
        TITLE: translate(TRANSLATION.PAGE.ABOUT_US.TOP_TITLE),
        page: AboutUsPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    OUR_TEAM: {
        URL: URL.OUR_TEAM,
        TITLE: translate(TRANSLATION.PAGE.OUR_TEAM.TOP_TITLE),
        page: OurTeamPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    EDIT_USER: {
        URL: URL.EDIT_CUSTOMER,
        TITLE: translate(TRANSLATION.PAGE.EDIT_USER_PROFILE.TOP_TITLE),
        page: EditCustomerPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    CUSTOMER_COMPANIES: {
        URL: URL.CUSTOMER_COMPANIES,
        TITLE: translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.TOP_TITLE),
        page: CustomerCompaniesPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    EDIT_COMPANY: {
        URL: URL.EDIT_COMPANY,
        PARAMS: '/:companyId',
        TITLE: translate(TRANSLATION.PAGE.EDIT_COMPANY.TOP_TITLE),
        page: EditCompanyPage,
        showBottomMenu: true,
        backUrl: URL.CUSTOMER_COMPANIES
    },
    ADD_COMPANY: {
        URL: URL.ADD_COMPANY,
        TITLE: translate(TRANSLATION.PAGE.ADD_COMPANY.TOP_TITLE),
        page: AddCompanyPage,
        showBottomMenu: true,
        backUrl: URL.CUSTOMER_COMPANIES
    },
    EDIT_MENU: {
        URL: URL.EDIT_MENU,
        TITLE: translate(TRANSLATION.PAGE.EDIT_MENU.TOP_TITLE),
        page: EditMenuPage,
        showBottomMenu: true,
        backUrl: URL.CUSTOMER_COMPANIES
    },
    EDIT_MENU_ITEM: {
        URL: URL.EDIT_MENU_ITEM,
        TITLE: translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.TOP_TITLE),
        page: EditMenuItemPage,
        showBottomMenu: true,
        backUrl: URL.EDIT_MENU
    },
    ADD_MENU_ITEM: {
        URL: URL.ADD_MENU_ITEM,
        TITLE: translate(TRANSLATION.PAGE.ADD_MENU_ITEM.TOP_TITLE),
        page: AddMenuItemPage,
        showBottomMenu: true,
        backUrl: URL.EDIT_MENU
    },
};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
