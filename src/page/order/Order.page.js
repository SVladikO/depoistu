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

import {ROUTER} from 'utils/config'
import {useLocalStorage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {resetOrder} from "features/searchDetails/searchDetailsSlice";

const OrderPage = () => {
    useScrollUp()
    const dispatch = useDispatch()
    const {menuItems } = useSelector(state => state.searchDetails);
    const orderMenuItems = useMemo(() => menuItems.filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0), [menuItems])
    const [isOpenMessage, setIsOpenMessage] = useLocalStorage(LOCAL_STORAGE_KEY.IS_ORDER_MESSAGE_VISIBLE, true)
    const allMenuItemsPrice = orderMenuItems.length
        ? orderMenuItems.reduce((acc, cur) => acc + cur.amount_1 * cur.price_1 + cur.amount_2 * cur.price_2 + cur.amount_3 * cur.price_3, 0)
        : 0

    const placeOrder = () => {
        const {id: customer_id} = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);
        const order_details = orderMenuItems.map(({id, amount, price}) => ({id, amount, price}))

        const body = {
            order: {
                customer_id,
                company_id: orderMenuItems[0].company_id,
                order_details,
            }
        };

        console.log('Order data: ', body);
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
                <NotificationFactory type={NOTIFICATION_STATUS.INFO} onClose={onCloseMessage}>
                    {translate(TRANSLATION.ORDERS.THIS_PAGE_IS_CREATED)}
                </NotificationFactory>}
            <Content>
                {orderMenuItems.map((mi, index) => (
                <MenuItem
                    item={mi}
                    isSelected
                    isEditMode={false}
                    isOrderPage
                    key={`menu_item${index}${mi.id}`}
                />))}
                <AmountInfo>
                    <div> {translate(TRANSLATION.ORDERS.TOTAL)}:</div>
                    <div>₴ {allMenuItemsPrice}</div>
                </AmountInfo>
                <SecondaryButton isWide withPadding clickHandler={onCleanBasket}>
                    <RemoveIcon/>
                    {translate(TRANSLATION.ORDERS.CLEAR_BASKET)}
                </SecondaryButton>
            </Content>

        </>
    );

    return (
        <Wrapper>{
            orderMenuItems.length
                ? <OrderItems />
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