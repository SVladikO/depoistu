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
    EditRow, MainInfo, GreyDot, SeeMore, MainInfoWrapper, NewFlag,
} from "./MenuItem.style";

import {ReactComponent as TimeIcon} from "assets/icons/time.svg";
import {ReactComponent as MeasureIcon} from "assets/icons/sss.svg";
import {ReactComponent as ZoomIcon} from "assets/icons/zoom.svg";
import {ReactComponent as EditIcon} from "assets/icons/edit.svg";

import {Price, Flex, ToggleCheckbox} from "components";

import {URL} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {CATEGORY_ID_MAPPER_AS_OBJECT, CATEGORY_MAPPER_AS_ARRAY} from "utils/category";
import {translate, TRANSLATION as TR, TRANSLATION} from "utils/translation";

export const MenuItemDetails = ({
                                    item = {},
                                    isVisible,
                                    setIsVisible,
                                    withEditIcon = false,
                                    onEditClick,
                                    isWithImage,
                                    isNewItemFlag
                                }) => {

    const [isShowItemDescription, setIsShowItemDescription] = useState(false)
    const [imageUrl, setImageUrl] = useState('');

    const MenuItemImages = () => (
        <ImagesWrapper>
            <FoodImage src={item.imageUrl} onClick={() => setImageUrl(item.imageUrl)}/>
            <ZoomIcon/>
        </ImagesWrapper>
    );

    const toggleIsMenuItemVisible = async () => {
        const requestBody = {
            id: item.id,
            isVisible: !isVisible,
            method: 'put',
        }
        try {
            await fetchData(BE_API.MENU_ITEM.CHANGE_IS_VISIBLE(), requestBody)
            setIsVisible(!isVisible)
        } catch (e) {
            console.log(e.body.errorMessage)
        }
    }

    const showItemDescription = () => {
        setIsShowItemDescription(true)
    }

    const DescriptionContent = () => {
        const shortDescription = item.description.split('').slice(0, 62).join('')
        return (
             <Description>
                 {item.description.length > 62 && !isShowItemDescription
                     ? <>
                         {shortDescription}...&nbsp;
                         <SeeMore onClick={showItemDescription}>
                             {translate(TR.SEE_MORE)}
                         </SeeMore>
                     </>
                 : item.description}
                </Description>
        )
    }

    return (
        <>
            {isNewItemFlag && <NewFlag>New</NewFlag>}
            <MainInfoWrapper isWithImage={isWithImage}>
                {isWithImage && <MenuItemImages />}
                <MainInfo>
                    <Flex justifyContent="space-between" width={'100%'}>
                        <Title>{item.name}</Title>
                        {/*<Like liked={isLiked}/>*/}
                        <Price>{item.price}</Price>
                    </Flex>
                    {item.description && <DescriptionContent/>}
                </MainInfo>
            </MainInfoWrapper>
            <AdditionalDetails
                isVisible={isVisible}
                justifyContent="center"
                alignItems="center"
            >
                <MeasureIcon /> {item.size} {CATEGORY_ID_MAPPER_AS_OBJECT[item.categoryId].measurement}
                <GreyDot />
                <TimeIcon/> {item.cookingTime} {translate(TRANSLATION.MEASUREMENTS.PREPARING)}
            </AdditionalDetails>
            {withEditIcon &&
                <EditRow isVisible={isVisible}>
                    <ToggleCheckbox
                        isChecked={isVisible}
                        changeHandler={toggleIsMenuItemVisible}
                        className="ToggleCheckbox"
                        title={translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.CHANGE_VISIBILITY)}
                    />
                    <Link to={URL.EDIT_MENU_ITEM} className="EditButton">
                        <EditWrapper onClick={onEditClick}>
                            <EditIcon/>
                            <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
                        </EditWrapper>
                    </Link>
            </EditRow>
            }
        </>
    )
}

const MenuItem = (props) => {
    const {item} = props;
    const [isVisible, setIsVisible] = useState(!!item.isVisible)

    // const MenuItemImages = () => (
    //     <ImagesWrapper>
    //         <FoodImage src={item.imageUrl} onClick={() => setImageUrl(item.imageUrl)}/>
    //         <ZoomIcon/>
    //     </ImagesWrapper>
    // );

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
                <MenuItemDetails
                    {...props}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
            {/*<MenuItemPopup />*/}
        </Wrapper>
    );
};

export default MenuItem;