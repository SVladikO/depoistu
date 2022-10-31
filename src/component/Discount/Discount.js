import {Wrapper} from "./Discount.style";

const Discount = (props) => {
    return (
        <Wrapper>
            {props.value}
        </Wrapper>
    );
};

export default Discount;