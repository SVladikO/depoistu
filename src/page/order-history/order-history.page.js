import {useEffect} from "react";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Content, Wrapper} from './order-history.page.style';

import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";

import {ContentContainer, NotificationLoading, NotificationTDB, OrderHistoryRow, PrimaryButton} from "components";
import {addOrderHistories} from "features/order-history/orderHistorySlice";

import {ROUTER, URL} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {BE_API, fetchData, errorHandler} from "utils/fetch";

const OrderHistoryPage = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const customer = useSelector(state => state.customer.value)
    const orderHistory = useSelector(state => state.orderHistorySlice.value)

    useEffect(() => {
        if (!customer || orderHistory?.length) {
            return;
        }

        setIsLoading(true);

        fetchData(BE_API.ORDER_HISTORY.GET_ALL_BY_CUSTOMER_ID(customer.id))
            .then(res => {
                dispatch(addOrderHistories((res.body || []).reverse()))
            })
            .catch(errorHandler)
            .finally(() => setIsLoading(false))

        return () => dispatch(addOrderHistories([]))
    }, [])

    if (isLoading) {
        return <NotificationLoading/>
    }

    return (
        <ContentContainer padding={'30px 15px 15px'}>
            <Wrapper>
                <Content>
                    {orderHistory.length
                        ? orderHistory.map((order, index) => (
                            <div key={index}>
                                <Link to={`${URL.ORDER_HISTORY_DETAILS}/${order.id}`}>
                                    <OrderHistoryRow key={order.id} order={order}/>
                                </Link>
                            </div>
                        ))
                        : (
                            <NotificationTDB
                                Icon={EmptyBasketIcon}
                                title={translate(TRANSLATION.PAGE.ORDER_HISTORY.TDB.TITLE)}
                                description={translate(TRANSLATION.PAGE.ORDER_HISTORY.TDB.DESCRIPTION)}
                            >
                                <Link to={ROUTER.SEARCH.URL}>
                                    <PrimaryButton isWide>{translate(TRANSLATION.ORDERS.SHOP_NOW)}</PrimaryButton>
                                </Link>
                            </NotificationTDB>
                        )}
                </Content>
            </Wrapper>
        </ContentContainer>
    );
};

export default OrderHistoryPage;