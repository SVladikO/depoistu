import {useSelector} from "react-redux";

import {Wrapper, PurchaseCounter} from "./OrderIconWithCounter.style";

import {ReactComponent as CartIcon} from "assets/icons/cart.svg";

const OrderIconWithCounter = ({selected = false, hideOnZeroOrderAmount = false}) => {
    const orderAmount = useSelector(state => state.order.value.length);

    if (hideOnZeroOrderAmount && !orderAmount) {
        return;
    }

    return (
        <Wrapper selected={selected}>
            <CartIcon/>
            {orderAmount ? <PurchaseCounter>{orderAmount}</PurchaseCounter> : null}
        </Wrapper>
    );
};

export default OrderIconWithCounter;