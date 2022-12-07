import {LinkText, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, linkText, href}) => {
    return (
        <Wrapper>
            <LinkText primary={false}>{label}</LinkText>
            <a href={href}><LinkText primary>{linkText}</LinkText></a>
        </Wrapper>
    );
};

export default NavigationLabelHref;