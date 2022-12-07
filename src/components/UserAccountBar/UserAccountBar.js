import {Link} from "react-router-dom";
import {ContentWrapper, Wrapper,Avatar,TextContent,Name, Status, Anchor} from "./UserAccountBar.style";
import {ReactComponent as RightAnchor} from "../../icons/right-anchor.svg";

const UserAccountBar = ({ fullName, status, href}) => {
    return (
        <Link to={href}>
            <Wrapper>
                <ContentWrapper>
                    <Avatar src="https://via.placeholder.com/60" alt="user_photo"/>
                    <TextContent>
                        <Name>{fullName}</Name>
                        <Status>{status}</Status>
                    </TextContent>
                </ContentWrapper>
                <Anchor><RightAnchor/></Anchor>
            </Wrapper>
        </Link>
    );
};

export default UserAccountBar;