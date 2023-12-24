import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content, FixedContent} from './Order.page.style';
import {NotificationTDB, Price, PrimaryButton} from "components";

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";

import {ROUTER} from 'utils/config'
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";

const OrderPage = () => {
    const orders = useSelector(state => state.order.value);

    const placeOrder = () => {
        const {id: customer_id} = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);
        const order_details = orders.map(({id, amount, price}) => ({id, amount, price}))

        const body = {
            order: {
                customer_id,
                company_id: orders[0].company_id,
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

    const getOrderItems = () => (
        <>
            <Content>{orders.map(item => alert(item))}</Content>
            <FixedContent>
                <AmountInfo>
                    <div>Sub Total ( {orders.length} item ):</div>
                    <Price>{getOrdersTotal(orders)}</Price>
                </AmountInfo>
                {orderButton}
            </FixedContent>
        </>
    );

    return (
        <Wrapper>{
            orders.length
                ? getOrderItems()
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

function getOrdersTotal(orders) {
    let amount = 0;

    orders.forEach(order => amount += order.price * order.amount)

    return amount
}

export default OrderPage;