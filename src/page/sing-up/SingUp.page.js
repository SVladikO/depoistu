import Input from "../../components/Input/Input";
import {Title, InputWrapper, ButtonWrapper} from "./SingUp.style";
import {CheckBoxWithLabel, ContentContainer, PrimaryWideButton} from "../../components";


const SingUpPage = () => {
    return (
        <>
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
            <PrimaryWideButton>Sing up</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;