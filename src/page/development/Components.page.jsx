import React, {useState} from "react";
import {Wrapper, Column, Component, Row, ColorCircle, Header, Space} from './Components.style';
import
    {
    Input,
    Price,
    Rating,
    Discount,
    ThirdButton,
    AccountMenuRow,
    ToggleCheckbox,
    CheckBoxWithLabel,
    SecondaryButton,
    PrimaryWideButton,
    PrimaryRoundedButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    ContentContainer,
    NavigationHeader,
    ProductSizeBar,
    CategoryTitle,
} from "../../components";

import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as LogOutIcon} from "../../icons/logout.svg";
import {ReactComponent as LanguageIcon} from "../../icons/language.svg";

import {COLOR} from "../../theme";

const colors = Object.keys(COLOR).map(key =>
    ({title: key, component: <ColorCircle key={key} bg={COLOR[key]}/>, value: COLOR[key], width: '50px'})
)

const columns = [
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
        {title: 'Input', component: <Input withSwitcher placeholder={`New password`} />},
        {title: 'CheckBoxWithLabel', component: <CheckBoxWithLabel label="By creating an account you agree to our Terms of Service and Privacy Policy" />},
        {title: 'ToggleCheckbox', component: <ToggleCheckbox/>},

        {title: 'Price', component: <Price>50.00</Price>},
    ],
    [

        {title: 'Rating', component: <Rating>{`4.9`}</Rating>},
        {title: 'Discount', component: <Discount>{`-10%`}</Discount>},
        {title: 'ProductSizeBar', component:
                (function ()  {
                  const selectedSize = 1;
                  const buttons = [
                      {price: 10, size: 1},
                      {price: 20, size: 2},
                      {price: 30, size: 3},
                  ];

                  function handleClick(m) {
                      alert('Clicked on size: ' + m.size + ' with price: ' + m.price)
                  }

                  return <ProductSizeBar buttons={buttons} selectedSize={selectedSize} handleClick={handleClick} label="Size:"/>
              })()

        },
        {title: 'ProductSizeBar', component:
                (function ()  {
                  const selectedSize = 3;
                  const buttons = [
                      {price: 20, size: 2},
                      {price: 30, size: 3},
                  ];

                    function handleClick(m) {
                        alert('Clicked on size: ' + m.size + ' with price: ' + m.price)
                    }

                  return <ProductSizeBar buttons={buttons} handleClick={handleClick} selectedSize={selectedSize} />
              })()

        },
        {title:'CategoryTitle', component: <CategoryTitle>{`All Category`}</CategoryTitle>},
    ],
    [
        {title: "NavigationHeader", component: <NavigationHeader title="category"/>},
        {title: "NavigationHeader", component: <NavigationHeader href={' '} title="category"/>},
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},
        {title: 'AccountMenuRow', component: <AccountMenuRow  icon={LockIcon} title={`Change Password`} toggleHandler={() => alert('clicked toggle')} toggleStatus={true} />},
        {title: 'AccountMenuRow', component: <AccountMenuRow  icon={LogOutIcon}  title="Only change handler" changeHandler={() => alert('clicked')} />},
        {title: 'AccountMenuRow', component: <AccountMenuRow  icon={LanguageIcon}  title="Language"  href="/catalog" label="English" />}
    ]
]

const defaultRowColor = '#ffffff'

function ComponentsPage() {
    const [rowBackground, setRowBackground] = useState(defaultRowColor)

    function renderRows(components) {
        return components.map((c, index) =>
            <Row bg={rowBackground} key={c.title+index}>
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
                <span>Bg: </span>
                <input type="color" value={rowBackground} onChange={e => setRowBackground(e.target.value)}/>
                <Space/>
                <ThirdButton onClick={() => setRowBackground(defaultRowColor)}>Set light</ThirdButton>
                <Space/>
                <ThirdButton onClick={() => setRowBackground('#0063e6')}>Set dark</ThirdButton>
                <Space/>
                <Space/>
                <Space/>
                {renderRows(colors)}
            </Header>
            <Wrapper>
                {columns.map((components, index) =>
                    <Column key={index}>{renderRows(components)}</Column>)
                }
            </Wrapper>
        </div>
    )
}

export default ComponentsPage;