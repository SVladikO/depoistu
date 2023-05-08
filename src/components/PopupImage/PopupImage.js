import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {Wrapper, Image} from './PopupImage.style';
import {hideImagePopup} from "../../features/imagePopup/imagePopupSlice";
import {CloseButton} from "../index";

const PopupImage = () => {
    const isVisiblePopup = useSelector(state => state.imagePopup.value.isVisible);
    const imageUrl = useSelector(state => state.imagePopup.value.imageUrl);
    const dispatch = useDispatch();

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={() => dispatch(hideImagePopup())}>
            <ImagePopupContent
                imageUrl={imageUrl}
                handleClose={() => dispatch(hideImagePopup())}
            />
        </InvisibleWrapper>

    );
};

export const ImagePopupContent = ({handleClose, imageUrl}) => (
    <div>
        <CloseButton closePopupHandler={handleClose}/>
        <Wrapper onClick={(e) => e.stopPropagation()}>
            <Image src={imageUrl}/>
        </Wrapper>
    </div>

);

export default PopupImage;