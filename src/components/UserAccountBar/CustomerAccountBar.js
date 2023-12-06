import {Link} from "react-router-dom";
import {Avatar, ContentWrapper, Name, Phone, TextContent, Wrapper} from "./CustomerAccountBar.style";
import avatar from 'assets/icons/avatar.svg';
import {TRANSLATION, translate} from 'utils/translation';

const CustomerAccountBar = ({ fullName, phone}) => {
    return (
        <Link to={""}>
            <Wrapper>
                <ContentWrapper>
                    <Avatar src={avatar} alt="user_photo"/>
                    <TextContent>
                        <Name>{fullName}</Name>
                        <Phone>{translate(TRANSLATION.PAGE.SETTINGS.USER_PHONE_LABEL)}: {phone}</Phone>
                    </TextContent>
                </ContentWrapper>
            </Wrapper>
        </Link>
    );
};

export default CustomerAccountBar;