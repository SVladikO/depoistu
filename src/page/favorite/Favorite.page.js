import React from 'react';

import {URL} from 'utils/config'

import SingInSingUpView from "../../page-view/singInSingUp/singInSingUp.view";

const FavoritePage = () => {
    return (
        <SingInSingUpView backUrl={URL.FAVORITE}/>
    )
}

export default FavoritePage;