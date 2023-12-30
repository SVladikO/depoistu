import {Wrapper} from './OrderHistoryDetails.page.style';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BE_API, fetchData} from "../../utils/fetch";
import {errorHandler} from "../../utils/management";

const OrderHistoryDetailsPage = () => {
    const {orderHistoryId} = useParams();
    const {orderItems, setOrderItems} = useState();

    useEffect(() => {
        fetchData(BE_API.ORDER_HISTORY_DETAILS.GET_BY_ORDER_HISTORY_ID(orderHistoryId))
            .then(res => setOrderItems(res.body))
            .catch(errorHandler)
            .finally(() => {})
    }, []);

    console.log(orderItems);

    return (
        <Wrapper>
            order details.
        </Wrapper>
    );
};

export default OrderHistoryDetailsPage;