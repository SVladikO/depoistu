import React from 'react';
import {Wrapper, ButtonIncrement, ButtonDecrement, Counter} from "./CountMealAccamuliator.style";

const CountMealAccumulator = ({count}) => {
    function increment() {
        return count += 1;
    }
    function decrement() {
        return count -= 1;
    }

    return (
        <Wrapper>
            <ButtonDecrement onClick={() => alert(`decrement`)}>-</ButtonDecrement>
            <Counter>{count}</Counter>
            <ButtonIncrement onClick={() => alert(`increment`)}>+</ButtonIncrement>
        </Wrapper>
    );
};

export default CountMealAccumulator;