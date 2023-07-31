import {Wrapper, Text} from './Info.style';
import {ContentContainer} from "../../../ContentContainer/ContentContainer.style";

export const Info = ({children}) => (
        <ContentContainer>
            {children}
        </ContentContainer>
)

export const InfoText = ({children}) => (
    <ContentContainer>
        <Wrapper>
            <Text>
                {children}
            </Text>
        </Wrapper>
    </ContentContainer>
);

export default {
    Info,
    InfoText
};