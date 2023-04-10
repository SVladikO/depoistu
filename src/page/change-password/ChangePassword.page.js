
import React from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryButton
} from "../../components";
import {resolveTranslation} from "../../utils/utils";
import {Label} from "../../components";

const ChangePasswordPage = () => {

    return (
        <ContentContainer>
            <Label>Change Password</Label>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.OLD_PASSWORD")}/>
            <RowSplitter height='10px'/>
            <Label>New Password</Label>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.NEW_PASSWORD")}/>
            <Label>Confirm Password</Label>
            <Input withSwitcher placeholder={resolveTranslation("PAGE.CHANGE_PASSWORD.PLACEHOLDER.CONFIRM_PASSWORD")}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryButton isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;
