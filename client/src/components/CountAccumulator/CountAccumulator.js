import {Wrapper, Button, Counter} from "./CountAccumulator.style";

const CountMealAccumulator = ({count,changeHandler = () => {}}) => {
    function increment() {
        changeHandler(count + 1);
        alert (`increment`);
    }
    function decrement() {
        if(!count){
            return;
        }
        changeHandler(count - 1);
        alert (`decrement`);
    }

    return (
        <Wrapper>
            <Button onClick={decrement}>-</Button>
            <Counter>{count}</Counter>
            <Button increment onClick={increment}>+</Button>
        </Wrapper>
    );
};

export default CountMealAccumulator;