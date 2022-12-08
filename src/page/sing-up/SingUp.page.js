import Input from "../../components/Input/Input";
import {Title} from "./SingUp.style";
import {CheckBoxWithLabel, ContentContainer, PrimaryWideButton} from "../../components";


const SingUpPage = () => {
    return (
        <>
            <ContentContainer>
                <Title>Create an Account</Title>
                <Input placeholder="Full Name"/>
                <Input placeholder="Phone Number"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <CheckBoxWithLabel
                    label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
            </ContentContainer>
            <PrimaryWideButton>Sing up</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;