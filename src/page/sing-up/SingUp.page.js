import Input from "../../components/Input/Input";
import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryWideButton} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";


const SingUpPage = () => {
    return (
        <>
            <Container>
                <Title>{resolveTranslation(["SING_UP_CREATE_ACCOUNT"])}</Title>
                <Input placeholder={resolveTranslation(["SING_UP_PAGE.PLACEHOLDER.USER_NAME"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_PAGE.PLACEHOLDER.PHONE"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_PAGE.PLACEHOLDER.EMAIL"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_PAGE.PLACEHOLDER.PASS"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_PAGE.PLACEHOLDER.CONFIRM_PASS"])}/>
                <CheckBoxWithLabel
                    label={resolveTranslation(["CHECKBOX_CONFIRM_TERMS"])}/>
            </Container>
            <Wrapper>
                <NavigationLabelHref
                    hrefTitle={resolveTranslation(["SING_IN_MAIN_TITLE"])}
                    to={`${ROUTER.SING_IN.URL}`}
                    label={resolveTranslation(["SIGN_IN_PAGE.ACCOUNT_CONFIRMATION"])}
                />
            </Wrapper>
            <PrimaryWideButton>{resolveTranslation(["SING_UP_MAIN_TITLE"])}</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;