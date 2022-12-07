import React from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryRoundedButton
} from "../../components";

const ChangePasswordPage = () => {
    return (
        <ContentContainer>
            <Input withSwitcher placeholder={`Old password`}/>
            <Input withSwitcher placeholder={`Password`}/>
            <Input withSwitcher placeholder={`Confirm`}/>
            <PrimaryRoundedButton>Sing in</PrimaryRoundedButton>
        </ContentContainer>
    );
};

export default ChangePasswordPage;