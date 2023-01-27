import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import LoadingPage from "../page/Loading.page";
import SettingPage from "../page/setting/Setting.page";
import CategoryPage from "../page/category/Category.page";
import SubCategoryPage from "../page/sub-category/SubCategory.page";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";

import {ReactComponent as BakeryIcon} from "../icons/category/bakery.svg";
import {ReactComponent as BeverageIcon} from "../icons/category/beverage.svg";
import {ReactComponent as BurgerIcon} from "../icons/category/burger.svg";
import {ReactComponent as NoodlesIcon} from "../icons/category/noodles.svg";
import {ReactComponent as PizzaIcon} from "../icons/category/pizza.svg";
import {ReactComponent as SandwitchIcon} from "../icons/category/sandwitch.svg";
import {ReactComponent as Sea_foodIcon} from "../icons/category/sea_food.svg";
import {ReactComponent as VagetableIcon} from "../icons/category/vagetable.svg";
import OrderPage from "../page/order/Order.page";
import OrderHistoryPage from "../page/order-completed/OrderHistory.page";
import {HistoryTabBar} from "../components";

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

const getSubCategoryTitle = (urlParams) => {
    const {categoryId} = urlParams;
    return CATEGORY_MAPPER[categoryId].title;
}

export const ROUTER =  {

    LOADING: {URL: '/loading',TITLE: 'Loading',page: LoadingPage},

    INTRO_1: { URL: '/INTRO_1', TITLE: 'INTRO_1', page: () => {}},
    INTRO_2: { URL: '/INTRO_2', TITLE: 'INTRO_2', page: () => {}},
    INTRO_3: { URL: '/INTRO_3', TITLE: 'INTRO_3', page: () => {}},

    SING_IN: { URL: '/sign-in', TITLE: 'Sing in', page: SignInPage, showBottomMenu: true },
    SING_UP: { URL: '/sing-up',  TITLE: 'Sing up', page: SingUpPage, showBottomMenu: true},
    CATEGORY: {URL: '/',TITLE: 'Category',page: CategoryPage, showBottomMenu: true},

    Sing_up_phone_email: {URL: '/Sing_up_phone_email',TITLE: 'Sing_up_phone_email ',page: () => {}},
    Phone_verification: {URL: '/Phone_verification',TITLE: 'Phone_verification ',page: () => {}},
    OTP_verification: {URL: '/OTP_verification',TITLE: 'OTP_verification ',page: () => {}},

    Product_details_pizza: {URL: '/Product_details_pizza',  TITLE: 'Product details pizza', page: () => {}},
    Product_details_pizza_2: {URL: '/Product_details_pizza_2',  TITLE: 'Product details pizza 2', page: () => {}},
    ORDER_REVIEW: {URL: '/order',  TITLE: 'Order review', page: OrderPage, showBottomMenu: true},
    Checkout: {URL: '/Checkout',  TITLE: 'Checkout', page: () => {}},
    Payment_enter_data: {URL: '/Payment_enter_data',  TITLE: 'Payment enter data', page: () => {}},
    Payment_enter_result: {URL: '/Payment_enter_result',  TITLE: 'Payment enter result', page: () => {}},
    ORDER_HISTORY: {URL: '/history',  TITLE: 'Order History', page: OrderHistoryPage, subHeader: HistoryTabBar, showBottomMenu: true},
    Pizza_with_category: {URL: '/Pizza_with_category',  TITLE: 'Pizza with category', page: () => {}},
    Favorite: {URL: '/Favorite',  TITLE: 'Favorite', page: () => {}},
    Profile: {URL: '/Profile',  TITLE: 'Profile', page: () => {}},
    Track_your_order: {URL: '/Track your order',  TITLE: 'Track your order', page: () => {}},
    Support: {URL: '/Support',  TITLE: 'Support', page: () => {}},
    SETTING: {URL: '/setting',  TITLE: 'Setting', page: SettingPage, showBottomMenu: true},
}
//We use this approach of initialization because we don't want errors.
// I need use category url as back_url for sub_category and
// if I change category url later it won't bring any bags
ROUTER.USER_ACCOUNT = {URL: '/user_account',  TITLE: 'USER_ACCOUNT', page: () => {}, showBottomMenu: true, BACK_URL: ROUTER.SETTING.URL};
ROUTER.SUB_CATEGORY = {URL: '/category', PARAMS: '/:categoryId', getTitle: getSubCategoryTitle, page: SubCategoryPage, showBottomMenu: true, BACK_URL: ROUTER.CATEGORY.URL};
ROUTER.CHANGE_PASSWORD = {URL: '/change-password',TITLE: 'Change password',page: ChangePasswordPage, showBottomMenu: true, BACK_URL: ROUTER.SING_IN.URL};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
