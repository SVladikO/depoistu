import {useEffect} from "react";

import {InvisibleWrapper, CloseButtonWrapper, Wrapper} from "./Popup.style";

import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import ImageContent from "./content/image/ImageContent";
import {Info as _Info, InfoText as _InfoText} from "./content/info/Info";

export const enableScrollOnBody = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
};
export const disableScrollOnBody = () => {
    document.body.style.overflowY = 'hidden';
    document.body.style.position = 'fixed';
};

const Popup = (props) => {
    const {onClose, Component, showCloseButton = true} = props;

    useEffect(() => {
        disableScrollOnBody();
    })

    const closePopup = () => {
        enableScrollOnBody();
        onClose();
    }

    return (
        <InvisibleWrapper>
            <Wrapper>
                <CloseButtonWrapper>
                    {showCloseButton && <CloseButton clickHandler={closePopup}/>}
                </CloseButtonWrapper>
                <Component onClose={closePopup} {...props} />
            </Wrapper>
        </InvisibleWrapper>
    );
};

const City = props => <Popup Component={CityContent} {...props} />;
const Image = props => <Popup Component={ImageContent} {...props} />;
const Info = props => <Popup Component={_Info} {...props} />;
const InfoText = props => <Popup Component={_InfoText} {...props} />;

export default {
    City,
    Image,
    Info,
    InfoText
}