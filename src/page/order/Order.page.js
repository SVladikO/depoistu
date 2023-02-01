import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content, FixedContent} from './Order.page.style';
import {NotificationTDB, OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

import {ReactComponent as EmptyBasketIcon} from "../../icons/empty_basket.svg";

import {deleteAllOrders} from '../../features/order/orderSlice'

import {BE_API, ROUTER} from '../../utils/config'
import {LocalStorage} from "../../utils/utils";
import {fetchData} from "../../utils/fetch";

const OrderPage = () => {
    const orders = useSelector(state => state.order.value);
    const dispatch = useDispatch();

    const placeOrder = () => {
        const {id: guest_id} = LocalStorage.getGuest();
        const order_details = orders.map(({id, amount, price}) => ({id, amount, price}))

        const body = {
            order: {
                guest_id,
                company_id: orders[0].company_id,
                order_details,
            }
        };

        console.log('Order data: ', body);

        fetchData(BE_API.PLACE_ORDER(), body)
            .then(res => {
                alert('Order was placed');
                dispatch(deleteAllOrders())
            })
    }

    const isGuestLogged = LocalStorage.getGuest();

    const orderButton =
        isGuestLogged
            ? <PrimaryWideButton onClick={placeOrder}>Place Order</PrimaryWideButton>
            : <Link to={`${ROUTER.SING_IN.URL}?backUrl=${ROUTER.ORDER_REVIEW.URL}`}>
                <PrimaryWideButton>Login to place Order</PrimaryWideButton>
            </Link>

    const getOrderItems = () => (
        <>
            <Content>{orders.map(item => <OrderHistoryRow key={item.id} item={item}/>)}</Content>
            <FixedContent>
                <AmountInfo>
                    Sub Total ( {orders.length} item ):
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
                    buttonText="Shop Now"
                    link={ROUTER.CATEGORY.URL}
                  />
        }</Wrapper>
    );
};

function getOrdersTotal(orders) {
    let amount = 0;

    orders.forEach(order => amount += order.price * order.amount)

    return amount
}

export default OrderPage;