import OrderPage from "page/order/order.page";
import SearchPage from "page/search/search.page";
import SignInPage from "page/sing-in/sign-in.page";
import SingUpPage from "page/sing-up/sing-up.page";
import SettingPage from "page/setting/setting.page";
import OurTeamPage from "page/our-team/our-team.page";
import EditMenuPage from "page/edit-menu/edit-menu.page";
import AddCompanyPage from "page/company-add/company-add.page";
import EditCompanyPage from "page/company-edit/company-edit.page";
import AddMenuItemPage from "page/menu-item-add/menu-item-add.page";
import AboutProjectPage from "page/about-project/about-project.page";
import EditCustomerPage from "page/edit-customer/edit-customer.page";
import OrderHistoryPage from "page/order-history/order-history.page";
import EditMenuItemPage from "page/menu-item-edit/edit-menu-item.page";
import SearchDetailsPage from "page/search-details/search-details.page";
import ChangePasswordPage from "page/change-password/change-password.page";
import ProjectUpdatedPage from "page/project-updated/project-updated.page";
import ForgetPasswordPage from "page/forgot-password/forget-password.page";
import FavoriteCompanyPage from "page/favorite-company/favorite-company.page";
import CustomerCompaniesPage from "page/customer-companies/customer-companies.page";
import AvailableMenuCategoriesPage from "page/available-menu-categories/available-menu-categories.page";
import OrderHistoryDetailsPage from "page/order-history-details/order-history-details.page";
import InstructionForBusinessOwnerPage from "page/instruction-for-bussines-owner/instruction-for-business-owner.page";

// TODO: Hidden second version
// import CategoryPage from "page/category/Category.page";
// import {HistoryTabBar} from "components";

import {TRANSLATION, translate} from "./translation.js";

export const DEV_ROUTER = {
    ADMIN: 'admin',
};

function getDomainBE() {
    const {origin} = window.location;

    switch (origin) {
        case "https://depoistu.com":
        case "https://www.depoistu.com":
            return {
                name: 'production',
                url: 'https://depoistu-main-bb2676f3bc70.herokuapp.com'
            }
        case "https://depoistu-stage.onrender.com":
            return {
                name: 'stage',
                url: 'https://depoistu-stage-8139a3f5250c.herokuapp.com'
            }
        case "https://depoistu.onrender.com":
        case "http://localhost:3000":
            return {
                name: 'develop',
                url: 'https://depoistu-develop-ab315caf64ab.herokuapp.com'
            }
        default:
            return {
                name: 'localhost',
                url: 'http://localhost:4000'
            }
    }
}

export const SELECTED_BE_DOMAIN = getDomainBE();
export const BE_DOMAIN = SELECTED_BE_DOMAIN.url;

export const URL = {
    SEARCH: '/',
    PROJECT_UPDATED: '/project-update',
    SEARCH_DETAILS: '/company-details',
    MENU: '/menu',
    SING_IN: '/sign-in',
    SING_UP: '/sing-up',
    SETTING: '/setting',
    FAVORITE: '/favorite',
    CHANGE_PASSWORD: '/change-password',
    FORGOT_PASSWORD: '/forgot-password',
    ABOUT_PROJECT: '/about-project',
    EDIT_CUSTOMER: '/edit-customer',
    OUR_TEAM: '/our-team',
    ORDER: '/order',
    ORDER_HISTORY: '/order-history',
    ORDER_HISTORY_DETAILS: '/order-history-details',

    AVAILABLE_MENU_CATEGORIES: '/available-menu-categories',
    INSTRUCTION_FOR_BUSINESS_OWNER: '/instruction-for-business-owner',
    CUSTOMER_COMPANIES: '/customer-companies',
    ADD_COMPANY: '/add-company',
    EDIT_COMPANY: '/edit-company',
    EDIT_MENU: '/edit-menu',
    EDIT_MENU_ITEM: '/edit-menu-item',
    ADD_MENU_ITEM: '/add-menu-item',
};

export const ROUTER = {
    ORDER: {
        URL: URL.ORDER,
        TITLE: translate(TRANSLATION.ORDERS.ORDER_REVIEW),
        page: OrderPage,
        disablePageHeaderBottomMargin: true,
        showBottomMenu: true
    },
    ORDER_HISTORY: {
        URL: URL.ORDER_HISTORY,
        TITLE: translate(TRANSLATION.PAGE.ORDER_HISTORY.TOP_TITLE),
        page: OrderHistoryPage,
        backUrl: URL.SETTING,
        showBottomMenu: true
    },
    ORDER_HISTORY_DETAILS: {
        URL: URL.ORDER_HISTORY_DETAILS,
        PARAMS: '/:orderHistoryId',
        TITLE: translate(TRANSLATION.PAGE.ORDER_HISTORY_DETAILS.TOP_TITLE),
        page: OrderHistoryDetailsPage,
        backUrl: URL.ORDER_HISTORY,
        showBottomMenu: true
    },
    FAVORITE: {
        URL: URL.FAVORITE,
        TITLE: translate(TRANSLATION.PAGE.FAVORITE.TOP_TITLE),
        page: FavoriteCompanyPage,
        disablePageHeaderBottomMargin: true,
        showBottomMenu: true
    },
    MENU: {
        URL: '/menu',
        TITLE: 'Favorite Cart',
        page: () => {
        }
    },
    // Profile: {URL: '/Profile',  TITLE: 'Profile', page: () => {}},
    // USER_ACCOUNT = {URL: '/user_account',  TITLE: 'USER_ACCOUNT', page: () => {}, showBottomMenu: true, BACK_URL: ROUTER.SETTING.URL};
    SEARCH: {
        URL: URL.SEARCH,
        TITLE: translate(TRANSLATION.PAGE.SEARCH.TOP_TITLE),
        page: SearchPage,
        disablePageHeaderBottomMargin: true,
        showBottomMenu: true,
    },
    SEARCH_DETAILS: {
        URL: URL.SEARCH_DETAILS,
        PARAMS: '/:companyId',
        TITLE: translate(TRANSLATION.PAGE.COMPANY_DETAILS.TOP_TITLE),
        page: SearchDetailsPage,
        showBottomMenu: true,
        disablePageHeaderBottomMargin: true,
        backUrl: URL.SEARCH
    },
    PROJECT_UPDATED: {
        URL: URL.PROJECT_UPDATED,
        page: ProjectUpdatedPage,
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
        backUrl: URL.SETTING,
        showBottomMenu: true
    },
    CHANGE_PASSWORD: {
        URL: URL.CHANGE_PASSWORD,
        TITLE: translate(TRANSLATION.PAGE.CHANGE_PASSWORD.TOP_TITLE),
        page: ChangePasswordPage,
        backUrl: URL.SETTING,
        showBottomMenu: true,
    },
    ABOUT_PROJECT: {
        URL: URL.ABOUT_PROJECT,
        TITLE: translate(TRANSLATION.PAGE.ABOUT_PROJECT.TOP_TITLE),
        page: AboutProjectPage,
        backUrl: URL.SETTING,
        showBottomMenu: true,
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
    INSTRUCTION_FOR_BUSINESS_OWNER: {
        URL: URL.INSTRUCTION_FOR_BUSINESS_OWNER,
        TITLE: translate(TRANSLATION.PAGE.INSTRUCTION_FOR_BUSINESS_OWNER.TOP_TITLE),
        page: InstructionForBusinessOwnerPage,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    CUSTOMER_COMPANIES: {
        URL: URL.CUSTOMER_COMPANIES,
        TITLE: translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.TOP_TITLE),
        page: CustomerCompaniesPage,
        disablePageHeaderBottomMargin: true,
        showBottomMenu: true,
        backUrl: URL.SETTING
    },
    AVAILABLE_MENU_CATEGORIES: {
        URL: URL.AVAILABLE_MENU_CATEGORIES,
        TITLE: translate(TRANSLATION.PAGE.AVAILABLE_MENU_CATEGORIES.TOP_TITLE),
        page: AvailableMenuCategoriesPage,
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

export const ORDER_PRINT_URL = 'https://art-teh.kiev.ua/naklejki-s-qr---kodom-40h40-mm'