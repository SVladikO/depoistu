import {useEffect} from "react";

import {InvisibleWrapper, CloseButtonWrapper, Wrapper} from "./Popup.style";

import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import {Info as _Info} from "./content/info/Info";

export const enableScrollOnBody = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
};
export const disableScrollOnBody = () => {
    document.body.style.overflowY = 'hidden';
};


const Popup = (props) => {
    const {onClose, Component, showCloseButton = true, position} = props;
    useEffect(() => {
        disableScrollOnBody();
    })

    const closePopup = () => {
        enableScrollOnBody();
        onClose();
    }

    return (
        <InvisibleWrapper position={position} className="invisible-wrapper">
            <Wrapper position={position}>
                <CloseButtonWrapper>
                    {showCloseButton && <CloseButton clickHandler={closePopup}/>}
                </CloseButtonWrapper>
                <Component onClose={closePopup} {...props} />
            </Wrapper>
        </InvisibleWrapper>
    );
};

const City = props => <Popup Component={CityContent} {...props} position="center" />;
const Info = props => <Popup Component={_Info} {...props} />;

export default {
    City,
    Info,
}