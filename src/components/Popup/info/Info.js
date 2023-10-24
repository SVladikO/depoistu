import {ContentContainer} from "components/ContentContainer/ContentContainer.style";
import {ReactComponent as Logo} from "../../../assets/icons/logo.svg";
import {LogoContainer} from "./Info.style";

export const Info = (props) => (
    <ContentContainer noBg noShadow {...props}>
        <LogoContainer>
            <Logo/>
            <div>depoistu.com</div>
        </LogoContainer>
        {props.children}
    </ContentContainer>
)


export default {
    Info,
};