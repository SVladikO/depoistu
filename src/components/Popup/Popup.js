import {useEffect} from "react";

import {InvisibleWrapper, CloseButtonWrapper, Wrapper} from "./Popup.style";

import {ReactComponent as CloseIcon} from "assets/icons/close.svg";

import CityContent from "./city/CityContent";
import {Info as _Info} from "./info/Info";

export const enableScrollOnBody = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
};
export const disableScrollOnBody = () => {
    document.body.style.overflowY = 'hidden';
};

const Popup = (props) => {
    const {onClose = () => {}, Component, showCloseButton = true, popupPosition = 'center'} = props;
    useEffect(() => {
        disableScrollOnBody();
    })

    const closePopup = () => {
        enableScrollOnBody();
        onClose();
    }

    return (
        <InvisibleWrapper popupPosition={popupPosition} className="invisible-wrapper">
            <Wrapper popupPosition={popupPosition}>
                {showCloseButton && <CloseButtonWrapper popupPosition={popupPosition} onClick={closePopup}>
                    <CloseIcon/>
                </CloseButtonWrapper>
                }
                <Component onClose={closePopup} {...props} />
            </Wrapper>
        </InvisibleWrapper>
    );
};

const City = props => <Popup Component={CityContent} {...props} popupPosition="center" showCloseButton={false} />;
const Center = props => <Popup Component={_Info} {...props} popupPosition='center'/>;
const Bottom = props => <Popup Component={_Info} {...props} popupPosition='end' noPadding />;

export default {
    City,
    Center,
    Bottom
}