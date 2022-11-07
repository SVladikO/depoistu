import React, {useState} from "react";
import {Wrapper, Column, Component, Row, ColorCircle, Header, Space} from './Components.style';
import {
    PrimaryRoundedButton,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryButton,
    SecondaryWithIconButton,
    ThirdButton,
} from "../../component/Button/Button.style";
import {ContentContainer} from "../../component/ContentContainer/ContentContainer.style.js";
import {Discount} from "../../component/Discount/Discount.style";
import Input from "../../component/Input/Input";
import NavigationHeader from "../../component/TopNavigation/NavigationHeader";

import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';

import {THEME} from "../../theme";

const colors = Object.keys(THEME.COLOR).map(key =>
    ({title: key, component: <ColorCircle bg={THEME.COLOR[key]}/>, value: THEME.COLOR[key], width: '50px'})
)

const columns = [
    // colors,
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
    ],
    [
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},
    ]
]

const defaultRowColor = '#ffffff'

function ComponentsPage() {
    const [rowBackround, setRowBackground] = useState(defaultRowColor)

    console.log(rowBackround)

    function renderRows(components) {
        return components.map(c =>
            <Row bg={rowBackround}>
                {c.title}
                <Component width={c.width}>{c.component}</Component>
                {c.value}
            </Row>
        )
    }

    return (
        <div>
            <Header>
                <Space/>
                <input type="color" value={rowBackround} onChange={e => setRowBackground(e.target.value)}/>
                <Space/>
                <span>Change row background  </span>
                <Space/>
                <ThirdButton onClick={() => setRowBackground(defaultRowColor)}>Reset color</ThirdButton>
                <Space/>
                <Space/>
                {renderRows(colors)}
            </Header>
            <Wrapper>

                {columns.map(components =>
                    <Column>{renderRows(components)}</Column>)
                }
            </Wrapper>
        </div>
    )
}

export default ComponentsPage;