import {Link} from "react-router-dom";

import {Wrapper, Title, EditSection} from "./EditMenuRow.style";

import {ReactComponent as EditIcon} from "assets/icons/edit.svg";

import {SecondaryButton} from "components/Buttons/SecondaryButton";

import {URL} from 'utils/config'

const EditMenuRow = ({title, onEditClick}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <EditSection>
                <SecondaryButton>Show</SecondaryButton>
                <Link to={URL.EDIT_MENU_ITEM}>
                    <SecondaryButton isOnlyIcon onClick={onEditClick}><EditIcon/></SecondaryButton>
                </Link>
            </EditSection>
        </Wrapper>
    );
};

export default EditMenuRow;