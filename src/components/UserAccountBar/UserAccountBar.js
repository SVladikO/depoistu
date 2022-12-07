import {ContentWrapper, Wrapper,Picture,TextContent,Name, Status, Anchor} from "./UserAccountBar.style";
import {Link} from "react-router-dom";

const UserAccountBar = ({icon: Icon, name, status, href}) => {
    return (
        <Link to={href}>
            <Wrapper>
                <ContentWrapper>
                    <Picture src="https://via.placeholder.com/60" alt="user_photo"/>
                    <TextContent>
                        <Name>{name}</Name>
                        <Status>{status}</Status>
                    </TextContent>
                </ContentWrapper>
                <Anchor><Icon/></Anchor>
            </Wrapper>
        </Link>
    );
};

export default UserAccountBar;