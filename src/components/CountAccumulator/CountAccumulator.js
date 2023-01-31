import {Wrapper, Button, Counter, WideWrapper, WideButton, Space} from "./CountAccumulator.style";

const CountMealAccumulator = ({count, forHistory, incrementHandler = () => {}, decrementHandler = () => {}}) => {
    if(forHistory){
        return (
            <WideWrapper>
                <WideButton onClick={decrementHandler}>-</WideButton>
                <Space/>
                <WideButton onClick={incrementHandler}>+</WideButton>
            </WideWrapper>
        )
    }
    return (
        <Wrapper>
            <Button onClick={decrementHandler}>-</Button>
            <Counter>{count}</Counter>
            <Button increment onClick={incrementHandler}>+</Button>
        </Wrapper>
    );
};

export default CountMealAccumulator;