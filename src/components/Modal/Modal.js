import {Wrapper,ImagePlace} from './Modal.style';
import {ReactComponent as CloseIcon} from "../../icons/close.svg";
import {useSelector, useDispatch} from "react-redux";
import {closeModalWindow, showModalWindow} from "../../features/modal/modalSlice";


const Modal = ({imageUrl, handleClose}) => {
    const modalWindow = useSelector(state => state.modal.modalWindow);
    const dispatch = useDispatch();

    if(!modalWindow){
        return ;
    }

    return (
        <Wrapper>
            {imageUrl}
            <CloseIcon onClick={() => dispatch(closeModalWindow())}/>
        </Wrapper>
    );
};

export default Modal;