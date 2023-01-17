import React from "react";

import {MobileWrapper} from './Catalog.style'
import MobileDevice from '../../components/MobileDevice';
import {ROUTERS} from "../../utils/config";


import {ROUTER} from "../../utils/config";

import LoadingPage from "../Loading.page";
import SignInPage from "../sing-in/SignIn.page";
import SingUpPage from "../sing-up/SingUp.page";
import CategoryPage from "../category/Category.page";
import SettingPage from "../setting/Setting.page";
import ChangePassword from "../change-password/ChangePassword.page";
import SubCategoryPage from "../sub-category/SubCategory.page";
import OrderCompleted from "../orderCompleted/orderCompleted";

const pages = [
    {href: ROUTER.LOADING.URL, component: <LoadingPage/>},
    {href: 'Intro 1'},
    {href: 'Intro 2'},
    {href: 'Intro 3'},
    {href: ROUTER.SING_IN.URL, component: <SignInPage/>},
    {href: ROUTER.SING_UP.URL, component: <SingUpPage pageTitle="Create an Account"/>},
    {href: 'Sing up phone | email',},
    {href: 'Phone verification',},
    {href: 'OTP verification', },
    {href: 'Pizza', },
    {href: ROUTER.CHANGE_PASSWORD.URL, component: <ChangePassword />},
    {href: ROUTER.CATEGORY.URL, component: <CategoryPage />},
    {href: ROUTER.SUB_CATEGORY.URL, component: <SubCategoryPage />},
    {href: 'Product details pizza'},
    {href: 'Product details pizza 2'},
    {href: 'Order review',},
    {href: 'Checkout',},
    {href: 'Payment enter data'},
    {href: 'Payment enter result',},
    {href: 'Order history',},
    {href: 'Pizza with category',},
    {href: ROUTER.Order_history_completed.URL, component: <OrderCompleted/>},
    {href: 'Order history upcoming'},
    {href: 'Order history cancelled',},
    {href: 'Favorite',},
    {href: 'Profile', component: 'Profile'},
    {href: 'Track your order'},
    {href: 'Support'},
    {href: ROUTER.SETTING.URL, component: <SettingPage />,},
    {href: 'Settings2'},
];

function CatalogPage() {
    return (
        <MobileWrapper>
            {ROUTERS.map((p, index) =>
                <MobileDevice key={p.URL+index} index={index} {...p}><p.page /></MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;