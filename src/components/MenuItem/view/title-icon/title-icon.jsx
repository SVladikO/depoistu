import {useDispatch} from "react-redux";

import {FirstRow, FoodTitle} from "./title-icon.style";

import {ReactComponent as PictureIcon} from "assets/icons/picture.svg";

import {makeMenuItemImageVisible} from "features/searchDetails/searchDetailsSlice";

const TitleIcon = ({
                       item,
                       isEditMenuItemPage = false,
                   }) => {
    const dispatch = useDispatch()

    const onClickPictureIcon = () => dispatch(makeMenuItemImageVisible({id: item.id}))
    const isShowPictureIcon = !item.isImageVisible && item.imageUrl && !isEditMenuItemPage;

    return (
        <FirstRow>
            <FoodTitle>{item.name}</FoodTitle>
            {isShowPictureIcon && <PictureIcon onClick={onClickPictureIcon}/>}
        </FirstRow>
    )
}

export default TitleIcon;