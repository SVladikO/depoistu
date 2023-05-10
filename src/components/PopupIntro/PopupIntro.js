import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {Wrapper, Text} from './PopupIntro.style';
import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {CloseButton} from "../index";

import {hideIntroPopup} from "../../features/introPopup/introPopupSlice";

const PopupIntro = () => {
    const isVisiblePopup = useSelector(state => state.introPopup.value.isVisible);
    const dispatch = useDispatch();

    const closePopup = () => dispatch(hideIntroPopup());

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={closePopup}>
            <div>
                <Wrapper>
                    <PopupIntroContent onClose={closePopup}/>
                </Wrapper>
            </div>

        </InvisibleWrapper>
    );
};

export const PopupIntroContent = ({closePopup}) => (
    <div>
        <CloseButton clickHandler={closePopup}/>
        <ContentContainer>
            <Text>
                Меню всіх кафе та ресторанів України має
                бути в одному місці. Знайдіть тут
                свій заклад.
            </Text>
        </ContentContainer>
    </div>

)

export default PopupIntro;