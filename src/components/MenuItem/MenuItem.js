import {Link} from "react-router-dom";
import {useState} from "react";
import {
    Wrapper,
    FoodImage,
    FoodTitle,
    Description,
    EditWrapper,
    ImagesWrapper,
    EditLabel,
    EditRow,
    Info,
    SeeMore,
    InfoWrapper,
    NewFlag,
    SizePriceTd,
    SizePriceWrapper,
    SpanWeight600,
} from "./MenuItem.style";

import {ReactComponent as ZoomIcon} from "assets/icons/zoom.svg";
import {ReactComponent as EditIcon} from "assets/icons/edit.svg";

import {ToggleCheckbox} from "components";

import {URL} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {CATEGORY_ID_MAPPER_AS_OBJECT} from "utils/category";
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

    const MenuItemImages = () => (<ImagesWrapper>
        <FoodImage src={item.imageUrl} onClick={() => setImageUrl(item.imageUrl)}/>
        <ZoomIcon/>
    </ImagesWrapper>);

    const toggleIsMenuItemVisible = async () => {
        const requestBody = {
            id: item.id, isVisible: !isVisible, method: 'put',
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

    const renderDescription = () => {
        const shortDescription = item.description.split('').slice(0, 62).join('')

        if (!item.description) {
            return;
        }

        return (<Description>
            {item.description.length > 80 && !isShowItemDescription
                ? <>
                    {shortDescription}...
                    <SeeMore onClick={showItemDescription}> {translate(TR.SEE_MORE)}</SeeMore>
                </>
                : item.description}
        </Description>)
    }

    const renderTableRow = (size, measurement, price) => (
        <tr>
            <SizePriceTd>
                <SpanWeight600>{price && '₴'} {price}</SpanWeight600>
            </SizePriceTd>
            <SizePriceTd>
                <pre>{size && ' '}</pre>
            </SizePriceTd>
            <SizePriceTd>{size} {size && measurement}</SizePriceTd>
        </tr>
    )

    const renderSizePrice = () => {
        const {categoryId, size_1, price_1, size_2, price_2, size_3, price_3} = item;

        const measurement = CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].measurement;

        return (
            <SizePriceWrapper>
                <table>
                    <tbody>
                    {renderTableRow(size_1, measurement, price_1)}
                    {renderTableRow(size_2, measurement, price_2)}
                    {renderTableRow(size_3, measurement, price_3)}
                    </tbody>
                </table>
            </SizePriceWrapper>)
    }

    return (<>
        {isNewItemFlag && <NewFlag>New</NewFlag>}
        <InfoWrapper isWithImage={isWithImage}>
            {isWithImage && <MenuItemImages/>}
            <Info>
                <FoodTitle>{item.name}</FoodTitle>
                {renderDescription()}
                {renderSizePrice()}
            </Info>
        </InfoWrapper>

        {withEditIcon && <EditRow>
            <ToggleCheckbox
                isVisible={isVisible}
                isChecked={isVisible}
                changeHandler={toggleIsMenuItemVisible}
                label={translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.CHANGE_VISIBILITY)}
            />
            <Link to={URL.EDIT_MENU_ITEM} className="EditButton">
                <EditWrapper onClick={onEditClick}>
                    <EditIcon/>
                    <EditLabel>{translate(TRANSLATION.COMPONENTS.MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}</EditLabel>
                </EditWrapper>
            </Link>
        </EditRow>}
    </>)
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

    return (<Wrapper
        isVisible={isVisible}
        className='pm-MenuItem'
    >
        <MenuItemDetails
            {...props}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        />
        {/*<MenuItemPopup />*/}
    </Wrapper>);
};

export default MenuItem;