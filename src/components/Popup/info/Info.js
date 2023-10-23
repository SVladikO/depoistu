import {ContentContainer} from "components/ContentContainer/ContentContainer.style";
import {ReactComponent as Logo} from "../../../assets/icons/logo.svg";
import {LogoContainer} from "./Info.style";

export const Info = (props) => (
    <ContentContainer noBg noShadow {...props}>
        <LogoContainer>
            <Logo/>
            <a href={"https://depoistu-develop.onrender.com/"}>depoistu.com</a>
        </LogoContainer>
        {props.children}
    </ContentContainer>
)


export default {
    Info,
};