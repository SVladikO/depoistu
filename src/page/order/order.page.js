import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {Wrapper, AmountInfo} from './order.page.style';

import {
    PrimaryButton,
    SecondaryButton,
    NotificationTDB,
    NotificationLoading,
    RowSplitter,
} from "components";

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {ROUTER, URL} from 'utils/config'
import {useScrollUp} from "utils/hook";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION} from "utils/translation";
import {BE_API, fetchData, errorHandler} from "utils/fetch";
import {resetOrder} from "features/searchDetails/searchDetailsSlice";
import CategoryMenuView from "../../page-view/category-menu-view/category-menu-view";

const multiplayWIthCheck = (price, amount) => {
    return price ? price * amount : 0;
}
const OrderPage = () => {
    const scrollUp = useScrollUp()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const company = useSelector(state => state.searchDetails.company);
    const customer = useSelector(state => state.customer.value);
    const {menuItems} = useSelector(state => state.searchDetails);
    const order_items = useMemo(() =>
            menuItems
                .filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0)
                .map(mi => ({...mi, isImageVisible: true}))
        , [menuItems])
    const [isPlaceOrderLoading, setIsPlaceOrderLoading] = useState(false)
    const allMenuItemsPrice = order_items.length
        ? order_items.reduce((acc, cur) =>
                acc +
                multiplayWIthCheck(+cur.price_1, cur.amount_1) +
                multiplayWIthCheck(+cur.price_2, cur.amount_2) +
                multiplayWIthCheck(+cur.price_3, cur.amount_3)
            , 0)
        : 0

    const placeOrder = () => {
        scrollUp()
        setIsPlaceOrderLoading(true)

        fetchData(BE_API.ORDER_HISTORY.POST_CREATE(), {order_items})
            .then((res) => {
                navigate(`${URL.ORDER_HISTORY_DETAILS}/${res.body.orderHistoryId}`)
                dispatch(resetOrder())
                publishNotificationEvent.success(translate(TRANSLATION.ORDERS.ORDER_PLACED))
                publishNotificationEvent.info(translate(TRANSLATION.ORDERS.SHARE_ORDER_INFO))
            })
            .catch(errorHandler)
            .finally(() => setIsPlaceOrderLoading(false))
    }

    const onCleanBasket = () => dispatch(resetOrder())

    if (isPlaceOrderLoading) {
        return <NotificationLoading/>
    }

    if (!order_items.length) {
        return (
            <>
                <RowSplitter height={'30px'}/>
                <NotificationTDB
                    Icon={EmptyBasketIcon}
                    title={translate(TRANSLATION.ORDERS.BASKET_IS_EMPTY)}
                    description={translate(TRANSLATION.ORDERS.LOOKS_LIKE)}
                >
                    <Link to={ROUTER.SEARCH.URL}>
                        <PrimaryButton isWide>{translate(TRANSLATION.ORDERS.SHOP_NOW)}</PrimaryButton>
                    </Link>
                </NotificationTDB>
            </>
        )
    }

    return (
        <Wrapper>
            <CategoryMenuView
                isCompanyVerified={company?.is_verified}
                menuItems={order_items}
                isHideFixedTop
                isOrderPage
            />
            <RowSplitter height={'40px'}/>

            <AmountInfo>
                <div> {translate(TRANSLATION.ORDERS.TOTAL)}:</div>
                <div>₴ {allMenuItemsPrice}</div>
            </AmountInfo>
            {
                customer ? (
                    <PrimaryButton isLoading={isPlaceOrderLoading} isWide withPadding clickHandler={placeOrder}>
                        {translate(TRANSLATION.ORDERS.PLACE_ORDER)}
                    </PrimaryButton>
                ) : (
                    <Link to={`${URL.SING_IN}?backUrl=${URL.ORDER}`}>
                        <PrimaryButton isWide withPadding>
                            {translate(TRANSLATION.ORDERS.SIGN_IN_TO_PLACE)}
                        </PrimaryButton>
                    </Link>
                )
            }
            <RowSplitter height={'20px'}/>
            <SecondaryButton isWide withPadding clickHandler={onCleanBasket}>
                <RemoveIcon/>
                {translate(TRANSLATION.ORDERS.CLEAR_BASKET)}
            </SecondaryButton>
        </Wrapper>
    );
};

export default OrderPage;