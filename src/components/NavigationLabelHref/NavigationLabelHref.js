import {Label, Title, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, linkText, href}) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <a href={href}><Title>{linkText}</Title></a>
        </Wrapper>
    );
};

export default NavigationLabelHref;