import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper, Wrapper, Image} from './ImagePopup.style';
import {ReactComponent as CloseIcon} from "../../icons/close.svg";
import {hidePopup} from "../../features/imagePopup/imagePopupSlice";

const ImagePopup = () => {
    const isVisiblePopup = useSelector(state => state.imagePopup.value.isVisible);
    const imageUrl = useSelector(state => state.imagePopup.value.imageUrl);
    const dispatch = useDispatch();

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <ImagePopupContent
            imageUrl={imageUrl}
            handleClose={() => dispatch(hidePopup())}
        />
    );
};

const ImagePopupContent = ({handleClose, imageUrl}) => (
    <InvisibleWrapper onClick={handleClose}>
        <Wrapper onClick={(e) => e.stopPropagation()}>
            <Image src={imageUrl}/>
            <CloseIcon onClick={handleClose}/>
        </Wrapper>
    </InvisibleWrapper>
);

export default ImagePopup;