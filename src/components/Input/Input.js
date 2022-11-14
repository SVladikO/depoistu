import React from "react";
import {Wrapper, InputText} from "./Input.style";

function Input(props) {
    const {Icon, placeholder} = props;
    return (
        <Wrapper>
            {Icon && <Icon/>}
            <InputText placeholder={placeholder} withIcon={!!Icon}/>
        </Wrapper>
    )
}

export default Input;