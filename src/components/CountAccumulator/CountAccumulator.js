import {Wrapper, Button, Counter} from "./CountAccumulator.style";

const CountMealAccumulator = ({count, incrementHandler = () => {}, decrementHandler = () => {}}) => {
    return (
        <Wrapper>
            <Button onClick={decrementHandler}>-</Button>
            <Counter>{count}</Counter>
            <Button increment onClick={incrementHandler}>+</Button>
        </Wrapper>
    );
};

export default CountMealAccumulator;