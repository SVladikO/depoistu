import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {EditLabel, EditRow, EditWrapper} from "./menu-item-bottom-settings.style";
import {ReactComponent as EditIcon} from 'assets/icons/edit.svg';
import ToggleCheckbox from "../../../ToggleCheckbox/ToggleCheckbox";

import {changeIsVisibleEditMenu} from 'features/editMenu/editMenuSlice'

import {URL} from "utils/config";
import {errorHandler} from "utils/management";
import {BE_API, fetchData} from "utils/fetch";
import {translate, TRANSLATION} from "utils/translation";

const MenuItemBottomSettings = ({
                                    item = {}, onEditClick = () => {
    }
                                }) => {
    const dispatch = useDispatch();

    const toggleIsMenuItemVisible = () => {
        const requestBody = {
            id: item.id,
            isVisible: +(!item.isVisible),
            method: 'put',
        }

        fetchData(BE_API.MENU_ITEM.CHANGE_IS_VISIBLE(), requestBody)
            .then(res => {
                dispatch(changeIsVisibleEditMenu(item.id))
            })
            .catch(errorHandler)
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