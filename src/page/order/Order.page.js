import {Wrapper, AmountInfo, Content, Button, FixedContent, BgWrapper} from './Order.page.style';
import {OrderHistoryRow, Price, PrimaryWideButton} from "../../components";

const item = {
    name: 'Chees Bites Pizza',
    description: ['spicy', 'tomato', 'sauce', 'chili', 'mozzarella'],
    price: 7
}

const OrderPage = ({total = 5}) => {
    return (
        <Wrapper>
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
            <FixedContent>
                <AmountInfo>
                    Sub Total ( {total} item ):
                    <Price>200</Price>
                </AmountInfo>
                <PrimaryWideButton>Place Order</PrimaryWideButton>
            </FixedContent>

        </Wrapper>
    );
};

export default OrderPage;