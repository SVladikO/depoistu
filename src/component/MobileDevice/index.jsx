import {Wrapper, Title, Screen} from "./MobileDevice.style";

function MobileDevice({title, children}) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Screen>{children}</Screen>
        </Wrapper>
    )
}

export default MobileDevice;