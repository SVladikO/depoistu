import {Label, TextContent} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, hrefText, href}) => {
    return (
        <TextContent>
            <Label primary={false}>{label}</Label>
            <Label primary={true} ><a href={href}>{hrefText}</a></Label>
        </TextContent>
    );
};

export default NavigationLabelHref;