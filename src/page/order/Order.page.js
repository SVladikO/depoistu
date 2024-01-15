import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content} from './Order.page.style';
import {
    MenuItem,
    NOTIFICATION_STATUS,
    NotificationFactory,
    NotificationTDB,
    PrimaryButton,
    SecondaryButton
} from "components";

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {ROUTER, URL} from 'utils/config'
import {useLocalStorage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {resetOrder} from "features/searchDetails/searchDetailsSlice";
import {BE_API, fetchData} from "../../utils/fetch";
import {errorHandler} from "../../utils/management";

const multiplayWIthCheck = (price, amount) => {
    console.log(!!price, price, amount, price * amount)
    return price ? price * amount : 0;
}
const OrderPage = () => {
    useScrollUp()
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customer.value);
    const {menuItems} = useSelector(state => state.searchDetails);
    const order_items = useMemo(() => menuItems.filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0), [menuItems])
    const [isOpenMessage, setIsOpenMessage] = useLocalStorage(LOCAL_STORAGE_KEY.IS_ORDER_MESSAGE_VISIBLE, true)
    const allMenuItemsPrice = order_items.length
        ? order_items.reduce((acc, cur) =>
                acc +
                multiplayWIthCheck(+cur.price_1, cur.amount_1) +
                multiplayWIthCheck(+cur.price_2, cur.amount_2) +
                multiplayWIthCheck(+cur.price_3, cur.amount_3)
            , 0)
        : 0

    const placeOrder = () => {
        fetchData(BE_API.ORDER_HISTORY.POST_CREATE(), {order_items})
            .then(res => {
                alert('done')
                console.log('post order: ', res)
            })
            .catch(errorHandler)
    }

    const onCleanBasket = () => {
        dispatch(resetOrder())
    }

    const onCloseMessage = () => {
        setIsOpenMessage(false)
    }

    const OrderItems = () => (
        <>
            {isOpenMessage &&
                <NotificationFactory withMargin type={NOTIFICATION_STATUS.INFO} onClose={onCloseMessage}>
                    {translate(TRANSLATION.ORDERS.THIS_PAGE_IS_CREATED)}
                </NotificationFactory>
            }
            <Content>
                {order_items.map((mi, index) => (
                    <MenuItem
                        key={`menu_item${index}${mi.id}`}
                        item={mi}
                        isSelected
                        isOrderPage
                    />))}
                <AmountInfo>
                    <div> {translate(TRANSLATION.ORDERS.TOTAL)}:</div>
                    <div>₴ {allMenuItemsPrice}</div>
                </AmountInfo>
                {customer ? (
                    <PrimaryButton isWide withPadding clickHandler={placeOrder}>
                        {translate(TRANSLATION.ORDERS.PLACE_ORDER)}
                    </PrimaryButton>
                ) : (
                    <Link to={`${URL.SING_IN}?backUrl=${URL.ORDER}`}>
                        <PrimaryButton isWide withPadding clickHandler={placeOrder}>
                            {translate(TRANSLATION.ORDERS.SIGN_IN_TO_PLACE)}
                        </PrimaryButton>
                    </Link>
                )}
                <SecondaryButton isWide withPadding clickHandler={onCleanBasket}>
                    <RemoveIcon/>
                    {translate(TRANSLATION.ORDERS.CLEAR_BASKET)}
                </SecondaryButton>
            </Content>
        </>
    );


    return (
        <Wrapper>{
            order_items.length
                ? <OrderItems/>
                : <NotificationTDB
                    Icon={EmptyBasketIcon}
                    title={translate(TRANSLATION.ORDERS.BASKET_IS_EMPTY)}
                    description={translate(TRANSLATION.ORDERS.LOOKS_LIKE)}
                >
                    <Link to={ROUTER.SEARCH.URL}>
                        <PrimaryButton isWide>{translate(TRANSLATION.ORDERS.SHOP_NOW)}</PrimaryButton>
                    </Link>
                </NotificationTDB>
        }</Wrapper>
    );
};

export default OrderPage;