import React from "react";
import {InputIconWrapper,Input} from "./InputWithIcon.style";

function InputWithIcon(props) {
    const {Icon, placeholder} = props;
    return(
            <InputIconWrapper>
                 {Icon && <Icon />}
                 <Input placeholder={placeholder}/>
            </InputIconWrapper>
         )
}
export default InputWithIcon;
