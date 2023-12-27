import {Content, Wrapper} from './OrderHistory.page.style';
import {OrderHistoryRow} from "components";


const items = [
    {
        id: 1,
        company_name: 'Arm Ato',
        city_id: 204,
        total: 100,
        date: 1703690994806,
    },
    {
        id: 2,
        company_name: 'Родичі',
        city_id: 301,
        total: 100,
        date: 1703690994806,
    },
    {
        id: 3,
        company_name: 'Суліко',
        city_id: 402,
        total: 100,
        date: 1703690994806,
    }
];

const OrderHistoryPage = () => {
    return (
        <Wrapper>
            <Content>
                {items.map(order => <OrderHistoryRow key={order.id} order={order} /> )}
            </Content>
        </Wrapper>
    );
};

export default OrderHistoryPage;