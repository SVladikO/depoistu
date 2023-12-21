import {useState} from "react";

import {
    Description,
    FoodTitle, Wrapper,
    NewFlag,
    SeeMore,
    FirstRow,
    SizePriceTd,
    SizePriceWrapper,
    SpanWeight600
} from "./menu-item-description.style";

import {ReactComponent as PictureIcon} from "assets/icons/picture.svg";

import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_ID_MAPPER_AS_OBJECT} from "utils/category";

 const MenuItemDescription = ({ isNewItemFlag, item = {}, wasImageShow, isSwitchImageVisible, switchImageVisibility }) => {

    const [isShowItemDescription, setIsShowItemDescription] = useState(false)

    const showItemDescription = () => {
        setIsShowItemDescription(true)
    }

    const renderDescription = () => {
        const shortDescription = item.description.split('').slice(0, 55).join('')

        if (!item.description) {
            return;
        }

        return (
            <Description>
                {item.description.length > 75 && !isShowItemDescription
                    ? <>
                        {shortDescription}...
                        <SeeMore onClick={showItemDescription}> {translate(TRANSLATION.SEE_MORE)}</SeeMore>
                    </>
                    : item.description
                }
            </Description>
        )
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
        <Wrapper>
            {isNewItemFlag && <NewFlag>New</NewFlag>}
            <FirstRow>
                <FoodTitle>{item.name}</FoodTitle>
                {isSwitchImageVisible && !wasImageShow && <PictureIcon onClick={switchImageVisibility}/>}
            </FirstRow>
            {renderDescription()}
            {renderSizePrice()}
        </Wrapper>
    </>)
}

export default MenuItemDescription;