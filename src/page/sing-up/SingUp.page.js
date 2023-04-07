import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryWideButton, Input, Label} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";


const SingUpPage = () => {
    return (
        <>
            <Container>
                <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
                <Label inputName="Name"/>
                <Input placeholder={resolveTranslation("PAGE.SING_UP.PLACEHOLDER.USER_NAME")}/>
                <Label inputName="Phone"/>
                <Input placeholder={resolveTranslation("PAGE.SING_UP.PLACEHOLDER.PHONE")}/>
                <Label inputName="Email"/>
                <Input placeholder={resolveTranslation("PAGE.SING_UP.PLACEHOLDER.EMAIL")}/>
                <Label inputName="Password"/>
                <Input placeholder={resolveTranslation("PAGE.SING_UP.PLACEHOLDER.PASS")}/>
                <Label inputName="Confirm Password"/>
                <Input placeholder={resolveTranslation("PAGE.SING_UP.PLACEHOLDER.CONFIRM_PASS")}/>
                <CheckBoxWithLabel
                    label={resolveTranslation("PAGE.SING_UP.CHECKBOX_CONFIRM_TERMS")}/>
            </Container>
            <Wrapper>
                <NavigationLabelHref
                    hrefTitle={resolveTranslation("PAGE.SING_IN.TOP_TITLE")}
                    to={`${ROUTER.SING_IN.URL}`}
                    label={resolveTranslation("PAGE.SIGN_IN.ACCOUNT_CONFIRMATION")}
                />
            </Wrapper>
            <PrimaryWideButton>{resolveTranslation("PAGE.SING_UP.TOP_TITLE")}</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;