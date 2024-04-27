import React from 'react';
import {useDispatch} from "react-redux";

import {Wrapper, RightSubWrapper, CurrentLanguage} from "./NavigationHeader.style";

import {ReactComponent as HeaderLogoIcon} from "assets/icons/h_logo.svg";
import {ReactComponent as FavoriteIcon} from "assets/icons/heart1.svg";
import {openLanguagePopup} from "../../features/language/languageSlice";
import {translate, TRANSLATION as TR} from "../../utils/translation";

const NavigationHeader = (props) => {
    const dispatch = useDispatch();

    return (
        <Wrapper className='pm-NavigationHeader'>
               <HeaderLogoIcon />
               <RightSubWrapper>
                   <CurrentLanguage onClick={() => dispatch(openLanguagePopup())}>
                       {translate(TR.PAGE.SETTINGS.MENU_ROW.HEADER_LANGUAGE)}
                   </CurrentLanguage>
                   <FavoriteIcon />
               </RightSubWrapper>
        </Wrapper>
    );
};

export default NavigationHeader;

