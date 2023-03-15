import {Link} from "react-router-dom";
import {Avatar, ContentWrapper, Name, Phone, TextContent, Wrapper} from "./UserAccountBar.style";
import avatar from '../../icons/avatar.svg';
import {resolveTranslation} from "../../utils/utils";
// import {ROUTER} from "../../utils/config";


const UserAccountBar = ({ fullName, phone}) => {
    return (
        <Link to={""}>
            <Wrapper>
                <ContentWrapper>
                    <Avatar src={avatar} alt="user_photo"/>
                    <TextContent>
                        <Name>{fullName}</Name>
                        <Phone>{resolveTranslation(["PAGE.SETTINGS.USER_PHONE_LABEL"])}: {phone}</Phone>
                    </TextContent>
                </ContentWrapper>
            </Wrapper>
        </Link>
    );
};

export default UserAccountBar;