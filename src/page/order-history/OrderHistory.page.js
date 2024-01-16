import {Link} from "react-router-dom";

import {Wrapper} from './OrderHistory.page.style';
import {NotificationLoading, OrderHistoryRow} from "components";
import {URL} from "utils/config";
import {useDispatch, useSelector} from "react-redux";
import {addOrderHistories} from "features/order-history/orderHistorySlice";
import {useEffect, useState} from "react";
import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";
import {translate, TRANSLATION} from "utils/translation";

const OrderHistoryPage = () => {
    const [isLoading, setIsLoading] = useState(false);
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

        setIsLoading(true)
        fetchData(BE_API.ORDER_HISTORY.GET_ALL_BY_CUSTOMER_ID(customer.id))
            .then(res => {
                dispatch(addOrderHistories((res.body || []).reverse()))
            })
            .catch(errorHandler)
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <Wrapper>
            {isLoading &&
                <NotificationLoading>{translate(TRANSLATION.LOADING)}</NotificationLoading>}
            {orderHistory.map((order, index) => (
                <Link key={index} to={`${URL.ORDER_HISTORY_DETAILS}/${order.id}`}>
                    <OrderHistoryRow key={order.id} order={order} />
                </Link>
            ))}
        </Wrapper>
    );
};

export default OrderHistoryPage;