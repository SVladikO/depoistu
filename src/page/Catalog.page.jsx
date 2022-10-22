import React from "react";

import {MobileWrapper} from './Catalog.style'
import MobileDevice from '../component/MobileDevice';

const pages = [
    {title: 'Loading', component: 'c loading'},
    {title: 'Intro 1', component: 'c intro 1'},
    {title: 'Intro 2', component: 'c intro 2'},
    {title: 'Intro 3', component: 'c intro 3'},
    {title: 'Sing in', component: 'c sing in'},
    {title: 'Sing up', component: 'c sing up'},
    {title: 'Sing up phone | email', component: 'c sing up phone | email'},
    {title: 'Phone verification', component: 'c Phone verification'},
    {title: 'OTP verification', component: 'c OTP verification'},
    {title: 'Category', component: 'c Category'},
    {title: 'Pizza', component: 'c Pizza'},
    {title: 'Change password', component: 'c Change password'},
    {title: 'Product details burger', component: 'c Product details burger'},
    {title: 'Product details pizza', component: 'c Product details pizza'},
    {title: 'Product details pizza 2', component: 'c Product details pizza'},
    {title: 'Order review', component: 'c Order review'},
    {title: 'Checkout', component: 'c Checkout'},
    {title: 'Payment enter data', component: 'c Payment enter data'},
    {title: 'Payment enter result', component: 'c Payment enter result'},
    {title: 'Order history', component: 'c Order history'},
    {title: 'Pizza with category', component: 'c Pizza with category'},
    {title: 'Order history completed', component: 'c Order history completed'},
    {title: 'Order history upcoming', component: 'c Order history upcoming'},
    {title: 'Order history cancelled', component: 'c Order history cancelled'},
    {title: 'Favorite', component: 'c Favorite'},
    {title: 'Profile', component: 'c Profile'},
    {title: 'Track your order', component: 'c Track your order'},
    {title: 'Support', component: 'c Support'},
    {title: 'Order', component: 'c Order'},
    {title: 'Settings', component: 'c Settings'},
];

function CatalogPage() {
    return (
        <MobileWrapper>
            {pages.map((page, index) =>
                <MobileDevice title={index + '. ' + page.title}>{page.component}</MobileDevice>
            )}
        </MobileWrapper>
    )
}

export default CatalogPage;