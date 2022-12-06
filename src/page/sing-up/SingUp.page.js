import NavigationHeader from "../../components/TopNavigation/NavigationHeader";
import Input from "../../components/Input/Input";
import {Wrapper, Title, Container, InputWrapper, ButtonWrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryWideButton} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';

const SingUpPage = () => {
    return (
        <Wrapper>
            <NavigationHeader href={' '} title="category"/>
            <Container>
                <Title>Create an Account</Title>
                <InputWrapper>
                    <Input placeholder="Full Name"/>
                    <Input placeholder="Phone Number"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <div style={{marginBottom: '17px'}}>
                        <Input placeholder="Confirm Password"/>
                    </div>
                    <CheckBoxWithLabel
                        label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
                </InputWrapper>
            </Container>
            <NavigationLabelHref hrefText="Sing up!" href={`${ROUTER.SING_IN}`} label="Already have an account?"/>
            <ButtonWrapper>
                <PrimaryWideButton>Sing up</PrimaryWideButton>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default SingUpPage;