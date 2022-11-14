import React from 'react';
import {Wrapper, RoundSlider, Input} from "./ToggleCheckbox.style";

const ToggleCheckbox = ({changeHandler}) => {
    return (
        <Wrapper >
            <Input onChange={changeHandler} type="checkbox"/>
            <RoundSlider/>
        </Wrapper>
    );
};

export default ToggleCheckbox;