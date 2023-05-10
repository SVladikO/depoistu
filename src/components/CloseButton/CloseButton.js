import {Wrapper} from "./CloseButton.style";
import {ReactComponent as CloseIcon} from "../../icons/close.svg";

const CloseButton = ({clickHandler}) => {

    return (
        <Wrapper onClick={clickHandler}>
            <CloseIcon/>
        </Wrapper>
    );
};

export default CloseButton;