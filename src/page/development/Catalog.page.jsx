import React from "react";

import {MobileWrapper} from './Catalog.style'
import MobileDevice from '../../components/MobileDevice';


import {ROUTER} from "../../utils/config";

import LoadingPage from "../Loading.page";
import SignInPage from "../sing-in/SignIn.page";
import SingUpPage from "../sing-up/SingUp.page";
import CategoryPage from "../category/Category.page";
import SettingPage from "../setting/Setting.page";
import ChangePassword from "../change-password/ChangePassword.page";
import SubCategoryPage from "../sub-category/SubCategory.page";

const pages = [
    {href: ROUTER.LOADING, component: <LoadingPage/>},
    {href: 'Intro 1'},
    {href: 'Intro 2'},
    {href: 'Intro 3'},
    {href: ROUTER.SING_IN, component: <SignInPage/>},
    {href: ROUTER.SING_UP, component: <SingUpPage pageTitle="Create an Account"/>},
    {href: 'Sing up phone | email',},
    {href: 'Phone verification',},
    {href: 'OTP verification', },
    {href: 'Pizza', },
    {href: ROUTER.CHANGE_PASSWORD, component: <ChangePassword />},
    {href: ROUTER.CATEGORY, component: <CategoryPage />},
    {href: ROUTER.SUB_CATEGORY, component: <SubCategoryPage />},
    {href: 'Product details pizza'},
    {href: 'Product details pizza 2'},
    {href: 'Order review',},
    {href: 'Checkout',},
    {href: 'Payment enter data'},
    {href: 'Payment enter result',},
    {href: 'Order history',},
    {href: 'Pizza with category',},
    {href: 'Order history completed',},
    {href: 'Order history upcoming'},
    {href: 'Order history cancelled',},
    {href: 'Favorite',},
    {href: 'Profile', component: 'Profile'},
    {href: 'Track your order'},
    {href: 'Support'},
    {href: ROUTER.SETTING, component: <SettingPage />,},
    {href: 'Settings'},
];

function CatalogPage() {
    return (
        <MobileWrapper>
            {pages.map((page, index) =>
                <MobileDevice key={page.href} href={page.href} index={index+1}>{page.component}</MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;