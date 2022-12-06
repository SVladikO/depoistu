import {Label, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, hrefText, href}) => {
    return (
        <Wrapper>
            <Label primary={false}>{label}</Label>
            <Label primary={true} ><a href={href}>{hrefText}</a></Label>
        </Wrapper>
    );
};

export default NavigationLabelHref;