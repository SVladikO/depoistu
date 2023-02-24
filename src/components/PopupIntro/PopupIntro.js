import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {Wrapper, Text} from './PopupIntro.style';
import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {RowSplitter} from "../index";

import {hideIntroPopup} from "../../features/introPopup/introPopupSlice";
import {PrimaryWideButton} from "../Button/Button.style";

const PopupIntro = () => {
    const isVisiblePopup = useSelector(state => state.introPopup.value.isVisible);
    const dispatch = useDispatch();

    const close = () => dispatch(hideIntroPopup());

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={close}>
            <Wrapper>
                <PopupIntroContent onClose={close}/>
            </Wrapper>
        </InvisibleWrapper>

    );
};

export const PopupIntroContent = ({close = () => {}}) => (
    <ContentContainer>
        <Text>
            Меню всіх кафе та ресторанів України має
            бути в одному місці. Знайдіть тут
            свій заклад.
        </Text>
        <RowSplitter height={"15px"}/>
        <PrimaryWideButton onClick={close}>Далі</PrimaryWideButton>
    </ContentContainer>
)

export default PopupIntro;