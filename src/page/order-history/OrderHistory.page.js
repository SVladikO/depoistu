import {Link} from "react-router-dom";

import {Content, Wrapper} from './OrderHistory.page.style';
import {OrderHistoryRow} from "components";
import {URL} from "utils/config";
import {useDispatch, useSelector} from "react-redux";
import {addOrderHistories} from "../../features/order-history/orderHistorySlice";
import {useEffect} from "react";
import {BE_API, fetchData} from "../../utils/fetch";
import {errorHandler} from "../../utils/management";

const OrderHistoryPage = () => {
    const dispatch = useDispatch();

    const customer = useSelector(state => state.customer.value)
    const orderHistory = useSelector(state => state.orderHistorySlice.value)

    useEffect(() => {
        if (!customer) {
            return;
        }

        if (orderHistory?.length) {
            return;
        }

        fetchData(BE_API.ORDER_HISTORY.GET_ALL_BY_CUSTOMER_ID(customer.id))
            .then(res => {
                dispatch(addOrderHistories((res.body || []).reverse()))
            })
            .catch(errorHandler)
    }, [])

    return (<Wrapper>
        <Content>
            {orderHistory.map((order, index) => (
                <div key={index}>
                    <Link to={`${URL.ORDER_HISTORY_DETAILS}/${order.id}`}>
                        <OrderHistoryRow key={order.id} order={order}/>
                    </Link>
                </div>
            ))}
        </Content>
    </Wrapper>);
};

export default OrderHistoryPage;