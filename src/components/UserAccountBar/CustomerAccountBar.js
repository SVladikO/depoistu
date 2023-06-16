import {Link} from "react-router-dom";
import {Avatar, ContentWrapper, Name, Phone, TextContent, Wrapper} from "./CustomerAccountBar.style";
import avatar from '../../icons/avatar.svg';
import {TRANSLATION, resolveTranslation} from '../../utils/translation';
// import {ROUTER} from "../../utils/config";


const CustomerAccountBar = ({ fullName, phone}) => {
    return (
        <Link to={""}>
            <Wrapper>
                <ContentWrapper>
                    <Avatar src={avatar} alt="user_photo"/>
                    <TextContent>
                        <Name>{fullName}</Name>
                        <Phone>{resolveTranslation(TRANSLATION.PAGE.SETTINGS.USER_PHONE_LABEL)}: {phone}</Phone>
                    </TextContent>
                </ContentWrapper>
            </Wrapper>
        </Link>
    );
};

export default CustomerAccountBar;