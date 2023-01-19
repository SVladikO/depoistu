import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Wrapper, AmountInfo, Content, FixedContent} from './Order.page.style';
import {EmptyBasket, OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

import {ROUTER} from '../../utils/config'

const OrderPage = () => {
    const orders = useSelector(state => state.order.value);

    let user;// = {};

    const orderButton =
        user
            ? <PrimaryWideButton>Place Order</PrimaryWideButton>
            : <Link to={ROUTER.SING_IN.URL}>
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
        <Wrapper>{orders.length ? getOrderItems() : <EmptyBasket/>}</Wrapper>
    );
};

function getOrdersTotal(orders) {
    let amount = 0;

    orders.forEach(order => amount += order.price * order.amount)

    return amount
}

export default OrderPage;