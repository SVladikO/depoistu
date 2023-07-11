import {useEffect} from "react";

import {InvisibleWrapper, CloseButtonWrapper, Wrapper} from "./Popup.style";

import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import ImageContent from "./content/image/ImageContent";
import {Info as _Info, InfoText as _InfoText} from "./content/info/Info";

const enableScrollOnBody = () => document.body.style.overflowY = 'auto';
const disableScrollOnBody = () => document.body.style.overflowY = 'hidden';

const Popup = (props) => {
    const {onClose, Component} = props;

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
                    <CloseButton clickHandler={closePopup}/>
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