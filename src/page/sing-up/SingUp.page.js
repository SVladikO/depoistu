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
                <Input placeholder={resolveTranslation(["SING_UP_INPUT_NAME"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_INPUT_PHONE"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_INPUT_EMAIL"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_INPUT_PASS"])}/>
                <Input placeholder={resolveTranslation(["SING_UP_INPUT_CONFIRM_PASS"])}/>
                <CheckBoxWithLabel
                    label={resolveTranslation(["CHECKBOX_CONFIRM_TERMS"])}/>
            </Container>
            <Wrapper>
                <NavigationLabelHref
                    hrefTitle={resolveTranslation(["SING_IN_MAIN_TITLE"])}
                    to={`${ROUTER.SING_IN.URL}`}
                    label={resolveTranslation(["ACCOUNT_CONFIRMATION"])}
                />
            </Wrapper>
            <PrimaryWideButton>{resolveTranslation(["SING_UP_MAIN_TITLE"])}</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;