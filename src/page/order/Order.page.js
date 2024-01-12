import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content} from './Order.page.style';
import {
    ContentContainer,
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
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {resetOrder} from "features/searchDetails/searchDetailsSlice";
import {BE_API, fetchData} from "../../utils/fetch";
import {errorHandler} from "../../utils/management";

const OrderPage = () => {
    useScrollUp()
    const dispatch = useDispatch()
    const {menuItems} = useSelector(state => state.searchDetails);
    const order_items = useMemo(() => menuItems.filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0), [menuItems])
    const [isOpenMessage, setIsOpenMessage] = useLocalStorage(LOCAL_STORAGE_KEY.IS_ORDER_MESSAGE_VISIBLE, true)
    const allMenuItemsPrice = order_items.length
        ? order_items.reduce((acc, cur) => acc + cur.amount_1 * cur.price_1 + cur.amount_2 * cur.price_2 + cur.amount_3 * cur.price_3, 0)
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
                <ContentContainer>
                    <NotificationFactory type={NOTIFICATION_STATUS.INFO} onClose={onCloseMessage}>
                        {translate(TRANSLATION.ORDERS.THIS_PAGE_IS_CREATED)}
                    </NotificationFactory>
                </ContentContainer>
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
                <PrimaryButton isWide withPadding clickHandler={placeOrder}>
                    place order
                </PrimaryButton>
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