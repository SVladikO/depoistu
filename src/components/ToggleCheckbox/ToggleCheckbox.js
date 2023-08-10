import React from 'react';
import {Wrapper, RoundSlider, Input} from "./ToggleCheckbox.style";

const ToggleCheckbox = ({isChecked, changeHandler, className}) => {
    return (
        <Wrapper className={className}>
            <Input
                checked={isChecked}
                onChange={changeHandler}
                type="checkbox"/>
            <RoundSlider/>
        </Wrapper>
    );
};

export default ToggleCheckbox;