import {Link} from "react-router-dom";

import {Label, Title, Wrapper} from "./NavigationLabelHref.style";

const NavigationLabelHref = ({label, hrefTitle, to}) => {
    return (
        <Wrapper>
            <Label>{label}{'  '}</Label>
            <Link to={to}><Title>{hrefTitle}</Title></Link>
        </Wrapper>
    );
};

export default NavigationLabelHref;