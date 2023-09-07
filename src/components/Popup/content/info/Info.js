import {Wrapper, Text} from './Info.style';
import {ContentContainer} from "../../../ContentContainer/ContentContainer.style";

export const Info = ({children}) => (
    <ContentContainer noBg>
        {children}
    </ContentContainer>
)


export default {
    Info,
};