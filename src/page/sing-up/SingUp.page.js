import NavigationHeader from "../../components/TopNavigation/NavigationHeader";
import Input from "../../components/Input/Input";
import {Wrapper, Title, Container,InputWrapper, ButtonWrapper} from "./SingUp.style";
import {CheckBoxWithLabel, ContentContainer, PrimaryWideButton} from "../../components";




const SingUpPage = () => {
    return (
        <>
            <NavigationHeader href={' '} title="Sign up"/>
            <ContentContainer>
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
            </ContentContainer>
            <ButtonWrapper>
                <PrimaryWideButton>Sing up</PrimaryWideButton>
            </ButtonWrapper>

        </>
    );
};

export default SingUpPage;