import {memo, useCallback, useState} from 'react';

import {Wrapper, GroupWrapper, Label} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({day}) {
    const {isChecked, name, from="", to=""} = day;

    const [fromTime, setFromTime] = useState(from);
    const [toTime, setToTime] = useState(to);
    const [checked, setChecked] = useState(isChecked);

    const checkboxChangeHandler = useCallback(() => setChecked(!checked), [checked])
    const changeHandlerFromTime = useCallback(value => setFromTime(value), [fromTime])
    const changeHandlerToTime = useCallback(value => setToTime(value), [toTime])
    console.log(222)
    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox isChecked={checked} changeHandler={checkboxChangeHandler}/>
                <Label onClick={checkboxChangeHandler}>{name}</Label>
            </GroupWrapper>
            <GroupWrapper>
                <span>From</span>
                <Input value={fromTime} changeHandler={changeHandlerFromTime}/>
            </GroupWrapper>
            <GroupWrapper>
                <span>To</span>
                <Input value={toTime} changeHandler={changeHandlerToTime}/>
            </GroupWrapper>
        </Wrapper>
    );
}

export default memo(FromToTime);