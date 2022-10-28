import React from "react";
import {ComponentWrapper, Row} from './Components.style';
import {
    PrimaryRoundedButton,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryButton,
    SecondaryWithIconButton,
    ThirdButton,
} from "../../component/Button/Button.style";
import Rating from "../../component/Rating/Rating";
import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as RateIcon} from '../../icons/rate_star.svg';

const components = [
    {title: 'PrimaryWithIconButton', component: <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>},
    {title: 'PrimaryWideButton', component: <PrimaryWideButton>Sing in</PrimaryWideButton>},
    {title: 'PrimaryRoundedButton', component: <PrimaryRoundedButton>SIGN IN</PrimaryRoundedButton>},
    {title: 'SecondaryButton', component: <SecondaryButton>Cancel</SecondaryButton>},
    {title: 'SecondaryWithIconButton', component: <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>},
    {title: 'ThirdButton', component: <ThirdButton>Payment</ThirdButton>},
    {title: 'Rating', component: <Rating Icon={RateIcon} value={`4.9`}/>},
]

function ComponentsPage() {
    return (
        <div>
            {components.map(c =>
                <Row>
                    {c.title}
                    <ComponentWrapper>
                        {c.component}
                    </ComponentWrapper>
                </Row>
            )}
        </div>
    )
}

export default ComponentsPage;