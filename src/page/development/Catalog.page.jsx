import React from "react";

import {MobileWrapper} from './Catalog.style'
import MobileDevice from '../../components/MobileDevice';
import LoadingPage from "../Loading.page";
import SignInPage from "../sing-in/SignIn.page";

import {ROUTER} from "../../utils/config";
import SingUpPage from "../sing-up/SingUp.page";

const pages = [
    {href: ROUTER.LOADING, component: <LoadingPage/>},
    {href: 'Intro 1', component: 'c intro 1'},
    {href: 'Intro 2', component: 'c intro 2'},
    {href: 'Intro 3', component: 'c intro 3'},
    {href: ROUTER.SING_IN, component: <SignInPage/>},
    {href: ROUTER.SING_UP, component: <SingUpPage pageTitle="Create an Account"/>},
    {href: 'Sing up phone | email', component: 'c sing up phone | email'},
    {href: 'Phone verification', component: 'c Phone verification'},
    {href: 'OTP verification', component: 'c OTP verification'},
    {href: 'Category', component: 'c Category'},
    {href: 'Pizza', component: 'c Pizza'},
    {href: 'Change password', component: 'c Change password'},
    {href: 'Product details burger', component: 'c Product details burger'},
    {href: 'Product details pizza', component: 'c Product details pizza'},
    {href: 'Product details pizza 2', component: 'c Product details pizza'},
    {href: 'Order review', component: 'c Order review'},
    {href: 'Checkout', component: 'c Checkout'},
    {href: 'Payment enter data', component: 'c Payment enter data'},
    {href: 'Payment enter result', component: 'c Payment enter result'},
    {href: 'Order history', component: 'c Order history'},
    {href: 'Pizza with category', component: 'c Pizza with category'},
    {href: 'Order history completed', component: 'c Order history completed'},
    {href: 'Order history upcoming', component: 'c Order history upcoming'},
    {href: 'Order history cancelled', component: 'c Order history cancelled'},
    {href: 'Favorite', component: 'c Favorite'},
    {href: 'Profile', component: 'c Profile'},
    {href: 'Track your order', component: 'c Track your order'},
    {href: 'Support', component: 'c Support'},
    {href: 'Order', component: 'c Order'},
    {href: 'Settings', component: 'c Settings'},
];

function CatalogPage() {
    return (
        <MobileWrapper>
            {pages.map((page, index) =>
                <MobileDevice key={page.href} href={page.href} index={index}>{page.component}</MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;