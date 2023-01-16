import {useSelector} from "react-redux";

import {Wrapper, AmountInfo, Content, Button, FixedContent, BgWrapper} from './Order.page.style';
import {EmptyBasket, OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

const OrderPage = ({total = 5}) => {
    const orders = useSelector(state => state.order.value);

    const getOrderItems = () => (
        <>
            <Content>
                {orders.map(item => < OrderHistoryRow key={item.id} item={item}/>)}
            </Content>
            <FixedContent>
                <AmountInfo>
                    Sub Total ( {total} item ):
                    <Price>200</Price>
                </AmountInfo>
                <PrimaryWideButton>Place Order</PrimaryWideButton>
            </FixedContent>
        </>
    );

    return (
        <Wrapper>
            {
                orders.length
                    ? getOrderItems()
                    : <EmptyBasket/>
            }
        </Wrapper>
    );
};

export default OrderPage;