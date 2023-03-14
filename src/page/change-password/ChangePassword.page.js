import React from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryRoundedButton
} from "../../components";
import {resolveTranslation} from "../../utils/utils";


const ChangePasswordPage = () => {

    return (
        <ContentContainer>
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD_OLD"])}/>
            <RowSplitter height='10px'/>
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD_NEW"])}/>
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD_CONFIRM"])}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>{resolveTranslation(["PAGE.CHANGE_PASSWORD_SAVE"])}</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;