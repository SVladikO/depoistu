import React from 'react';
import {Input, StyledInput} from "./InputWithIcon.style";
import MailIcon from "../../icons/MailIcon";

const InputWithIcon = () => {
    return (
        <StyledInput className={"inputWithIcon"}>
            <Input
                type="text"
                placeholder="johndoe@mail.com"
                onSubmit={e => {
                    e.preventDefault();
                }}
            />
            <div className="left-icon">
               <MailIcon width={`14px`} height={`16px`}/>
            </div>
        </StyledInput>
    );
};

export default InputWithIcon;

