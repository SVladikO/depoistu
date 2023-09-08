import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {Popup} from 'components/index'
import {closeIntroPopup} from './introSlice';
import {translate, TRANSLATION} from "utils/translation";

const Intro = () => {
    const dispatch = useDispatch();
    const isIntroPopupVisible = useSelector(state => state.intro.isIntroPopupVisible)

    if (!isIntroPopupVisible) {
        return;
    }

    return (
        <Popup.InfoText onClose={() => dispatch(closeIntroPopup())}>
            {translate(TRANSLATION.INTRODUCTION)}
        </Popup.InfoText>
    )
}
export default Intro;

