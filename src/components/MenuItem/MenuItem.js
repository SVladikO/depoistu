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
    StatusHidden,
    EditRow,
} from "./MenuItem.style";

import {Price, Flex, ToggleCheckbox} from "../index";
import {ReactComponent as TimeIcon} from "../../assets/icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../assets/icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../assets/icons/basket.svg";
import {ReactComponent as ZoomIcon} from "../../assets/icons/zoom.svg";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
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


    const toggleIsMenuItemVisible = async () => {
        try {
            await fetchData(BE_API.MENU_ITEM.CHANGE_IS_VISIBLE(), {
                method: 'put',
                id: item.id,
                isVisible: !isVisible,
            })
            setIsVisible(!isVisible)
        } catch (e) {
            console.log(e.body.errorMessage)
        }
    }

    return (
        <Flex flexDirection='column' width={'100%'}>
            <Flex justifyContent="space-between">
                <Title>{item.name}</Title>
                {/*<Like liked={isLiked}/>*/}
                <Price>{item.price}</Price>
            </Flex>
            <Description>{item.description}</Description>
            <AdditionalDetails>
                <TimeIcon/> {item.cookingTime} {translate(TRANSLATION.MEASUREMENTS.PREPARING)}
                <MeasureIcon/> {item.size} {CATEGORY_MAPPER[item.categoryId].measurement}

            </AdditionalDetails>
            {/*<Absolute bottom={'10px'} right={'10px'}>*/}
            {/*    <BasketIcon />*/}
            {/*() => dispatch(addOrderItem(item))*/}
            {/*</Absolute>*/}
            {withEditIcon &&
                <EditRow>
                    <ToggleCheckbox
                        isChecked={isVisible}
                        changeHandler={toggleIsMenuItemVisible}
                        className="ToggleCheckbox"
                    />
                    <Link to={URL.EDIT_MENU_ITEM}>
                        <EditWrapper onClick={onEditClick}>
                            <EditIcon/>
                            <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
                        </EditWrapper>
                    </Link>
            </EditRow>
            }
        </Flex>
    )
}

const MenuItem = (props) => {
    const {item} = props;
    const [imageUrl, setImageUrl] = useState('');
    const [isVisible, setIsVisible] = useState(!!item.isVisible)

    const MenuItemImages = () => (
        <ImagesWrapper>
            <FoodImage src={item.imageUrl} onClick={() => setImageUrl(item.imageUrl)}/>
            <ZoomIcon/>
        </ImagesWrapper>
    );

    // const MenuItemPopup = () => (
    //     imageUrl && <Popup.Image imageUrl={imageUrl} onClose={() => setImageUrl('')}>
    //         <MenuItemDetails
    //             {...props}
    //         />
    //     </Popup.Image>
    // )

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
            {!isVisible && (
                <StatusHidden>
                {translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.HIDDEN)}
            </StatusHidden>
            )}
            {/*<MenuItemPopup />*/}
        </Wrapper>
    );
};

export default MenuItem;