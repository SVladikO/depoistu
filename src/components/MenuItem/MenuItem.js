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
    EditLabel,
    StatusHidden
} from "./MenuItem.style";

import {Price, Flex, Popup, ToggleCheckbox} from "../index";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as ZoomIcon} from "../../icons/zoom.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {URL} from "../../utils/config";
import {translate, TRANSLATION} from "../../utils/translation";
import {CATEGORY_MAPPER} from "../../utils/category";
import {BE_API, fetchData} from "../../utils/fetch";

export const MenuItemDetails = ({
                                    item = {},
                                    isVisible,
                                    setIsVisible,
                                    withEditIcon = false,
                                    onEditClick,
                                }) => {
    const {NAME, DESCRIPTION, CATEGORY_ID, PRICE, COOKING_TIME, SIZE, ID} = item;

    const toggleIsMenuItemVisible = async () => {
        try {
            await fetchData(BE_API.MENU_ITEM.IS_ITEM_VISIBLE(), {
                method: 'put',
                id: ID,
                is_visible: !isVisible,
            })
            setIsVisible(!isVisible)
        } catch (e) {
            console.log(e)
        }
    }

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
                <TimeIcon/> {COOKING_TIME} {translate(TRANSLATION.MEASUREMENTS.PREPARING)}
                <MeasureIcon/> {SIZE} {CATEGORY_MAPPER[CATEGORY_ID].measurement}
                <ToggleCheckbox
                    isChecked={isVisible}
                    changeHandler={toggleIsMenuItemVisible}
                    className="ToggleCheckbox"
                />
            </AdditionalDetails>
            {/*<Absolute bottom={'10px'} right={'10px'}>*/}
            {/*    <BasketIcon />*/}
            {/*() => dispatch(addOrderItem(item))*/}
            {/*</Absolute>*/}
        </Flex>
    )
}

const MenuItem = props => {
    const {IMAGE_URL, IS_VISIBLE} = props.item;
    const [imageUrl, setImageUrl] = useState('');
    const [isVisible, setIsVisible] = useState(!!IS_VISIBLE)

    const MenuItemImages = () => (
        <ImagesWrapper>
            <FoodImage src={IMAGE_URL} onClick={() => setImageUrl(IMAGE_URL)}/>
            <ZoomIcon/>
        </ImagesWrapper>
    );

    const MenuItemPopup = () => (
        imageUrl && <Popup.Image imageUrl={imageUrl} onClose={() => setImageUrl('')}>
            <MenuItemDetails
                {...props}
            />
        </Popup.Image>
    )

    return (
        <Wrapper
            isVisible={isVisible}
            className='pm-MenuItem'
        >
            <Flex justifyContent="stretch">
                {/*<MenuItemImages />*/}
                <MenuItemDetails
                    {...props}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
            </Flex>
            <StatusHidden isVisible={isVisible}>
                {translate(TRANSLATION.COMPONENTS.EDIT_MENU_ITEM.BUTTON.HIDDEN)}
            </StatusHidden>
            {/*<MenuItemPopup />*/}
        </Wrapper>
    );
};

export default MenuItem;