import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Wrapper} from './OrderHistoryDetails.page.style';

import {MenuItem, NotificationLoading} from "components";

import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";
import {translate, TRANSLATION} from "utils/translation";

const OrderHistoryDetailsPage = () => {
    const {orderHistoryId} = useParams();
    const [orderItems, setOrderItems] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetchData(BE_API.ORDER_HISTORY_DETAILS.GET_BY_ORDER_HISTORY_ID(orderHistoryId))
            .then(res => setOrderItems(res.body))
            .catch(errorHandler)
            .finally(() => {setIsLoading(false)})
    }, []);

    return (
        <Wrapper>
            {isLoading &&
                <NotificationLoading>{translate(TRANSLATION.LOADING)}</NotificationLoading>}
            {orderItems?.map(oi => <MenuItem key={oi.name} item={oi} isOrderHistoryDetailsPage />)}
        </Wrapper>
    );
};

export default OrderHistoryDetailsPage;