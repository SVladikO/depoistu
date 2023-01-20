import {useSelector} from "react-redux";

import {AmountInfo, Content, FixedContent, Wrapper} from './Order.page.style';
import {EmptyBasket, OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

const OrderPage = ({total = 5}) => {
    const orders = useSelector(state => state.order.value);
    const getOrderItems = () => (
        <>
            <Content>
                {orders.map(item => <OrderHistoryRow key={item.id} item={item}/>)}
            </Content>
            <FixedContent>
                <AmountInfo>
                    Sub Total ( {orders.length} item ):
                    <Price>{getOrdersTotal(orders)}</Price>
                </AmountInfo>
                <PrimaryWideButton>Place Order</PrimaryWideButton>
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