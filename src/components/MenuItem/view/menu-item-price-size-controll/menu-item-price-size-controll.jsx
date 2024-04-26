import {useDispatch} from "react-redux";

import {
    Table,
    Amount,
    Details,
    SizePriceInfoTd,
    CalculationButton,
    ControlButtonTd,
    SizePriceWrapper,
} from "./menu-item-price-size-controll.style.";

import {decrementMenuItemAmount, incrementMenuItemAmount} from "features/searchDetails/searchDetailsSlice";

import {CATEGORY_ID_MAPPER_AS_OBJECT} from "utils/category";

const MenuItemPriceSizeControl = ({
                                      item,
                                      isOrderPage,
                                      isEditMenuItemPage,
                                      isOrderHistoryDetailsPage
                                  }) => {
    const dispatch = useDispatch()

    const onIncrementAmount = amountKey => e => {
        e.stopPropagation()
        dispatch(incrementMenuItemAmount({id: item.id, amountKey}))
    }

    const onDecrementAmount = amountKey => e => {
        e.stopPropagation()
        dispatch(decrementMenuItemAmount({id: item.id, amountKey}))
    }

    const renderRow = (size, price, amount, amountKey) => {

        if ((!size && !price) || (isOrderPage && amount === 0) || (isOrderHistoryDetailsPage && amount === 0)) {
            return;
        }

        const measurement = CATEGORY_ID_MAPPER_AS_OBJECT[item.category_id].measurement;
        return (
            <Details>
                <SizePriceInfoTd>
                    {price ? <span>{price} ₴</span> : <span />}
                    {size ? <pre>  </pre> : <span/>}
                    {size ? <span>{size} {measurement}</span> : <span/>}
                </SizePriceInfoTd>
                <ControlButtonTd isShow={!isEditMenuItemPage}>
                    {amount > 0 && !isOrderHistoryDetailsPage &&
                        <CalculationButton clickHandler={onDecrementAmount(amountKey)}>-</CalculationButton>}
                    {amount > 0 && <Amount isWide={isOrderHistoryDetailsPage}>
                        {isOrderHistoryDetailsPage && 'x '}
                        {amount}
                    </Amount>}
                    {!isOrderHistoryDetailsPage && <CalculationButton clickHandler={onIncrementAmount(amountKey)}>+</CalculationButton>}
                </ControlButtonTd>
            </Details>
        )
    }

    const {size_1, price_1, size_2, price_2, size_3, price_3, amount_1, amount_2, amount_3} = item;

    return (
        <SizePriceWrapper>
            <Table>
                <tbody>
                {renderRow(size_1, +price_1, +amount_1, 'amount_1')}
                {renderRow(size_2, +price_2, +amount_2, 'amount_2')}
                {renderRow(size_3, +price_3, +amount_3, 'amount_3')}
                </tbody>
            </Table>
        </SizePriceWrapper>
    )
}

export default MenuItemPriceSizeControl;