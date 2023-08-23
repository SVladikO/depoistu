import {memo} from 'react';

import {Wrapper, GroupWrapper, Label, Weekend} from "./FromToTime.style";

import {Checkbox, Input} from "../index";
import {translate, TRANSLATION} from "../../utils/translation";

function FromToTime({prefix, values, dayName, handleChange, setFieldValue}) {
    const fromName = prefix + "From";
    const toName = prefix + "To";
    const checkboxName = prefix + 'IsChecked'
    const isChecked = values[checkboxName];

    const renderInputs = () => (
        <GroupWrapper>
            <Input type="time" name={fromName} value={values[fromName]} changeHandler={handleChange} />
            <span>-</span>
            <Input type="time" name={toName} value={values[toName]} changeHandler={handleChange}/>
        </GroupWrapper>
    );

    return (
        <Wrapper>
            <GroupWrapper onClick={() => setFieldValue(checkboxName, !isChecked)}>
                <Checkbox name={checkboxName} isChecked={isChecked} changeHandler={handleChange}/>
                <Label>{dayName}</Label>
            </GroupWrapper>
            {isChecked
                ? renderInputs()
                : <Weekend>{translate(TRANSLATION.PAGE_VIEW.COMPANY.WEEKEND)}</Weekend>
            }
        </Wrapper>
    );
}

export default memo(FromToTime);