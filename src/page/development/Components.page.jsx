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

import Rating from "../../component/Rating/Rating";
import CheckBoxWithLabel from "../../component/CheckBoxWithLabel/CheckBoxWithLabel";
import ToggleCheckbox from "../../component/ToggleCheckbox/ToggleCheckbox";
import {ContentContainer} from "../../component/ContentContainer/ContentContainer.style.js";
import {Discount} from "../../component/Discount/Discount.style";
import Input from "../../component/Input/Input";
import NavigationHeader from "../../component/TopNavigation/NavigationHeader";
import ProductSizeBar from "../../component/ProductSizeBar/ProductSizeBar";
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
        {title: 'Rating', component: <Rating>{`4.9`}</Rating>},
        {title: 'Discount', component: <Discount>{`-10%`}</Discount>}
    ],
    [
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},
        {title: 'ToggleCheckbox', component: <ToggleCheckbox/>},
        {title: 'CheckBoxWithLabel',
            component:
                <CheckBoxWithLabel
                    label="By creating an account you agree to our Terms of Service and Privacy Policy"
                />
        },
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

        }
    ]
]

const defaultRowColor = '#ffffff'

function ComponentsPage() {
    const [rowBackground, setRowBackground] = useState(defaultRowColor)

    function renderRows(components) {
        return components.map(c =>
            <Row bg={rowBackground}>
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