import {Label, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, linkText, href}) => {
    return (
        <Wrapper>
            <Label primary={false}>{label}</Label>
            <Label primary><a href={href}>{linkText}</a></Label>
        </Wrapper>
    );
};

export default NavigationLabelHref;