import {Image, Wrapper} from './ImagePopup.style';
import {ReactComponent as CloseIcon} from "../../icons/close.svg";


const ImagePopup = ({selectedMenuItem, handleClose}) => {
    return (
        <div style={{height: '100vh'}} onClick={handleClose}>
            <Wrapper onClick={(e) => e.stopPropagation()}>
                <Image src={selectedMenuItem.image_url}/>
                <CloseIcon onClick={handleClose}/>
            </Wrapper>
        </div>
    );
};

export default ImagePopup;