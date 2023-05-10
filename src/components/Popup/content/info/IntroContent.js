import {Wrapper} from './IntroContent.style';
import {ContentContainer} from "../../../ContentContainer/ContentContainer.style";

export const IntroContent = ({children}) => (
    <div>
        <ContentContainer>
            <Wrapper>
                {children}
            </Wrapper>
        </ContentContainer>
    </div>

)

export default IntroContent;