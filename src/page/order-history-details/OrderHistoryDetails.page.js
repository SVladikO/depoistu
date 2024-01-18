import {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import QRCode from "qrcode";
import {DatePrice, Wrapper} from './OrderHistoryDetails.page.style';

import {MenuItem} from "components";

import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";
import {translate, TRANSLATION} from "utils/translation";
import {ImageQR} from "../customer-companies/CustomerCompanies.style";
import {URL} from "utils/config";

const multiplayWIthCheck = (price, amount) => {
    return price ? price * amount : 0;
}

const calculatePrice = (items) => items?.length ?
    items.reduce((acc, cur) =>
        acc +
        multiplayWIthCheck(+cur.price_1, cur.amount_1) +
        multiplayWIthCheck(+cur.price_2, cur.amount_2) +
        multiplayWIthCheck(+cur.price_3, cur.amount_3), 0): 0

const OrderHistoryDetailsPage = () => {
    const {orderHistoryId} = useParams();
    const [orderItems, setOrderItems] = useState();
    const [src, setSrc] = useState('');
    const [qrCodeGenerationError, setQrCodeGenerationError] = useState('');

    const allMenuItemsPrice = useMemo(() => calculatePrice(orderItems), [orderItems])

    useEffect(() => {
        fetchData(BE_API.ORDER_HISTORY_DETAILS.GET_BY_ORDER_HISTORY_ID(orderHistoryId))
            .then(res => setOrderItems(res.body))
            .catch(errorHandler)
            .finally(() => {})
    }, []);

    const editMenuUrl = `${window.location.origin}${URL.SEARCH_DETAILS}/${orderHistoryId}`;

    QRCode.toDataURL(editMenuUrl)
        .then(url => setSrc(url))
        .catch(err => setQrCodeGenerationError(err))

    return (
        <Wrapper>
            {src && <ImageQR src={src} />}
            {qrCodeGenerationError}
            <DatePrice>
                <span>20 April, 2020</span>
                <span>{translate(TRANSLATION.ORDERS.TOTAL)}: ₴{allMenuItemsPrice}</span>
            </DatePrice>
            {orderItems?.map(oi => <MenuItem key={oi.name} item={oi} isOrderHistoryDetailsPage />)}
        </Wrapper>
    );
};

export default OrderHistoryDetailsPage;