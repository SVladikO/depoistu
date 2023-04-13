
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
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.OLD_PASSWORD")}</Label>
            <Input withSwitcher/>
            <RowSplitter height='10px'/>
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.NEW_PASSWORD")}</Label>
            <Input withSwitcher />
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.CONFIRM_PASSWORD")}</Label>
            <Input withSwitcher />
            <RowSplitter margin="20px 0 0">
                <PrimaryButton isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;
