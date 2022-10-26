import React from "react";
import {InputIconWrapper,Input} from "./InputWithIcon.style";

function InputWithIcon(props) {
    const {icon, placeholder} = props;
    return(
            <InputIconWrapper>
                 {icon && <props.icon />}
                 <Input placeholder={placeholder}/>
            </InputIconWrapper>
         )
}
export default InputWithIcon;
