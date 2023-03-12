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
            <Input withSwitcher placeholder={resolveTranslation(["CHANGE_PASS_OLD"])}/>
            <RowSplitter height='10px'/>
            <Input withSwitcher placeholder={resolveTranslation(["CHANGE_PASS_NEW"])}/>
            <Input withSwitcher placeholder={resolveTranslation(["CHANGE_PASS_CONFIRM"])}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>{resolveTranslation(["CHANGE_PASS_SAVE"])}</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;