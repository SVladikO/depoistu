import {Wrapper, AmountInfo, Content, Button} from './Order.page.style';
import {OrderHistoryRow, Price, } from "../../components";

const item = {
    name: 'Chees Bites Pizza',
    description: ['spicy', 'tomato', 'sauce', 'chili', 'mozzarella'],
    price: 7
}

const OrderPage = ({total = 5}) => {
    return (
        <Wrapper>
            <AmountInfo>
                Sub Total ( {total} item ):
                <Price>200</Price>
            </AmountInfo>
            <Button>Place Order</Button>
            <Content>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
                <OrderHistoryRow item={item}/>
            </Content>
        </Wrapper>
    );
};

export default OrderPage;