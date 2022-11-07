import React from 'react';
import {Wrapper, RoundSlider, Input} from "./ToggleCheckbox.style";

const ToggleCheckbox = () => {
    return (
        <Wrapper>
            <Input type="checkbox"/>
            <RoundSlider/>
        </Wrapper>
    );
};

export default ToggleCheckbox;