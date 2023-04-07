
import React from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryRoundedButton
} from "../../components";
import {resolveTranslation} from "../../utils/utils";
import {Label} from "../../components";

const ChangePasswordPage = () => {

    return (
        <ContentContainer>
            <Label inputName="Change Password"/>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.OLD_PASSWORD")}/>
            <RowSplitter height='10px'/>
            <Label inputName="New Password"/>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.NEW_PASSWORD")}/>
            <Label inputName="Confirm Password"/>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.CONFIRM_PASSWORD")}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;
