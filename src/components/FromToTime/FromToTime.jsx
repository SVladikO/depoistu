import {memo} from 'react';

import {Wrapper, GroupWrapper, Label, Weekend} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({checkboxName, isChecked, dayName, nameFrom, nameTo, valueFrom, valueTo, handleChange}) {

    const renderInputs = () => (
        <GroupWrapper>
            <Input type="time" name={nameFrom} value={valueFrom} changeHandler={handleChange}/>
            <span>-</span>
            <Input type="time" name={nameTo} value={valueTo} changeHandler={handleChange}/>
        </GroupWrapper>
    );

    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox name={checkboxName} isChecked={isChecked} changeHandler={handleChange}/>
                <Label>{dayName}</Label>
            </GroupWrapper>
            {isChecked
                ? renderInputs()
                : <Weekend>Weekend</Weekend>
            }
        </Wrapper>
    );
}

export default memo(FromToTime);