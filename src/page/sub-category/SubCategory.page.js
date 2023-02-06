import {useParams} from "react-router-dom";
import {Flex} from "./SubCategory.style";

import {ErrorMessage, Load, MenuItem} from "../../components";
import {BE_API} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";

const SubCategoryPage = () => {
    const {categoryId} = useParams();
    const [menu_items] = useLocalStorageFetch(
        'category' + categoryId,
        [],
        BE_API.GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY(1, categoryId)
    );

    return (
        <>
            <Load/>
            <ErrorMessage/>
            <Flex>
                {menu_items.map((menuItem, index) => <MenuItem key={index} item={menuItem}/>)}
            </Flex>
        </>

    );
};

export default SubCategoryPage;