import React, {useCallback, useState} from 'react';

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryButton
} from "../../components";
import {resolveTranslation} from "../../utils/utils";
import {Label} from "../../components";

const ChangePasswordPage = () => {
    const [currentPasswordType, setCurrentPasswordType] = useState('password');
    const [newPasswordType, setNewPasswordType] = useState('password');
    const [confirmedPasswordType, setConfirmedPasswordType] = useState('password');

    const currenPasswordSwitchHandler = useCallback(() => setCurrentPasswordType(currentPasswordType === 'password' ? 'text' : 'password'), [currentPasswordType]);
    const newPasswordSwitchHandler = useCallback(() => setNewPasswordType(newPasswordType === 'password' ? 'text' : 'password'), [newPasswordType]);
    const confirmedPasswordSwitchHandler = useCallback(() => setConfirmedPasswordType(confirmedPasswordType === 'password' ? 'text' : 'password'), [confirmedPasswordType]);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const currenPasswordChangeHandler = useCallback(setCurrentPassword, [currentPassword]);
    const newPasswordChangeHandler = useCallback(setNewPassword, [newPassword]);
    const confirmedPasswordChangeHandler = useCallback(setConfirmedPassword, [confirmedPassword]);

    return (
        <ContentContainer>
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.OLD_PASSWORD")}</Label>
            <Input
                withSwitcher
                type={currentPasswordType}
                value={currentPassword}
                changeHandler={currenPasswordChangeHandler}
                switchHandler={currenPasswordSwitchHandler}
            />
            <RowSplitter height='10px'/>
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.NEW_PASSWORD")}</Label>
            <Input
                withSwitcher
                type={newPasswordType}
                value={newPassword}
                changeHandler={newPasswordChangeHandler}
                switchHandler={newPasswordSwitchHandler}
            />
            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.CONFIRM_PASSWORD")}</Label>
            <Input
                withSwitcher
                type={confirmedPasswordType}
                value={confirmedPassword}
                changeHandler={confirmedPasswordChangeHandler}
                switchHandler={confirmedPasswordSwitchHandler}
            />
            <RowSplitter margin="20px 0 0"/>
            <PrimaryButton isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryButton>
        </ContentContainer>
    );
};

export default ChangePasswordPage;
