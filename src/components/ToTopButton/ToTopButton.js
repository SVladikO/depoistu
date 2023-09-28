import React from 'react';
import {ToTopButtonWrapper} from "./ToTopButton.style";
import {ReactComponent as DropdownIcon} from "assets/icons/chevron.svg";
import {useWindowScrollPositions} from "../../utils/hook";

const ToTopButton = () => {
    const { scrollY } = useWindowScrollPositions()
    const rightMargin = window.innerWidth < 400 ? '175px': '192px'

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <ToTopButtonWrapper
            isVisible={scrollY > 820}
            onClick={scrollToTop}
            rightMargin={rightMargin}
        >
            <DropdownIcon />
        </ToTopButtonWrapper>
    );
};

export default ToTopButton;