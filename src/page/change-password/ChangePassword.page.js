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
            <Input withSwitcher placeholder={`Old Password`}/>
            <RowSplitter height='10px'/>
            <Input withSwitcher placeholder={`New Password`}/>
            <Input withSwitcher placeholder={`Confirm Password`}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>Save Now !</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;