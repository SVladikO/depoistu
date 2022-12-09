import {Label, Title, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, hrefTitle, href}) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <a href={href}><Title>{hrefTitle}</Title></a>
        </Wrapper>
    );
};

export default NavigationLabelHref;