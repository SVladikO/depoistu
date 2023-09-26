import React from 'react';
import {ToTopButtonWrapper} from "./ToTopButton.style";
import {ReactComponent as DropdownIcon} from "assets/icons/chevron.svg";
import {useWindowScrollPositions} from "../../utils/hook";

const ToTopButton = () => {
    const { scrollY } = useWindowScrollPositions()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <ToTopButtonWrapper isVisible={scrollY > 820} onClick={scrollToTop}>
            <DropdownIcon />
        </ToTopButtonWrapper>
    );
};

export default ToTopButton;