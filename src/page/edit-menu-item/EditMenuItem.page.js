import {EditMenuItem} from '../../components/index'

import {URL} from "../../utils/config";
import {LOCAL_STORAGE_KEY, LocalStorage, redirect} from "../../utils/utils";

const EditMenuItemPage = () => {
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);

    if (!menuItem && URL.EDIT_MENU) {
        return redirect(URL.SETTING)
    }

    return <EditMenuItem menuItem={menuItem} />;
}

export default EditMenuItemPage;