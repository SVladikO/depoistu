import {Wrapper, Link, Screen} from "./MobileDevice.style";

function MobileDevice({TITLE, URL, index, children}) {
    return (
        <Wrapper>
            <Link href={URL}>{index}{". "}{TITLE}</Link>
            <Screen>{children}</Screen>
        </Wrapper>
    )
}

export default MobileDevice;