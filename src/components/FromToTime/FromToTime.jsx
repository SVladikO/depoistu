import {Wrapper, GroupWrapper, Label} from "./FromToTime.style";

import {Checkbox, Input} from "../index";

function FromToTime({id, weekDay, from="00:00", to="00:00"}) {
    console.log(id)
    return (
        <Wrapper>
            <GroupWrapper>
                <Checkbox id={id}/>
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