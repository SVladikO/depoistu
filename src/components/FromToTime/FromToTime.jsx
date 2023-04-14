import {Wrapper, GroupWrapper, Label} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({id,isChecked, handlerChange, weekDay, from="", to="", changeHandlerFrom = () => {} , changeHandlerTo = () => {} }) {

    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox id={id} isChecked={isChecked} handlerChange={handlerChange}/>
                <Label htmlFor={id}>{weekDay}</Label>
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

export default FromToTime;