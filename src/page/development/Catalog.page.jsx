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
    {href: 'Order history completed',},
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
            {pages.map((page, index) =>
                <MobileDevice key={page.href+index} href={page.href} index={index+1}>{page.component}</MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;