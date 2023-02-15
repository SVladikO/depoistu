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
        <InvisibleWrapper onClick={() => dispatch(hidePopup())}>
            <ImagePopupContent
                imageUrl={imageUrl}
                handleClose={() => dispatch(hidePopup())}
            />
        </InvisibleWrapper>

    );
};

export const ImagePopupContent = ({handleClose, imageUrl}) => (
    <Wrapper onClick={(e) => e.stopPropagation()}>
        <Image src={imageUrl}/>
        <CloseIcon onClick={handleClose}/>
    </Wrapper>
);

export default ImagePopup;