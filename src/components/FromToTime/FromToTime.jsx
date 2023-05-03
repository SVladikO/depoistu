import {memo} from 'react';

import {Wrapper, GroupWrapper, Label} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({dayName, nameFrom, nameTo, valueFrom, valueTo, handleChange}) {

    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox isChecked={true} />
                <Label>{dayName}</Label>
            </GroupWrapper>
            <GroupWrapper>
                <Input type="time" name={nameFrom} value={valueFrom} changeHandler={handleChange}/>
                <span>-</span>
                <Input type="time" name={nameTo} value={valueTo} changeHandler={handleChange}/>
            </GroupWrapper>
        </Wrapper>
    );
}

export default memo(FromToTime);