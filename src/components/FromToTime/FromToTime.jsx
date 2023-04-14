import {memo} from 'react';

import {Wrapper, GroupWrapper, Label} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({day, checkboxChangeHandler }) {
    const {id, isChecked, name, from="", to=""} = day;
    console.log(444)
    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox id={id} isChecked={isChecked} changeHandler={checkboxChangeHandler}/>
                <Label htmlFor={id}>{name}</Label>
            </GroupWrapper>
            <GroupWrapper>
                <span>From</span>
                <Input value={from}/>
            </GroupWrapper>
            <GroupWrapper>
                <span>To</span>
                <Input value={to}/>
            </GroupWrapper>
        </Wrapper>
    );
}

export default memo(FromToTime);