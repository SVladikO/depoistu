import React from 'react';
import {CheckBoxWrapper, CheckBoxLabel, CheckBox} from "./ToggleCheckbox.style";

const ToggleCheckbox = () => {
    return (
        <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    );
};

export default ToggleCheckbox;