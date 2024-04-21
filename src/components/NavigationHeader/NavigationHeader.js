import React from 'react';

import {Wrapper, RightSubWrapper, CurrentLanguage} from "./NavigationHeader.style";

import {ReactComponent as HeaderLogoIcon} from "assets/icons/h_logo.svg";
import {ReactComponent as FavoriteIcon} from "assets/icons/heart1.svg";

const NavigationHeader = (props) => {

    return (
        <Wrapper className='pm-NavigationHeader'>
               <HeaderLogoIcon />
               <RightSubWrapper>
                   <CurrentLanguage>UA</CurrentLanguage>
                   <FavoriteIcon />
               </RightSubWrapper>
        </Wrapper>
    );
};

export default NavigationHeader;

