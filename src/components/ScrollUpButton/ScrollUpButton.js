import React from 'react';
import {ToTopButtonWrapper} from "./ScrollUpButton.style";
import {ReactComponent as DropdownIcon} from "assets/icons/chevron.svg";
import {useWindowScrollPositions} from "../../utils/hook";

const ScrollUpButton = () => {
    const {scrollY} = useWindowScrollPositions()
    const rightMargin = window.innerWidth < 400 ? '175px' : '192px'

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <ToTopButtonWrapper
            className="scroll_up_button"
            isVisible={scrollY > 820}
            onClick={scrollToTop}
            rightMargin={rightMargin}
        >
            <DropdownIcon/>
        </ToTopButtonWrapper>
    );
};

export default ScrollUpButton;