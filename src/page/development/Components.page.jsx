import React from "react";
import {Wrapper, Column, ComponentWrapper, Row, ColorCircle} from './Components.style';
import {
    PrimaryRoundedButton,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryButton,
    SecondaryWithIconButton,
    ThirdButton,
} from "../../component/Button/Button.style";

import {Discount} from "../../component/Discount/Discount.style";
import Input from "../../component/Input/Input";
import NavigationHeader from "../../component/TopNavigation/NavigationHeader";

import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';

import {THEME} from "../../theme";

const colors = Object.keys(THEME.COLOR).map(key =>
    ({title: key, component: <ColorCircle bg={THEME.COLOR[key]} />})
)

// We grouped to have columns
const columns = [
    colors,
    [
        {title: 'PrimaryWithIconButton', component: <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>},
        {title: 'PrimaryWideButton', component: <PrimaryWideButton>Sing in</PrimaryWideButton>},
        {title: 'PrimaryRoundedButton', component: <PrimaryRoundedButton>SIGN IN</PrimaryRoundedButton>},
        {title: 'SecondaryButton', component: <SecondaryButton>Cancel</SecondaryButton>},
        {
            title: 'SecondaryWithIconButton',
            component: <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>
        },
        {title: 'ThirdButton', component: <ThirdButton>Payment</ThirdButton>},
    ],
    [
        {title: 'Input', component: <Input placeholder={`johndoe@mail.com`}/>},
        {title: 'Input', component: <Input Icon={MailIcon} placeholder={`johndoe@mail.com`}/>},
        {title: "NavigationHeader", component: <NavigationHeader title="category"/>},
        {
            title: "NavigationHeader",
            component: <NavigationHeader href={' '} title="category"/>
        },
        {title: 'Discount', component: <Discount>{`-10%`}</Discount>}
    ]
]

function ComponentsPage() {
    return (
        <Wrapper>
            {columns.map(columnComponents =>
                <Column>
                    {columnComponents.map(c =>
                        <Row>
                            {c.title}
                            <ComponentWrapper>
                                {c.component}
                            </ComponentWrapper>
                        </Row>
                    )
                    }
                </Column>)
            }
        </Wrapper>
    )
}

export default ComponentsPage;