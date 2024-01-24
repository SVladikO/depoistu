import {useDispatch} from "react-redux";

import {EditLabel, EditRow, EditWrapper} from "./menu-item-bottom-settings.style";
import {ReactComponent as EditIcon} from 'assets/icons/edit.svg';

import ToggleCheckbox from "../../../ToggleCheckbox/ToggleCheckbox";

import {fetchPutMenuItemIsVisible} from 'features/editMenu/thunks'

import {translate, TRANSLATION} from "utils/translation";

const MenuItemBottomSettings = ({
                                    item = {},
                                    onEditClick = () => {}
                                }) => {
    const dispatch = useDispatch();

    const toggleIsMenuItemVisible = () => {
        const requestBody = {
            id: item.id,
            isVisible: +(!item.isVisible),
            method: 'put',
        }

        dispatch(fetchPutMenuItemIsVisible(requestBody))
    }

    return (
        <EditRow>
            <ToggleCheckbox
                isVisible={item.isVisible}
                isChecked={item.isVisible}
                changeHandler={toggleIsMenuItemVisible}
                label={translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.CHANGE_VISIBILITY)}
            />
            <EditWrapper onClick={onEditClick} className="EditButton">
                <EditIcon/>
                <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
            </EditWrapper>
        </EditRow>
    )
}

export default MenuItemBottomSettings;