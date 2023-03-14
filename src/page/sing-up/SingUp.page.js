import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryWideButton, Input} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';


const SingUpPage = () => {
    return (
        <>
            <Container>
                <Title>Create an Account</Title>
                <Input placeholder="Full Name"/>
                <Input placeholder="Phone Number"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <CheckBoxWithLabel
                    label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
            </Container>
            <Wrapper>
                <NavigationLabelHref
                    hrefTitle="Sing in!"
                    to={`${ROUTER.SING_IN.URL}`}
                    label="Already have an account?"
                />
            </Wrapper>
            <PrimaryWideButton>Sing up</PrimaryWideButton>
        </>
    );
};

export default SingUpPage;