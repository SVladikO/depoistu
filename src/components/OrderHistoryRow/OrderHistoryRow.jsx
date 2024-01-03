import {Wrapper, FirstRow, SecondRow} from "./OrderHistoryRow.style";

import {translate, TRANSLATION} from "utils/translation";
import {CITY_TRANSLATION_IDS} from "utils/cities";


const OrderHistoryRow = ({order}) => {

    const {company_name, city_id, total, date,} = order;

    const day = new Date(date).getDate()
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear()
    let hour = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    minutes = ('' + minutes).length == 1 ? '0' + minutes :  minutes;

    return (
        <Wrapper>
            <FirstRow>
                <div>{company_name}</div>
                <div>{total} {translate(TRANSLATION.MEASUREMENTS.PRICE)}</div>
            </FirstRow>
            <SecondRow>
                <div>{translate(CITY_TRANSLATION_IDS[+city_id])} {`${hour}:${minutes}  ${day}.${month}.${year}`}</div>
            </SecondRow>
        </Wrapper>
    )
}

export default OrderHistoryRow;