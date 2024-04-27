import {Wrapper, Title, Description} from "./NotificationTDB.style";

import {RowSplitter} from "components";
import {ContentContainer} from "components/ContentContainer/ContentContainer.style";
import {COLOR} from "utils/theme";

function NotificationTDB({title, description, Icon, children }) {
    return (
        <Wrapper>
            {Icon && <Icon/>}
            {Icon && <RowSplitter height='40px'/>}
            <ContentContainer bg={COLOR.WHITE} noShadow padding={'30px 15px 15px'}>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {children}
            </ContentContainer>
        </Wrapper>
    )
}

export default NotificationTDB;