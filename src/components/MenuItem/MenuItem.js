import {Link} from "react-router-dom";
import {useState} from "react";
import {
    Wrapper,
    FoodImage,
    Title,
    Description,
    AdditionalDetails,
    EditWrapper,
    ImagesWrapper,
    EditLabel
} from "./MenuItem.style";

import {Price, Flex, Popup} from "../index";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as ZoomIcon} from "../../icons/zoom.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {URL} from "../../utils/config";
import {translate, TRANSLATION} from "../../utils/translation";
import {CATEGORY_MAPPER} from "../../utils/category";

export const MenuItemDetails = ({item = {}, withEditIcon = false, onEditClick}) => {
    const {NAME, DESCRIPTION, CATEGORY_ID, PRICE, COOKING_TIME, SIZE, isLiked} = item;

    return (
        <Flex flexDirection='column' width={'100%'}>
            <Flex justifyContent="space-between">
                <Title>{NAME}</Title>
                {/*<Like liked={isLiked}/>*/}
                {withEditIcon && <Link to={URL.EDIT_MENU_ITEM}>
                    <EditWrapper onClick={onEditClick}>
                        <EditIcon/>
                        <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
                    </EditWrapper>
                </Link>}
            </Flex>
            <Price>{PRICE}</Price>
            <Description>{DESCRIPTION}</Description>
            <AdditionalDetails>
                <TimeIcon/> {COOKING_TIME} {translate(TRANSLATION.MEASUREMENTS.PREPARING)} <MeasureIcon/> {SIZE} {CATEGORY_MAPPER[CATEGORY_ID].measurement}
            </AdditionalDetails>
            {/*<Absolute bottom={'10px'} right={'10px'}>*/}
            {/*    <BasketIcon />*/}
            {/*() => dispatch(addOrderItem(item))*/}
            {/*</Absolute>*/}
        </Flex>
    )
}

const MenuItem = props => {
    const {IMAGE_URL} = props.item;
    const [imageUrl, setImageUrl] = useState('');

    return (
        <Wrapper className='pm-MenuItem'>
            <Flex justifyContent="stretch">
                <ImagesWrapper>
                    <FoodImage src={IMAGE_URL} onClick={() => setImageUrl(IMAGE_URL)} />
                    <ZoomIcon />
                </ImagesWrapper>
                <MenuItemDetails {...props} />
            </Flex>
            {imageUrl && <Popup.Image imageUrl={imageUrl} onClose={() => setImageUrl('')}>
                <MenuItemDetails {...props} />
            </Popup.Image>
            }
        </Wrapper>
    );
};

export default MenuItem;