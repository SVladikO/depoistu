import {EditMenuItem} from '../../components/index'
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";

const EditMenuItemPage = () => {
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);

    return <EditMenuItem menuItem={menuItem} />;
}

export default EditMenuItemPage;