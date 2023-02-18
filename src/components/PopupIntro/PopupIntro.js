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

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={() => dispatch(hideIntroPopup())}>
            <Wrapper>
                <ContentContainer>
                    <Text>
                        Меню всіх кафе та ресторанів України має
                        бути в одному місці. Знайдіть тут
                        свій заклад.
                    </Text>
                    <RowSplitter height={"15px"}/>
                    <PrimaryWideButton onClick={() => dispatch(hideIntroPopup())}>Далі</PrimaryWideButton>
                </ContentContainer>
            </Wrapper>
        </InvisibleWrapper>

    );
};

export default PopupIntro;