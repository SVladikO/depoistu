import {useEffect} from "react";

import {InvisibleWrapper, CloseButtonWrapper, Wrapper} from "./Popup.style";

import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import ImageContent from "./content/image/ImageContent";
import InfoContent from "./content/info/InfoContent";

const enableScrollOnBody = () => document.body.style.position = 'relative';
const disableScrollOnBody = () => document.body.style.position = 'fixed';

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
const Info = props => <Popup Component={InfoContent} {...props} />;

export default {
    City,
    Image,
    Info,
}