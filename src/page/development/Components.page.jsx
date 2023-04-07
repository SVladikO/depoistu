import React, {useCallback} from "react";
import {Wrapper, Column, Component, Row, ColorCircle, Header, Space} from './Components.style';
import
{
    Input,
    PInput,
    Price,
    HistoryTabBar,
    Rating,
    Discount,
    ThirdButton,
    CategoryItem,
    SettingMenuRow,
    ToggleCheckbox,
    CheckBoxWithLabel,
    CategoryMenuRow,
    SecondaryButton,
    PrimaryWideButton,
    PrimaryRoundedButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    ContentContainer,
    Notification,
    NavigationHeader,
    UserAccountBar,
    NavigationLabelHref,
    BottomMenu,
    MenuItem,
    OrderHistoryRow,
    NotificationTDB,
    RowSplitter,
    Textarea,
    Company,
} from "../../components";

import CatalogPage from "./Catalog.page";

import {ReactComponent as EmptyBasketIcon} from "../../icons/empty_basket.svg";
import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as LogOutIcon} from "../../icons/logout.svg";
import {ReactComponent as SandwichIcon} from '../../icons/sandwich.svg';
import {ReactComponent as LanguageIcon} from "../../icons/language.svg";

import {COLOR} from "../../utils/theme";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import OptionSettings from "../../components/OptionSettings/OptionSettings";
import {ImagePopupContent} from "../../components/PopupImage/PopupImage";
import {PopupIntroContent} from "../../components/PopupIntro/PopupIntro";
import {LoadingContent} from "../../components/Notification/Notification";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";

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
        {title: 'Textarea', component: <Textarea withCleaner />},
        {title: 'PInput', component: <PInput withIcon Icon={LocationIcon}> Vinnica</PInput>},
        {title: 'ToggleCheckbox', component: <ToggleCheckbox/>},
    ],
    [
        {
          title: 'Institution',
          component: <Company company={{PHOTOS: 'https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg, https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg, https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg',NAME: 'Domono', CITY: 'Kyiv', STREET: 'Davidusk 15.',}}/>
        },
        {title: 'CategoryMenuRow', component: <CategoryMenuRow menuItems={[{CATEGORY_ID: 1}, {CATEGORY_ID: 2}, {CATEGORY_ID: 3}]} />},
        {
            title: 'MenuItem',
            component:
                <MenuItem
                    item={{
                        ID: 10,
                        NAME: '4 Cheese',
                        DESCRIPTION: 'spicy , tomato, sauce, chili, mozzarella, spicy , tomato, sauce, chili, mozzarella',
                        IMAGE_URL: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                        COOKING_TIME: 15,
                        PRICE: 170,
                        SIZE: 150,
                    }}
                />
        },
        {
            title: 'OrderHistoryRow', component:
                (() => {
                    const item = {
                        name: 'Chees Bites Pizza',
                        description: 'spicy, tomato, sauce, chili, mozzarella',
                        price: 7
                    }
                    return <OrderHistoryRow item={item}/>
                })()
        },
        {
            title: 'OrderHistoryRow', component: (function () {
                const item = {
                    name: 'Chees Bites Pizza',
                    description: 'spicy, tomato, sauce, chili, mozzarella',
                    price: 7,
                    size: 'Medium',
                    status: 'Completed'
                }
                return <OrderHistoryRow isHistory item={item}/>
            })()
        },
        {title: 'CategoryItem', component: <CategoryItem title="Sandwich"><SandwichIcon/></CategoryItem>},


    ],
    [
        {title: 'PopupImage', component: <ImagePopupContent imageUrl="https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg" />},
        {title: 'PopupIntro', component: <PopupIntroContent />},
        {title: 'EmptyBasket', component:
                <NotificationTDB
                    Icon={EmptyBasketIcon}
                    title="Your Cart is empty"
                    description="Looks like you haven't made your order yet."
                    buttonText="Shop Now"
                    link="#"
                />
        },
        {title: 'Price', component: <Price small={false} big>50.00</Price>},
        {title: 'Rating', component: <Rating>{`4.9`}</Rating>},
        {title: 'Discount', component: <Discount>{`-10`}</Discount>},
    ],
    [
        {
            title: 'AccountSettings', component:
                <AccountSettings groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => console.log('clicked')}/>
                </AccountSettings>
        },
        {
            title: 'OptionSettings', component:
                <OptionSettings groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => console.log('clicked')}/>
                </OptionSettings>
        },
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
            title: 'UserAccountBar',
            component: <UserAccountBar fullName="Jhon Smith" status="Basic Member"/>
        },

    ],
    [
        {
            title: 'HistoryTabBar in OptionSettings', component:
                <NavigationHeader title="category" backUrl={' '} >
                    <HistoryTabBar/>
                </NavigationHeader>
        },
        {title: "NavigationHeader", component: <NavigationHeader title="category"/>},
        {title: 'HistoryTabBar', component: <HistoryTabBar/>},
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},

        {title: 'BottomMenu', component: <RowSplitter height='80px'><BottomMenu/></RowSplitter>},
        {
            title: 'NavigationLabelHref',
            component: <NavigationLabelHref label="Already have an account?" to="/catalog" hrefTitle="Sing up!"/>
        },
        {
            title: 'CheckBoxWithLabel',
            component: <CheckBoxWithLabel
                label="By creating an account you agree to our Terms of Service and Privacy Policy"/>
        },
    ],
    [
        {title: 'Loading', component: <LoadingContent />},
        {title: 'Error', component: <Notification.Error />},
        {title: 'Success', component: <Notification.Success />},
    ]


]

document.body.style.backgroundColor = '#d8d8d8'

function ComponentsPage() {
    const setWhiteBackground = useCallback(() => document.body.style.backgroundColor = '#ffffff', []);
    const setGreyBackground = useCallback(() => document.body.style.backgroundColor = '#d8d8d8', []);
    const setBlueBackground = useCallback(() => document.body.style.backgroundColor = '#001993', []);

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
                <ThirdButton onClick={setWhiteBackground}>White</ThirdButton>
                <Space/>
                <ThirdButton onClick={setGreyBackground}>Grey</ThirdButton>
                <Space/>
                <ThirdButton onClick={setBlueBackground}>Blue</ThirdButton>
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
            {/*<CatalogPage/>*/}
        </div>
    )
}

export default ComponentsPage;