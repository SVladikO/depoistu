import React, {useState} from "react";
import {Wrapper} from './CheckBoxWithLabel.style';

const CheckBoxWithLabel = ({label,id}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Wrapper checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{label}</label>
        </Wrapper>
    );
};

export default CheckBoxWithLabel;
