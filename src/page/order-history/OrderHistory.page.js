import {Link} from "react-router-dom";

import {Content, Wrapper} from './OrderHistory.page.style';
import {OrderHistoryRow, PrimaryButton} from "components";
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

    function placeOrder() {
        const company_id = 1;
        const order_items = [{
            id: 1, amount1: 3, amount2: 3, amount3: 3, price1: 100, price2: 200, price3: 300,
        }, {
            id: 2, amount1: 3, price1: 100,
        }]

        fetchData(BE_API.ORDER_HISTORY.POST_CREATE(), {company_id, order_items})
            .then(res => {
                alert('done')
                console.log('post order: ', res)
            })
            .catch(errorHandler)
    }

    return (<Wrapper>
        <PrimaryButton clickHandler={placeOrder}>Place order</PrimaryButton>
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