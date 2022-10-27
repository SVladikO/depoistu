import React from 'react';
import {StyledDiscount} from "./Discount.style";

const Discount = (props) => {
    return (
        <StyledDiscount>
            {props.value}
        </StyledDiscount>
    );
};

export default Discount;