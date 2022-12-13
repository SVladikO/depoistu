import {Wrapper, Link, Screen} from "./MobileDevice.style";

function MobileDevice({href, index, children}) {
    return (
        <Wrapper>
            <Link href={href}>{index}{". "}{href}</Link>
            <Screen>{children}</Screen>
        </Wrapper>
    )
}

export default MobileDevice;