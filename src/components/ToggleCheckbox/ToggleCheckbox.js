import React from 'react';
import {Wrapper, RoundSlider, Input} from "./ToggleCheckbox.style";

const ToggleCheckbox = ({isChecked, changeHandler, className, title = ''}) => {
    return (
        <Wrapper className={className}>
            <Input
                checked={isChecked}
                onChange={changeHandler}
                type="checkbox"/>
            <RoundSlider/>
            {title}
        </Wrapper>
    );
};

export default ToggleCheckbox;