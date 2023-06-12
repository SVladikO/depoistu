import {Wrapper, Title, Description} from "./NotificationTDB.style";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {RowSplitter} from "../index";

function NotificationTDB({title, description, Icon, children }) {
    return (
        <Wrapper>
            {Icon && <Icon/>}
            {Icon && <RowSplitter height='55px'/>}
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {children}
            </ContentContainer>
        </Wrapper>
    )
}

export default NotificationTDB;