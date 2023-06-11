import {useEffect} from "react";
import {InvisibleWrapper} from "./Popup.style";
import {CloseButton} from "../index";
import CityContent from "./content/city/CityContent";
import ImageContent from "./content/image/ImageContent";
import InfoContent from "./content/info/InfoContent";

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
            <div>
                <CloseButton clickHandler={closePopup}/>
                <Component onClose={closePopup} {...props} />
            </div>
        </InvisibleWrapper>
    );
};

const City = props => <Popup Component={CityContent} {...props} />;
const Image= props => <Popup Component={ImageContent} {...props} />;
const Info = props => <Popup Component={InfoContent} {...props} />;

export default {
    City,
    Image,
    Info,
}