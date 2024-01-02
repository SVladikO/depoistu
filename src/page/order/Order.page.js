import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content, FixedContent} from './Order.page.style';
import {NotificationTDB, Price, PrimaryButton} from "components";

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";

import {ROUTER} from 'utils/config'
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useMemo} from "react";
import {useScrollUp} from "../../utils/hook";

const OrderPage = () => {
    useScrollUp()
    const {menuItems, allMenuItemsAmount} = useSelector(state => state.searchDetails);
    const orderMenuItems = useMemo(() => menuItems.filter(item => item.amount_1 > 0 || item.amount_2 > 0 || item.amount_3 > 0), [menuItems])
    const allMenuItemsPrice = 1000
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

    const isCustomerLogged = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);

    const orderButton =
        isCustomerLogged
            ? <PrimaryButton clickHandler={placeOrder}>Place Order</PrimaryButton>
            : <Link to={`${ROUTER.SING_IN.URL}?backUrl=${ROUTER.ORDER.URL}`}>
                <PrimaryButton>Login to place Order</PrimaryButton>
            </Link>

    const OrderItems = () => (
        <>
            <Content>{orderMenuItems.map(item => alert(item))}</Content>
            <FixedContent>
                <AmountInfo>
                    <div>Sub Total ( {allMenuItemsAmount} item ):</div>
                    <Price>{allMenuItemsPrice}</Price>
                </AmountInfo>
                {orderButton}
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