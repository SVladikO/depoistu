import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Wrapper} from './OrderHistoryDetails.page.style';

import {MenuItem} from "components";

import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";

const OrderHistoryDetailsPage = () => {
    const {orderHistoryId} = useParams();
    const [orderItems, setOrderItems] = useState();

    useEffect(() => {
        fetchData(BE_API.ORDER_HISTORY_DETAILS.GET_BY_ORDER_HISTORY_ID(orderHistoryId))
            .then(res => {
                setOrderItems(res.body)
            })
            .catch(errorHandler)
            .finally(() => {})
    }, []);

    return (
        <Wrapper>
            {orderItems?.map(oi => <MenuItem key={oi.name} item={oi} isOrderPage />)}
        </Wrapper>
    );
};

export default OrderHistoryDetailsPage;