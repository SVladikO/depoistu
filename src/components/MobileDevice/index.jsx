import {Wrapper, Link, Screen} from "./MobileDevice.style";

function MobileDevice({href, index, children}) {
    return (
        <Wrapper>
            {index}{" "}
            <Link href={href}>{href}</Link>
            <Screen>{children}</Screen>
        </Wrapper>
    )
}

export default MobileDevice;