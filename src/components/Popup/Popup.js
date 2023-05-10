import {useEffect} from "react";
import {InvisibleWrapper} from "./Popup.style";
import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import ImageContent from "./content/image/ImageContent";
import IntroContent from "./content/info/IntroContent";

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
            <div>
                <CloseButton clickHandler={closePopup}/>
                <Component onClose={closePopup} {...props} />
            </div>
        </InvisibleWrapper>
    );
};

const City = props => <Popup Component={CityContent} {...props} />;
const Image= props => <Popup Component={ImageContent} {...props} />;
const Info = props => <Popup Component={IntroContent} {...props} />;

export default {
    City,
    Image,
    Info,
}