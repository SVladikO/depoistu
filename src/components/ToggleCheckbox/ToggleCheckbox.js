import React from 'react';

import {Wrapper, RoundSlider, InnerInput, Label} from "./ToggleCheckbox.style";

const ToggleCheckbox = ({isChecked, changeHandler, label = ''}) => {
    return (
        <Wrapper onClick={changeHandler} className="ToggleCheckbox">
            <InnerInput
                checked={isChecked}
                type="checkbox"
                onChange={() => {}}
            />
            <RoundSlider width={"20px"}/>
            <Label>{label}</Label>
        </Wrapper>
    );
};

export default ToggleCheckbox;