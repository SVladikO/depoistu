import {Wrapper, Text} from './InfoContent.style';
import {ContentContainer} from "../../../ContentContainer/ContentContainer.style";

export const InfoContent = ({children}) => (
    <div>
        <ContentContainer>
            <Wrapper>
                <Text>{children}</Text>
            </Wrapper>
        </ContentContainer>
    </div>

)

export default InfoContent;