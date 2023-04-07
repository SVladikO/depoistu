import {Wrapper, Title, EditSection} from "./EditMenuRow.style";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {SecondaryButton} from "../Button/Button.style";

const EditMenuRow = ({menuId, title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <EditSection>
                <SecondaryButton>Show</SecondaryButton>
                <SecondaryButton><EditIcon/></SecondaryButton>
            </EditSection>
        </Wrapper>
    );
};

export default EditMenuRow;