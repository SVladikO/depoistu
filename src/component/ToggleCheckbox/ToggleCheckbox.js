import React from 'react';
import {Wrapper, Label, CheckBox} from "./ToggleCheckbox.style";

const ToggleCheckbox = () => {
    return (
        <Wrapper>
            <CheckBox id="CheckBox" type="checkbox" />
            <Label htmlFor="CheckBox" />
        </Wrapper>
    );
};

export default ToggleCheckbox;