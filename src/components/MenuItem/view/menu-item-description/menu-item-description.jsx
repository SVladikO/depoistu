import {useState} from "react";

import {
    Description,
    FoodTitle, Wrapper,
    NewFlag,
    SeeMore,
    FirstRow,
    Table,
    ControlButtonTd,

    SizePriceWrapper,
    Details, SizePriceInfo, Amount, IncrementButton, DecrementButton,
} from "./menu-item-description.style";

import {ReactComponent as PictureIcon} from "assets/icons/picture.svg";

import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_ID_MAPPER_AS_OBJECT} from "utils/category";
import {useDispatch} from "react-redux";
import {
    decrementMenuItemAmount,
    incrementMenuItemAmount,
    makeMenuItemImageVisible
} from "features/searchDetails/searchDetailsSlice";

const MenuItemDescription = (props) => {
    const {
        isNewItemFlag,
        isEditMenuItemPage,
        item = {},
        isOrderPage = false
    } = props

    const dispatch = useDispatch()
    const [isShowItemDescription, setIsShowItemDescription] = useState(false)

    const showItemDescription = () => {
        setIsShowItemDescription(true)
    }

    const renderDescription = () => {
        const shortDescription = item.description?.split('')?.slice(0, 55)?.join('')

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

    const onIncrementAmount = amountKey => e => {
        e.stopPropagation()
        dispatch(incrementMenuItemAmount({id: item.id, amountKey}))
    }

    const onDecrementAmount = amountKey => e => {
        e.stopPropagation()
        dispatch(decrementMenuItemAmount({id: item.id, amountKey}))
    }

    const renderTableRow = (size, price, amount, amountKey) => {
        const measurement = CATEGORY_ID_MAPPER_AS_OBJECT[item.category_id].measurement;

        if ((!size && !price) || (isOrderPage && amount === 0)) {
            return;
        }

        return (
            <Details>
                <SizePriceInfo>
                    <span>{price && '₴'} {price}</span>
                    <pre>{size && ' '}</pre>
                    <span>{size} {size && measurement}</span>
                </SizePriceInfo>
                <ControlButtonTd isShow={!isEditMenuItemPage}>
                    {amount > 0 && <>
                        <DecrementButton clickHandler={onDecrementAmount(amountKey)}/>
                        <Amount>{amount}</Amount>
                    </>}
                    <IncrementButton clickHandler={onIncrementAmount(amountKey)}/>
                </ControlButtonTd>
            </Details>
        )
    }

    const renderSizePrice = () => {
        const {size_1, price_1, size_2, price_2, size_3, price_3, amount_1, amount_2, amount_3} = item;

        return (
            <SizePriceWrapper>
                <Table>
                    <tbody>
                    {renderTableRow(size_1, price_1, amount_1, 'amount_1')}
                    {renderTableRow(size_2, price_2, amount_2, 'amount_2')}
                    {renderTableRow(size_3, price_3, amount_3, 'amount_3')}
                    </tbody>
                </Table>
            </SizePriceWrapper>
        )
    }

    return (<>
        <Wrapper>
            {isNewItemFlag && <NewFlag>New</NewFlag>}
            <FirstRow>
                <FoodTitle>{item.name}</FoodTitle>
                {!item.isImageVisible && item.imageUrl && !isEditMenuItemPage &&
                    <PictureIcon onClick={() => dispatch(makeMenuItemImageVisible({id: item.id}))}/>}
            </FirstRow>
            {renderDescription()}
            {renderSizePrice()}
        </Wrapper>
    </>)
}

export default MenuItemDescription;