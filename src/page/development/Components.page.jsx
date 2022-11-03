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

import {Discount} from "../../component/Discount/Discount.style";
import InputWithIcon from "../../component/InputWithIcon/InputWithIcon";
import NavigationHeader from "../../component/TopNavigation/NavigationHeader";

import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';



const components = [
    {title: 'PrimaryWithIconButton', component: <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>},
    {title: 'PrimaryWideButton', component: <PrimaryWideButton>Sing in</PrimaryWideButton>},
    {title: 'PrimaryRoundedButton', component: <PrimaryRoundedButton>SIGN IN</PrimaryRoundedButton>},
    {title: 'SecondaryButton', component: <SecondaryButton>Cancel</SecondaryButton>},
    {title: 'SecondaryWithIconButton', component: <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>},
    {title: 'ThirdButton', component: <ThirdButton>Payment</ThirdButton>},
    {title: 'InputWithIcon', component: <InputWithIcon Icon={MailIcon} placeholder={`johndoe@mail.com`}/>},
    {title: "<NavigationHeader title=\"category\"/>", component: <NavigationHeader title="category"/>},
    {title: "<NavigationHeader href={\' \'} title=\"category\"/>", component: <NavigationHeader href={' '} title="category"/>},
    {title: '<Discount>{`-10%`}</Discount>', component: <Discount>{`-10%`}</Discount>}
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