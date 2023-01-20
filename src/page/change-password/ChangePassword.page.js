import React from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryRoundedButton
} from "../../components";
import {useDocumentTitle} from "../../utils/utils";
import translations from "../../utils/translations";

const ChangePasswordPage = () => {
    useDocumentTitle(translations.company_name);
    return (
        <ContentContainer>
            <Input withSwitcher placeholder={`Old password`}/>
            <Input withSwitcher placeholder={`Password`}/>
            <Input withSwitcher placeholder={`Confirm`}/>
            <RowSplitter margin="20px 0 0">
                <PrimaryRoundedButton>Sing in</PrimaryRoundedButton>
            </RowSplitter>
        </ContentContainer>
    );
};

export default ChangePasswordPage;