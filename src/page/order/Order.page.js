import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content, FixedContent} from './Order.page.style';
import {MenuItem, NotificationTDB, Price, PrimaryButton, SecondaryButton} from "components";

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";

import {ROUTER} from 'utils/config'
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useMemo} from "react";
import {useScrollUp} from "../../utils/hook";
import {resetOrder} from "../../features/searchDetails/searchDetailsSlice";

const OrderPage = () => {
    useScrollUp()
    const dispatch = useDispatch()
    const {menuItems } = useSelector(state => state.searchDetails);
    const orderMenuItems = useMemo(() => menuItems.filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0), [menuItems])
    const allMenuItemsAmount = menuItems.reduce((acc, cur) => acc + cur.amount_1 + cur.amount_2 + cur.amount_3, 0)

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

    const OrderItems = () => (
        <>
            <Content>{orderMenuItems.map((mi, index) => (
                <MenuItem
                    item={mi}
                    isSelected
                    isEditMode={false}
                    isOrderPage
                    key={`menu_item${index}${mi.id}`}
                />))}</Content>
            <FixedContent>
                <AmountInfo>
                    <div>Sub Total ( {allMenuItemsAmount} item ):</div>
                    <Price>{allMenuItemsPrice}</Price>
                </AmountInfo>
                <SecondaryButton isWide withPadding clickHandler={onCleanBasket}>Clear basket</SecondaryButton>
            </FixedContent>
        </>
    );

    return (
        <Wrapper>{
            orderMenuItems.length
                ? <OrderItems />
                : <NotificationTDB
                    Icon={EmptyBasketIcon}
                    title="Your Cart is empty"
                    description="Looks like you haven't made your order yet."
                >
                <Link to={ROUTER.SEARCH.URL}>
                    <PrimaryButton isWide>Shop Now</PrimaryButton>
                </Link>
                </NotificationTDB>
        }</Wrapper>
    );
};

export default OrderPage;