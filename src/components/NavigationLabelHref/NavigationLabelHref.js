import {Label, Title, Wrapper} from "./NavigationLabelHref.style";
import {Link} from "react-router-dom";

const NavigationLabelHref = ({label, hrefTitle, to}) => {
    return (
        <Wrapper>
            <Label>{label}{'  '}</Label>
            <Link to={to}><Title>{hrefTitle}</Title></Link>
        </Wrapper>
    );
};

export default NavigationLabelHref;