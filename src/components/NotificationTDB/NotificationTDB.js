import {Wrapper, Title, Description} from "./NotificationTDB.style";

import {RowSplitter} from "components";
import {ContentContainer} from "components/ContentContainer/ContentContainer.style";

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