import {Wrapper, AmountInfo, Total} from './Order.page.style';
import {OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

const item = {
    name: 'Chees Bites Pizza',
    description: ['spicy', 'tomato', 'sauce', 'chili', 'mozzarella'],
    price: 7,
    size: 'Medium',
    status: 'Completed'
}

const OrderPage = ({total = 5}) => {
    return (
        <Wrapper>
            <OrderHistoryRow item={item}/>
            <OrderHistoryRow item={item}/>
            <OrderHistoryRow item={item}/>
            <OrderHistoryRow item={item}/>
            <OrderHistoryRow item={item}/>
            <AmountInfo>
                Sub Total ( {total} item ):
                <Price>200</Price>
            </AmountInfo>
            <PrimaryWideButton>Place Order</PrimaryWideButton>
        </Wrapper>
    );
};

export default OrderPage;