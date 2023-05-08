import {Wrapper} from "./CloseButton.style";
import {ReactComponent as CloseIcon} from "../../icons/close.svg";

const CloseButton = ({closePopupHandler}) => {
    return (
        <Wrapper onClick={closePopupHandler}>
            <CloseIcon/>
        </Wrapper>
    );
};

export default CloseButton;