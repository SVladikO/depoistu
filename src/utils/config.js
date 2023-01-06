import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import LoadingPage from "../page/Loading.page";
import SettingPage from "../page/setting/Setting.page";
import CategoryPage from "../page/category/Category.page";
import SubCategoryPage from "../page/sub-category/SubCategory.page";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";

export const DEV_ROUTER = {
    pageS: 'pages',
    PAGES: 'pages',
    REDUX: 'redux',
};

const DOMAIN = 'https://pizza-mobile-api-develop.onrender.com';

export const BE_API = {
    GET_ALL_MENU_FOR_COMPANY: companyId => `${DOMAIN}/company/${companyId}/menu`,
    GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY: (companyId, categoryId) => `${DOMAIN}/company/${companyId}/menu/${categoryId}`,
};

export const ROUTER = {
    LOADING: {URL: 'loading',TITLE: 'Loading',page: LoadingPage},

    INTRO_1: { URL: 'INTRO_1', TITLE: 'INTRO_1', page: () => {}},
    INTRO_2: { URL: 'INTRO_2', TITLE: 'INTRO_2', page: () => {}},
    INTRO_3: { URL: 'INTRO_3', TITLE: 'INTRO_3', page: () => {}},

    SING_IN: { URL: 'sign-in', TITLE: 'Sing in', page: SignInPage, },
    SING_UP: {URL: 'sing-up',  TITLE: 'Sing up', page: SingUpPage},

    CHANGE_PASSWORD: {URL: 'change-password',TITLE: 'Change password',page: ChangePasswordPage},
    CATEGORY: {URL: 'category',TITLE: 'Category',page: CategoryPage},
    SUB_CATEGORY: {URL: 'sub_category', PARAMS: '/:categoryId', TITLE: 'Sub category',page: SubCategoryPage},

    Sing_up_phone_email: {URL: 'Sing_up_phone_email',TITLE: 'Sing_up_phone_email ',page: () => {}},
    Phone_verification: {URL: 'Phone_verification',TITLE: 'Phone_verification ',page: () => {}},
    OTP_verification: {URL: 'OTP_verification',TITLE: 'OTP_verification ',page: () => {}},

    Product_details_pizza: {URL: 'Product_details_pizza',  TITLE: 'Product details pizza', page: () => {}},
    Product_details_pizza_2: {URL: 'Product_details_pizza_2',  TITLE: 'Product details pizza 2', page: () => {}},
    Order_review: {URL: 'Order_review',  TITLE: 'Order review', page: () => {}},
    Checkout: {URL: 'Checkout',  TITLE: 'Checkout', page: () => {}},
    Payment_enter_data: {URL: 'Payment_enter_data',  TITLE: 'Payment enter data', page: () => {}},
    Payment_enter_result: {URL: 'Payment_enter_result',  TITLE: 'Payment enter result', page: () => {}},
    Order_history: {URL: 'Order_history',  TITLE: 'Order history', page: () => {}},
    Pizza_with_category: {URL: 'Pizza_with_category',  TITLE: 'Pizza with category', page: () => {}},
    Order_history_completed: {URL: 'Order_history_completed',  TITLE: 'Order history completed', page: () => {}},
    Order_history_upcoming: {URL: 'Order_history_upcoming',  TITLE: 'Order history upcoming', page: () => {}},
    Order_history_cancelled: {URL: 'Order_history_cancelled',  TITLE: 'Order history cancelled', page: () => {}},
    Favorite: {URL: 'Favorite',  TITLE: 'Favorite', page: () => {}},
    Profile: {URL: 'Profile',  TITLE: 'Profile', page: () => {}},
    Track_your_order: {URL: 'Track your order',  TITLE: 'Track your order', page: () => {}},
    Support: {URL: 'Support',  TITLE: 'Support', page: () => {}},
    SETTING: {URL: 'setting',  TITLE: 'Setting', page: SettingPage},
    USER_ACCOUNT: {URL: 'user_account',  TITLE: 'USER_ACCOUNT', page: () => {}},
};

export const ROUTERS = Object.keys(ROUTER).map(key => ROUTER[key]);
