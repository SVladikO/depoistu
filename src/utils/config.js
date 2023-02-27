import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import SettingPage from "../page/setting/Setting.page";
import SubCategoryPage from "../page/sub-category/SubCategory.page";
// TODO: Hidden second version
// import OrderPage from "../page/order/Order.page";
// import CategoryPage from "../page/category/Category.page";
// import OrderHistoryPage from "../page/order-history/OrderHistory.page";
// import {HistoryTabBar} from "../components";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";

import {ReactComponent as BakeryIcon} from "../icons/category/bakery.svg";
import {ReactComponent as BeverageIcon} from "../icons/category/beverage.svg";
import {ReactComponent as BurgerIcon} from "../icons/category/burger.svg";
import {ReactComponent as NoodlesIcon} from "../icons/category/noodles.svg";
import {ReactComponent as PizzaIcon} from "../icons/category/pizza.svg";
import {ReactComponent as SandwitchIcon} from "../icons/category/sandwitch.svg";
import {ReactComponent as Sea_foodIcon} from "../icons/category/sea_food.svg";
import {ReactComponent as VagetableIcon} from "../icons/category/vagetable.svg";


export const DEV_ROUTER = {
    COMPONENTS: 'components',
    PAGES: 'pages',
};

const DOMAIN = 'https://pizza-mobile-api.herokuapp.com';
// const DOMAIN = 'http://localhost:5000';

export const BE_API = {
    SING_IN: () => `${DOMAIN}/sign-in`,
    PLACE_ORDER: () => `${DOMAIN}/place-order`,
    GET_ALL_CATEGORIES_ID_FOR_COMPANY: companyId => `${DOMAIN}/company/${companyId}/category`,
    GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${DOMAIN}/company/${companyId}/menu_item/${categoryId}`,
};

export const CATEGORY_MAPPER = {
    1: {title: "Bakery", icon: BakeryIcon, measurement: 'g'},
    2: {title: "Beverage", icon: BeverageIcon, measurement: 'L'},
    3: {title: "Burger", icon: BurgerIcon, measurement: 'g'},
    4: {title: "Noodles", icon: NoodlesIcon, measurement: 'g'},
    5: {title: "Pizza", icon: PizzaIcon, measurement: 'g'},
    6: {title: "Sandwitch", icon: SandwitchIcon, measurement: 'g'},
    7: {title: "Sea food", icon: Sea_foodIcon, measurement: 'g'},
    8: {title: "Vagetable", icon: VagetableIcon, measurement: 'g'},
    9: {title: "Alcohol", icon: BeverageIcon, measurement: 'ml'},
    10: {title: "Wine card", icon: BeverageIcon, measurement: 'ml'},
    11: {title: "Hot drinks", icon: BeverageIcon, measurement: 'ml'},
}

export const ROUTER =  {

    SEARCH: { URL: '/', TITLE: 'Search', page: () => {}, showBottomMenu: true },
    SING_IN: { URL: '/sign-in', TITLE: 'Sing in', page: SignInPage, showBottomMenu: true },
    SING_UP: { URL: '/sing-up',  TITLE: 'Sing up', page: SingUpPage, showBottomMenu: true},
    // CATEGORY: {URL: '/',TITLE: 'Category',page: CategoryPage, showBottomMenu: true},
    // ORDER_REVIEW: {URL: '/order',  TITLE: 'Order review', page: OrderPage, showBottomMenu: true},
    // ORDER_HISTORY: {URL: '/history',  TITLE: 'Order History', page: OrderHistoryPage, subHeader: HistoryTabBar, showBottomMenu: true},
    // Favorite: {URL: '/Favorite',  TITLE: 'Favorite Cart', page: () => {}},
    // Profile: {URL: '/Profile',  TITLE: 'Profile', page: () => {}},
    SETTING: {URL: '/setting',  TITLE: 'Setting', page: SettingPage, showBottomMenu: true},
}

// ROUTER.USER_ACCOUNT = {URL: '/user_account',  TITLE: 'USER_ACCOUNT', page: () => {}, showBottomMenu: true, BACK_URL: ROUTER.SETTING.URL};
ROUTER.MENU = {URL: '/menu', PARAMS: '/:categoryId', getTitle: 'Menu', page: SubCategoryPage, showBottomMenu: true, };
ROUTER.CHANGE_PASSWORD = {URL: '/change-password',TITLE: 'Change password',page: ChangePasswordPage, showBottomMenu: true, BACK_URL: ROUTER.SING_IN.URL};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
