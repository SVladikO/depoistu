import {useDispatch} from "react-redux";

import {FirstRow, FoodTitle} from "./title-icon.style";

import {ReactComponent as PictureIcon} from "assets/icons/picture.svg";

import {makeMenuItemImageVisible} from "features/searchDetails/searchDetailsSlice";
import {changeIsImageVisibleEditMenu} from "features/editMenu/editMenuSlice"
import {URL} from 'utils/config';
//duplication
const isSelected = url => window.location.pathname === url;

const TitleIcon = ({item, isCompanyVerified}) => {
    const dispatch = useDispatch()

    const onClickPictureIcon = () => {
        if (isSelected(URL.EDIT_MENU)) {
            dispatch(changeIsImageVisibleEditMenu({id: item.id}))
        }

        dispatch(makeMenuItemImageVisible({id: item.id}))
    }
    const isShowPictureIcon = !item.isImageVisible && item.imageUrl && isCompanyVerified;

    return (
        <FirstRow>
            <FoodTitle>{item.name}</FoodTitle>
            {isShowPictureIcon && <PictureIcon onClick={onClickPictureIcon}/>}
        </FirstRow>
    )
}

export default TitleIcon;