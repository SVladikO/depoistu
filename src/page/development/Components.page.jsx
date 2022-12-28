import React, {useCallback} from "react";
import {Wrapper, Column, Component, Row, ColorCircle, Header, Space} from './Components.style';
import
{
    Input,
    Price,
    HistoryTabBar,
    Rating,
    Discount,
    ThirdButton,
    CategoryItem,
    SettingMenuRow,
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
    ProductCard,
    CategoryTitle,
    UserAccountBar,
    NavigationLabelHref,
    BottomMenu,
    HistoryRow
} from "../../components";

import CatalogPage from "./Catalog.page";

import CountAccumulator from '../../components/CountAccumulator/CountAccumulator';
import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as LogOutIcon} from "../../icons/logout.svg";
import {ReactComponent as SandwichIcon} from '../../icons/sandwich.svg';
import {ReactComponent as LanguageIcon} from "../../icons/language.svg";

import {COLOR} from "../../utils/theme";
import UserAccountGroup from "../../components/UserAccountGroup/UserAccountGroup";
import UserOptionGroup from "../../components/UserOptionGroup/UserOptionGroup";

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
        {title: 'Input 1', component: <Input placeholder={`johndoe@mail.com`}/>},
        {title: 'Input 2', component: <Input Icon={MailIcon} placeholder={`johndoe@mail.com`}/>},
        {title: 'Input 3', component: <Input withSwitcher placeholder={`New password`}/>},
        {
            title: 'CheckBoxWithLabel',
            component: <CheckBoxWithLabel
                label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
        },

    ],
    [
        {title: 'ToggleCheckbox', component: <ToggleCheckbox/>},
        {title: 'Price', component: <Price>50.00</Price>},

        {title: 'Rating', component: <Rating>{`4.9`}</Rating>},
        {title: 'Discount', component: <Discount>{`-10`}</Discount>},
        {
            title: 'ProductSizeBar', component:
                (function () {
                    const selectedSize = 1;
                    const buttons = [
                        {price: 10, size: 1},
                        {price: 20, size: 2},
                        {price: 30, size: 3},
                    ];

                    function handleClick(m) {
                        console.log('Clicked on size: ' + m.size + ' with price: ' + m.price)
                    }

                    return <ProductSizeBar buttons={buttons} selectedSize={selectedSize} handleClick={handleClick}
                                           label="Size:"/>
                })()

        },
        {
            title: 'ProductSizeBar', component:
                (function () {
                    const selectedSize = 3;
                    const buttons = [
                        {price: 20, size: 2},
                        {price: 30, size: 3},
                    ];

                    function handleClick(m) {
                        console.log('Clicked on size: ' + m.size + ' with price: ' + m.price)
                    }

                    return <ProductSizeBar buttons={buttons} handleClick={handleClick} selectedSize={selectedSize}/>
                })()

        },
        {title: 'CountAccumulator', component: <CountAccumulator count={16}/>},
        {title: 'CountAccumulator', component: <CountAccumulator count={16}/>},
        {title: 'CategoryTitle', component: <CategoryTitle>{`All Category`}</CategoryTitle>},
        {title: 'NavigationLabelHref', component: <NavigationLabelHref label="Already have an account?" href="/catalog" hrefTitle="Sing up!"/>},

    ],
    [
        {title: "NavigationHeader", component: <NavigationHeader title="category"/>},
        {title: "NavigationHeader", component: <NavigationHeader href={' '} title="category"/>},
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},
        {
            title: 'HistoryTabBar', component:
                (function () {
                    const tabs = ['Completed', 'Upcoming', 'Cancelled'];
                    const selectedTab = tabs[0];

                    function handleClick(c) {
                        console.log(`${tabs[c]}`)
                    }

                    return <HistoryTabBar selectedTab={selectedTab} tabs={tabs} handleClick={handleClick}/>
                })()
        },
        {
            title: 'HistoryTabBar in UserOptionGroup', component:
                <NavigationHeader href={' '} title="category">
                    {(function () {
                        const tabs = ['Completed', 'Upcoming', 'Cancelled'];
                        const selectedTab = tabs[0];

                        function handleClick(c) {
                            console.log(`${tabs[c]}`)
                        }

                        return <HistoryTabBar selectedTab={selectedTab} tabs={tabs} handleClick={handleClick}/>
                    })()}
                </NavigationHeader>
        },
        {title: 'BottomMenu', component: <BottomMenu basket="35"/>},
        {title: 'BottomMenu', component: <BottomMenu/>},
    ],
    [
        {
            title: 'SettingMenuRow',
            component: <SettingMenuRow icon={LockIcon} title={`Change Password`} toggleHandler={() => {}} toggleStatus={true}/>
        },
        {
            title: 'SettingMenuRow',
            component: <SettingMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => console.log('clicked')}/>
        },
        {
            title: 'SettingMenuRow',
            component: <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
        },
        {
            title: 'UserAccountGroup', component:
                <UserAccountGroup groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => console.log('clicked')}/>
                </UserAccountGroup>
        },
        {
            title: 'UserOptionGroup', component:
                <UserOptionGroup groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => console.log('clicked')}/>
                </UserOptionGroup>
        },
        {title: 'UserAccountBar', component: <UserAccountBar fullName="Jhon Smith" href="/catalog" status="Basic Member"/>},

    ],
    [
        {title: 'CategoryItem', component: <CategoryItem title="Sandwich"><SandwichIcon/></CategoryItem>},
        {
            title: 'ProductCard',
            component:
                <ProductCard
                    data={{
                        image: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                        discont: '-10',
                        rating: '4.5',
                        buttons: [
                            {price: 20, size: 1},
                            {price: 20, size: 2},
                            {price: 30, size: 3},
                        ],
                    }}
                />
        },
        {title: "OrderRow", component: (function (){
                                            const item = {
                                                name: 'Chees Bites Pizza',
                                                description: ['spicy' , 'tomato', 'sauce', 'chili', 'mozzarella'],
                                                price: 7,
                                                size: 'Medium',
                                                status: 'Completed'
                                            }
                                            return <HistoryRow item={item}/>
                                        })()}
    ]

]

document.body.style.backgroundColor = '#d8d8d8'

function ComponentsPage() {
    const setLightBackground = useCallback(() => document.body.style.backgroundColor = '#d8d8d8', []);
    const setDarkBackground = useCallback(() => document.body.style.backgroundColor = '#001993', []);

    function renderRows(components) {
        return components.map((c, index) =>
            <Row key={c.title + index}>
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
                <ThirdButton onClick={setLightBackground}>Light</ThirdButton>
                <Space/>
                <ThirdButton onClick={setDarkBackground}>Dark</ThirdButton>
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
            <CatalogPage />
        </div>
    )
}

export default ComponentsPage;