import {Link} from "react-router-dom";

import {EditLabel, EditRow, EditWrapper} from "./menu-item-bottom-settings.style";
import {ReactComponent as EditIcon} from 'assets/icons/edit.svg';
import ToggleCheckbox from "../../../ToggleCheckbox/ToggleCheckbox";

import {URL} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";
import {translate, TRANSLATION} from "utils/translation";

const MenuItemBottomSettings = ({
                                    item = {},
                                    isItemVisible,
                                    setIsItemVisible,
                                    onEditClick = () => {},
                                }) => {

    const toggleIsMenuItemVisible = () => {
        const requestBody = {
            id: item.id,
            isVisible: isItemVisible,
            method: 'put',
        }

        fetchData(BE_API.MENU_ITEM.CHANGE_IS_VISIBLE(), requestBody)
            .then(res => setIsItemVisible(res.body.isVisible))
            .catch(errorHandler)
    }

    return (
        <EditRow>
            <ToggleCheckbox
                isVisible={isItemVisible}
                isChecked={isItemVisible}
                changeHandler={toggleIsMenuItemVisible}
                label={translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.CHANGE_VISIBILITY)}
            />
            <Link to={URL.EDIT_MENU_ITEM} className="EditButton">
                <EditWrapper onClick={onEditClick}>
                    <EditIcon/>
                    <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
                </EditWrapper>
            </Link>
        </EditRow>
    )
}

export default MenuItemBottomSettings;