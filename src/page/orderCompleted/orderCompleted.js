import {Content, Wrapper,Date} from './orderCompleted.style';
import {OrderHistoryRow} from "../../components";

const item = {
    name: 'Chees Bites Pizza',
    description: ['spicy', 'tomato', 'sauce', 'chili', 'mozzarella'],
    price: 7,
    size: 'Medium',
    status: 'Completed'
};

const OrderCompleted = () => {
    return (
        <Wrapper>
            <Content>
                <Date>20 April, 2020</Date>
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

export default OrderCompleted;