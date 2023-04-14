import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryButton, Label, Input} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";
import {useCallback, useState} from "react";


const SingUpPage = () => {
    const [name, setName] = useState('');
    const nameChangeHandler = useCallback(setName, [name]);
    const nameClearHandler = useCallback(() => setName(''), [name]);

    const [phone, setPhone] = useState('');
    const phoneChangeHandler = useCallback(setPhone, [phone]);
    const phoneClearHandler = useCallback(() => setPhone(''), [phone]);

    const [email, setEmail] = useState('');
    const emailChangeHandler = useCallback(setEmail, [email]);
    const emailClearHandler = useCallback(() => setEmail(''), [email]);

    const [newPassword, setNewPassword] = useState('');
    const newPasswordChangeHandler = useCallback(setNewPassword, [newPassword]);

    const [newPasswordType, setNewPasswordType] = useState('password');
    const newPasswordSwitchHandler = useCallback(() => setNewPasswordType(newPasswordType === 'password' ? 'text' : 'password'), [newPasswordType]);

    const [confirmedPassword, setConfirmedPassword] = useState('');
    const confirmedPasswordChangeHandler = useCallback(setConfirmedPassword, [confirmedPassword]);

    const [confirmedPasswordType, setConfirmedPasswordType] = useState('password');
    const confirmedPasswordSwitchHandler = useCallback(() => setConfirmedPasswordType(confirmedPasswordType === 'password' ? 'text' : 'password'), [confirmedPasswordType]);

    return (
        <>
            <Container>
                <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.USER_NAME")}</Label>
                <Input
                    withCleaner
                    value={name}
                    changeHandler={nameChangeHandler}
                    clearHandler={nameClearHandler}
                />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PHONE")}</Label>
                <Input
                    withCleaner
                    value={phone}
                    changeHandler={phoneChangeHandler}
                    clearHandler={phoneClearHandler}
                />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.EMAIL")}</Label>
                <Input
                    withCleaner
                    type={'email'}
                    value={email}
                    changeHandler={emailChangeHandler}
                    clearHandler={emailClearHandler}
                />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PASS")}</Label>
                <Input
                    withSwitcher
                    type={newPasswordType}
                    value={newPassword}
                    changeHandler={newPasswordChangeHandler}
                    switchHandler={newPasswordSwitchHandler}
                />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.CONFIRM_PASS")}</Label>
                <Input
                    withSwitcher
                    type={confirmedPasswordType}
                    value={confirmedPassword}
                    changeHandler={confirmedPasswordChangeHandler}
                    switchHandler={confirmedPasswordSwitchHandler}
                />
                <CheckBoxWithLabel label={resolveTranslation("PAGE.SING_UP.CHECKBOX_CONFIRM_TERMS")}/>
            </Container>
            <Wrapper>
                <NavigationLabelHref
                    hrefTitle={resolveTranslation("PAGE.SING_IN.TOP_TITLE")}
                    to={`${ROUTER.SING_IN.URL}`}
                    label={resolveTranslation("PAGE.SIGN_IN.ACCOUNT_CONFIRMATION")}
                />
            </Wrapper>
            <PrimaryButton>{resolveTranslation("PAGE.SING_UP.TOP_TITLE")}</PrimaryButton>
        </>
    );
};

export default SingUpPage;