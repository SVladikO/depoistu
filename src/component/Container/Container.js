import {ContentContainer} from "./Container.style";

const Container = (props) => {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
};

export default Container;