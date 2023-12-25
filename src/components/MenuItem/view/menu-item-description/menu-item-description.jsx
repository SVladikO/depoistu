import {useState} from "react";

import {
    Description,
    FoodTitle, Wrapper,
    NewFlag,
    SeeMore,
    FirstRow,
    Table,
    SizePriceTd,
    ControlButtonTd,
    AddButton,
    SizePriceWrapper,
    SpanWeight600,
    AddButtonWrapper,
    AmountWrapper,
    DecrementButton,
} from "./menu-item-description.style";

import {ReactComponent as PictureIcon} from "assets/icons/picture.svg";

import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_ID_MAPPER_AS_OBJECT} from "utils/category";

const MenuItemDescription = ({isNewItemFlag, item = {}, wasImageShow, isSelected, isSwitchImageVisible, switchImageVisibility}) => {

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

    const renderOrderButton = (amount) => {
        if (!isSelected) {
            return
        }

        return (
            <AddButtonWrapper>
                {amount && <DecrementButton onClick={e => e.stopPropagation()}>-</DecrementButton>}
                <AmountWrapper>{amount}</AmountWrapper>
                <AddButton onClick={e => e.stopPropagation()}>+</AddButton>
            </AddButtonWrapper>
        )
    }

    const renderTableRow = (size, measurement, price, amount) => {
        if (!size && !price) {
            return;
        }

        return (
            <tr>
                <SizePriceTd>
                    <SpanWeight600>{price && '₴'} {price}</SpanWeight600>
                </SizePriceTd>
                <SizePriceTd>
                    <pre>{size && ' '}</pre>
                </SizePriceTd>
                <SizePriceTd>{size} {size && measurement}</SizePriceTd>
                <ControlButtonTd>
                    {renderOrderButton(amount)}
                </ControlButtonTd>
            </tr>
        )
    }

    const renderSizePrice = () => {
        const {categoryId, size_1, price_1, size_2, price_2, size_3, price_3, amount1 = 1, amount2 = 2, amount3 = 3} = item;

        const measurement = CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].measurement;

        return (
            <SizePriceWrapper>
                <Table>
                    <tbody>
                    {renderTableRow(size_1, measurement, price_1, amount1)}
                    {renderTableRow(size_2, measurement, price_2, amount2)}
                    {renderTableRow(size_3, measurement, price_3, amount3)}
                    </tbody>
                </Table>
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