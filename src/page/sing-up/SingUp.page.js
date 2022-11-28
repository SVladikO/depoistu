import NavigationHeader from "../../components/TopNavigation/NavigationHeader";
import Input from "../../components/Input/Input";
import {Wrapper, Title, Container,InputWrapper, ButtonWrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryWideButton} from "../../components";




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
                    <Input placeholder="Confirm Password"/>
                    <CheckBoxWithLabel
                        label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
                </InputWrapper>
            </Container>
            <ButtonWrapper>
                <PrimaryWideButton>Sing up</PrimaryWideButton>
            </ButtonWrapper>

        </Wrapper>
    );
};

export default SingUpPage;