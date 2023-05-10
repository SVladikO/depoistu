import {memo} from 'react';

import {Wrapper, GroupWrapper, Label, Weekend} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({prefix, values, dayName, handleChange}) {
    const renderInputs = () => (
        <GroupWrapper>
            <Input type="time" name={prefix + "From"} value={values[prefix + 'From']} changeHandler={handleChange} />
            <span>-</span>
            <Input type="time" name={prefix + "To"} value={values[prefix + 'To']} changeHandler={handleChange}/>
        </GroupWrapper>
    );

    const isChecked = values[prefix + 'IsChecked'];

    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox name={prefix + 'IsChecked'} isChecked={isChecked} changeHandler={handleChange}/>
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