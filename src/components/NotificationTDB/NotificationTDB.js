import {Wrapper, Title, Description} from "./NotificationTDB.style";
import {Link} from "react-router-dom";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {PrimaryWideButton} from "../Button/Button.style";
import {RowSplitter} from "../index";

function NotificationTDB({title, description, link, buttonText, Icon }) {
    return (
        <Wrapper>
            {Icon && <Icon/>}
            {Icon && <RowSplitter height='55px'/>}
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Link to={link}>
                    <PrimaryWideButton>{buttonText}</PrimaryWideButton>
                </Link>
            </ContentContainer>
        </Wrapper>
    )
}

export default NotificationTDB;