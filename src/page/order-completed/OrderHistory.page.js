import {Content, Wrapper,Date} from './OrderHistory.page.style';
import {OrderHistoryRow} from "../../components";


const item = {
    name: 'Chees Bites Pizza',
    ingredients: ['spicy', 'tomato', 'sauce', 'chili', 'mozzarella'],
    price: 7,
    size: 'Medium',
    status: 'Completed'
};

const OrderHistoryPage = () => {
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

export default OrderHistoryPage;