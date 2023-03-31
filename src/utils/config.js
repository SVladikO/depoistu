import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import SettingPage from "../page/setting/Setting.page";
import SubCategoryPage from "../page/sub-category/SubCategory.page";
import EditMenuPage from "../page/edit-menu/EditMenu.page";
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
import {resolveTranslation} from "./utils";
import EditCompanyListPage from "../page/edit-company-list/EditCompanyList.page";

export const DEV_ROUTER = {
    COMPONENTS: 'components',
    PAGES: 'pages',
};

export const BE_DOMAIN = 'https://pizza-mobile-api.herokuapp.com';
// export const BE_DOMAIN = 'http://localhost:5000';

export const BE_API = {
    SING_IN: () => `${BE_DOMAIN}/sign-in`,
    PLACE_ORDER: () => `${BE_DOMAIN}/place-order`,
    GET_ALL_CATEGORIES_ID_FOR_COMPANY: companyId => `${BE_DOMAIN}/company/${companyId}/category`,
    GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${BE_DOMAIN}/company/${companyId}/menu_item/${categoryId}`,
    GET_COMPANIES_BY_CUSTOMER_ID: customer_id => `${BE_DOMAIN}/companies/by/customer/${customer_id}`,
    GET_COMPANY_BY_ID: companyId => `${BE_DOMAIN}/companies/by/id/${companyId}`,
    GET_MENU_ITEMS_BY_COMPANY_ID: company_id => `${BE_DOMAIN}/menu/${company_id}`
};

export const CATEGORY_MAPPER = {
    1: { id: 1, title: resolveTranslation("CATEGORIES.BAKERY"), icon: BakeryIcon, measurement: 'g'},
    2: { id: 2, title: resolveTranslation("CATEGORIES.BEVERAGE"), icon: BeverageIcon, measurement: 'L'},
    3: { id: 3, title: resolveTranslation("CATEGORIES.BURGERS"), icon: BurgerIcon, measurement: 'g'},
    4: { id: 4, title: resolveTranslation("CATEGORIES.NOODLES"), icon: NoodlesIcon, measurement: 'g'},
    5: { id: 5, title: resolveTranslation("CATEGORIES.PIZZA"), icon: PizzaIcon, measurement: 'g'},
    6: { id: 6, title: resolveTranslation("CATEGORIES.SANDWITCH"), icon: SandwitchIcon, measurement: 'g'},
    7: { id: 7, title: resolveTranslation("CATEGORIES.SEAFOOD"), icon: Sea_foodIcon, measurement: 'g'},
    8: { id: 8, title: resolveTranslation("CATEGORIES.VEGETABLE"), icon: VagetableIcon, measurement: 'g'},
    9: { id: 9, title: resolveTranslation("CATEGORIES.ALCOHOL"), icon: BeverageIcon, measurement: 'ml'},
    10: { id: 10, title: resolveTranslation("CATEGORIES.WINE_CARD"), icon: BeverageIcon, measurement: 'ml'},
    11: { id: 11, title: resolveTranslation("CATEGORIES.HOT_DRINKS"), icon: BeverageIcon, measurement: 'ml'},
}

export const URL = {
    SEARCH: '/',
    SEARCH_DETAILS: '/',
    MENU: '/menu',
    SING_IN: '/sign-in',
    SING_UP: '/sing-up',
    SETTING: '/setting',
    CHANGE_PASSWORD: '/change-password',

    EDIT_COMPANY_LIST: '/edit-company',
    EDIT_COMPANY: '/edit-company',
    EDIT_MENU: '/edit-menu',
};

export const ROUTER =  {
    // CATEGORY: '/',TITLE: 'Category',page: CategoryPage, showBottomMenu: true},
    // ORDER_REVIEW: {URL: '/order',  TITLE: 'Order review', page: OrderPage, showBottomMenu: true},
    // ORDER_HISTORY: {URL: '/history',  TITLE: 'Order History', page: OrderHistoryPage, subHeader: HistoryTabBar, showBottomMenu: true},
    // Favorite: {URL: '/Favorite',  TITLE: 'Favorite Cart', page: () => {}},
    // Profile: {URL: '/Profile',  TITLE: 'Profile', page: () => {}},
    // USER_ACCOUNT = {URL: '/user_account',  TITLE: 'USER_ACCOUNT', page: () => {}, showBottomMenu: true, BACK_URL: ROUTER.SETTING.URL};
    MENU :                  {URL: URL.MENU,                     PARAMS: '/:categoryId', getTitle: 'Menu',                                                page: SubCategoryPage,    showBottomMenu: true},
    SEARCH:                 {URL: URL.SEARCH,                                           TITLE: resolveTranslation("PAGE.SEARCH.TOP_TITLE"),         page: SearchPage,         showBottomMenu: true},
    SEARCH_DETAILS:         {URL: URL.SEARCH_DETAILS,           PARAMS: '/:companyId',  TITLE: 'Company details',                                        page: SearchDetailsPage,  showBottomMenu: true,    BACK_URL: URL.SEARCH},
    SETTING:                {URL: URL.SETTING,                                          TITLE: resolveTranslation("PAGE.SETTINGS.TOP_TITLE"),       page: SettingPage,        showBottomMenu: true},
    SING_UP:                {URL: URL.SING_UP,                                          TITLE: resolveTranslation("PAGE.SING_UP.TOP_TITLE"),        page: SingUpPage,         showBottomMenu: true},
    SING_IN:                {URL: URL.SING_IN,                                          TITLE: resolveTranslation("PAGE.SING_IN.TOP_TITLE"),        page: SignInPage,         showBottomMenu: true },
    CHANGE_PASSWORD :       {URL: URL.CHANGE_PASSWORD,                                  TITLE: resolveTranslation("PAGE.CHANGE_PASSWORD.TOP_TITLE"),page: ChangePasswordPage, showBottomMenu: true,    BACK_URL: URL.SING_IN},

    EDIT_COMPANY_LIST:      {URL: URL.EDIT_COMPANY_LIST,                                TITLE: 'Edit companies',                                         page: EditCompanyListPage, showBottomMenu:true,    BACK_URL: URL.SETTING},
    EDIT_COMPANY:           {URL: URL.EDIT_COMPANY,             PARAMS: '/:companyId',  TITLE: 'Edit company',                                           page: EditCompanyPage,     showBottomMenu:true,    BACK_URL: URL.EDIT_COMPANY_LIST},
    EDIT_MENU :             {URL: URL.EDIT_MENU,                PARAMS: '/:companyId',  TITLE: 'Edit menu',                                              page: EditMenuPage,        showBottomMenu: true,   BACK_URL: URL.EDIT_COMPANY_LIST},
};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
