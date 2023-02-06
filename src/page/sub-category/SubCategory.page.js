import React,{useState, useRef, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Flex} from "./SubCategory.style";

import {ErrorMessage, Load, MenuItem} from "../../components";
import {BE_API} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";
import {ImagePopup} from "../../components";



const SubCategoryPage = () => {
    const {categoryId} = useParams();
    const [menu_items] = useLocalStorageFetch(
        'category' + categoryId,
        [],
        BE_API.GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY(1, categoryId)
    );
    const [popUpstate, setIsVisiblePopup] = useState({
        isVisiblePopup: false,
        selectedMenuItem: null
    });

    const showPopUp = (selectedMenuItem) => {
        setIsVisiblePopup({
            isVisiblePopup: true,
            selectedMenuItem: selectedMenuItem
        });
    }
    const closePopUp = () => {
        setIsVisiblePopup({
            isVisiblePopup: false,
            selectedMenuItem: null
        });
    }
    return (
        <>
            {popUpstate.isVisiblePopup && <ImagePopup handleClose={closePopUp} selectedMenuItem={popUpstate.selectedMenuItem}/>}
            <Load/>
            <ErrorMessage/>
            <Flex>
                {menu_items.map((menuItem, index) => <MenuItem onClick={() => showPopUp(menuItem)} key={index} item={menuItem}/>)}
            </Flex>
        </>

    );
};

export default SubCategoryPage;