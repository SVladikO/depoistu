import {ContentContainer} from "../../ContentContainer/ContentContainer.style";

export const Info = (props) => (
    <ContentContainer noBg noShadow {...props}>
        {props.children}
    </ContentContainer>
)


export default {
    Info,
};