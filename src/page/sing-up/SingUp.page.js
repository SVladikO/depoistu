import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryButton, Label, Input} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";


const SingUpPage = () => {
    return (
        <>
            <Container>
                <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.USER_NAME")}</Label>
                <Input />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PHONE")}</Label>
                <Input />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.EMAIL")}</Label>
                <Input />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PASS")}</Label>
                <Input />
                <Label>{resolveTranslation("PAGE.SING_UP.LABEL.CONFIRM_PASS")}</Label>
                <Input />
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