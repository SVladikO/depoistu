import {Wrapper, AmountInfo, Content, Button, FixedContent} from './Order.page.style';
import {EmptyBasket, OrderHistoryRow, Price} from "../../components";
import {useSelector} from "react-redux";

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
                <Button>Place Order</Button>
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