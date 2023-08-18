import {Wrapper, Text} from './Info.style';
import {ContentContainer} from "../../../ContentContainer/ContentContainer.style";

export const Info = ({children}) => (
        <ContentContainer>
            {children}
        </ContentContainer>
)

export const InfoText = ({children}) => (
    <Info>
        <Wrapper>
            <Text>
                {children}
            </Text>
        </Wrapper>
    </Info>
);

export default {
    Info,
    InfoText
};