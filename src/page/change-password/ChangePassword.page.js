import React from 'react';

import {
    Wrapper,
} from "./ChangePassword.style";

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryRoundedButton
} from "../../components";

const ChangePasswordPage = () => {
    return (
        <>
            <ContentContainer>
                <Input withSwitcher placeholder={`Old password`}/>
                <RowSplitter/>
                <Input withSwitcher placeholder={`Password`}/>
                <RowSplitter height="11px"/>
                <Input withSwitcher placeholder={`Confirm`}/>
                <RowSplitter height="20px"/>
                <PrimaryRoundedButton>Sing in</PrimaryRoundedButton>
            </ContentContainer>
        </>
    );
};

export default ChangePasswordPage;