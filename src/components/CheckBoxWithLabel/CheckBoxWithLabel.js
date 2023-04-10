import React, {useState} from "react";
import {Wrapper} from './CheckBoxWithLabel.style';
import {Checkbox} from "../index";

const CheckBoxWithLabel = ({label,id}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Wrapper checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}>
            <Checkbox id={id}/>
            <label htmlFor={id}>{label}</label>
        </Wrapper>
    );
};

export default CheckBoxWithLabel;
