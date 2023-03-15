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
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD.PLACEHOLDER.OLD_PASSWORD"])}/>
            <RowSplitter height='10px'/>
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD.PLACEHOLDER.NEW_PASSWORD"])}/>
            <Input withSwitcher placeholder={resolveTranslation(["PAGE.CHANGE_PASSWORD.PLACEHOLDER.CONFIRM_PASSWORD"])}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>{resolveTranslation(["PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD"])}</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;