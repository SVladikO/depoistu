import {useSelector} from "react-redux";

import {Wrapper, PurchaseCounter} from "./OrderIconWithCounter.style";

import {ReactComponent as CartIcon} from "../../icons/cart.svg";

const OrderIconWithCounter = ({selected = false}) => {
    const orderAmount = useSelector(state => state.order.value.length);

    return (
        <Wrapper selected={selected}>
            <CartIcon/>
            {orderAmount ? <PurchaseCounter>{orderAmount}</PurchaseCounter> : null}
        </Wrapper>
    );
};

export default OrderIconWithCounter;