import {Link} from "react-router-dom";

import {Wrapper, Title, EditSection} from "./EditMenuRow.style";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {SecondaryButton} from "../Button/Button.style";
import {URL} from '../../utils/config'

const EditMenuRow = ({title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <EditSection>
                <SecondaryButton>Show</SecondaryButton>
                <Link to={URL.EDIT_MENU_ITEM}>
                    <SecondaryButton isOnlyIcon><EditIcon/></SecondaryButton>
                </Link>
            </EditSection>
        </Wrapper>
    );
};

export default EditMenuRow;