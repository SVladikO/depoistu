import React from 'react';
import {WarningMessageWrapper} from "./WarningMessage.style";

const WarningMessage = (props) => {
    return (
        <WarningMessageWrapper>
            {props.children}
        </WarningMessageWrapper>
    );
};

export default WarningMessage;