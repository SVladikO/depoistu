import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {Wrapper, Text} from './PopupIntro.style';
import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {CloseButton, RowSplitter} from "../index";

import {hideIntroPopup} from "../../features/introPopup/introPopupSlice";
import {PrimaryButton} from "../Button/Button.style";

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
                <CloseButton clickHandler ={closePopup}/>
                <Wrapper>
                    <PopupIntroContent onClose={closePopup}/>
                </Wrapper>
            </div>

        </InvisibleWrapper>
    );
};

export const PopupIntroContent = ({closePopup = () => {}}) => (
    <div>
        <CloseButton clickHandler ={closePopup}/>
        <ContentContainer>
            <Text>
                Меню всіх кафе та ресторанів України має
                бути в одному місці. Знайдіть тут
                свій заклад.
            </Text>
            <RowSplitter height={"15px"}/>
            <PrimaryButton isWide onClick={closePopup}>Далі</PrimaryButton>
        </ContentContainer>
    </div>

)

export default PopupIntro;