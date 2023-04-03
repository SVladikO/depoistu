import {Wrapper, Title, EditSection, SecondaryButtonEdit} from "./EditMenuRow.style";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";

const EditMenuRow = ({menuId, title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <EditSection>
                <SecondaryButtonEdit>Show</SecondaryButtonEdit>
                <SecondaryButtonEdit><EditIcon/></SecondaryButtonEdit>
            </EditSection>
        </Wrapper>
    );
};

export default EditMenuRow;