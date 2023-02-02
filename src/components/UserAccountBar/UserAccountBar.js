import {Link} from "react-router-dom";
import {Avatar, ContentWrapper, Name, Phone, TextContent, Wrapper} from "./UserAccountBar.style";
import avatar from '../../icons/avatar.svg';
import {ROUTER} from "../../utils/config";


const UserAccountBar = ({ fullName, phone}) => {
    return (
        <Link to={ROUTER.USER_ACCOUNT.URL}>
            <Wrapper>
                <ContentWrapper>
                    <Avatar src={avatar} alt="user_photo"/>
                    <TextContent>
                        <Name>{fullName}</Name>
                        <Phone>Phone: {phone}</Phone>
                    </TextContent>
                </ContentWrapper>
            </Wrapper>
        </Link>
    );
};

export default UserAccountBar;