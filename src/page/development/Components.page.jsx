import React, {useCallback, useState} from "react";
import {Wrapper, Column, Component, Row, ColorCircle, Header, Space} from './Components.style';
import
{
    Input,
    PInput,
    Price,
    HistoryTabBar,
    Rating,
    Discount,
    CategoryItem,
    SettingMenuRow,
    ToggleCheckbox,
    CheckBoxWithLabel,
    CategoryMenuRow,
    SecondaryButton,
    PrimaryButton,
    ContentContainer,
    Notification,
    NavigationHeader,
    FromToTime,
    CustomerAccountBar,
    NavigationLabelHref,
    BottomMenu,
    MenuItem,
    OrderHistoryRow,
    NotificationTDB,
    RowSplitter,
    Textarea,
    Company,
    Label,
    CloseButton
} from "../../components";

import CatalogPage from "./Catalog.page";
import {ReactComponent as QRCodeIcon} from "../../icons/qr_code.svg";
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
import ImageContent from "../../components/Popup/content/image/ImageContent";
import IntroContent from "../../components/Popup/content/info/InfoContent";
import CityContent from "../../components/Popup/content/city/CityContent"
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import Checkbox from "../../components/Checkbox/Checkbox";
import {EditBar, QRCodeButton} from "../customer-companies/CustomerCompanies.style";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {Link} from "react-router-dom";
import {getAllCities} from "../../utils/cities";

const colors = Object.keys(COLOR).map(key =>
    ({title: key, component: <ColorCircle key={key} bg={COLOR[key]}/>, value: COLOR[key], width: '50px'})
)

function ExampleCategoryWithSelected() {
    const menuItems = [{CATEGORY_ID: 1}, {CATEGORY_ID: 2}, {CATEGORY_ID: 3}];
    const [selectedCategoryId, setSelectedCategoryId] = useState(menuItems[0].CATEGORY_ID)

    return (
        <CategoryMenuRow
            showAllCategories
            showMenuItemAmount
            menuItems={menuItems}
            selectedCategoryId={selectedCategoryId}
            changeCategory={id => setSelectedCategoryId(id)}
        />
    )
}

const componentsGroup1 = [
    [
        {
            title: 'Checkbox', component: <Checkbox changeHandler={() => {
            }}/>
        },
        {
            title: 'ToggleCheckbox', component: <ToggleCheckbox changeHandler={() => {
            }}/>
        },
        {title: 'Rating', component: <Rating>{`4.9`}</Rating>},
        {title: 'Discount', component: <Discount>{`-10`}</Discount>},
        {title: 'Price', component: <Price small={false} big>50.00</Price>},
    ],
    [
        {title: 'PrimaryButton', component: <PrimaryButton><GoogleIcon/>Google</PrimaryButton>},
        {title: 'PrimaryButton', component: <PrimaryButton>Sing in</PrimaryButton>},
        {title: 'SecondaryButton', component: <SecondaryButton><FacebookIcon/>facebook</SecondaryButton>},
        {title: 'SecondaryButton', component: <SecondaryButton>Cancel</SecondaryButton>},
        {title: 'CloseButton', component: <CloseButton clickHandler={() => alert('clicked')}/>},
    ],
    [
        {title: 'Label', component: <Label>Change Password</Label>},
        {
            title: 'Input', component: <Input onChange={() => {
            }}/>
        },
        {
            title: 'Input {withCleaner}', component: <Input withCleaner value={111} onChange={() => {
            }}/>
        },
        {
            title: 'Input {withSwitcher}', component: <Input value={1111} withSwitcher onChange={() => {
            }}/>
        },
        {
            title: 'Input',
            component: <Input Icon={MailIcon} isTouched value="jodode@mail.com" withCleaner onChange={() => {
            }}/>
        },
        {
            title: 'Input',
            component: <Input isTouched errorMessage={'Max length 12.'} value="++380970663322" onChange={() => {
            }}/>
        },
    ],
    [
        {
            title: 'PInput', component: <PInput withIcon Icon={LocationIcon} value={'Vinnica'} handleClick={() => {
            }}/>
        },
        {
            title: 'FromToTime', component: <FromToTime prefix='mon' dayName='Mon' values={{}} handleChange={() => {
            }}/>
        },
        {
            title: 'FromToTime',
            component: <FromToTime prefix='mon' dayName='Mon' values={{monIsChecked: true}} handleChange={() => {
            }}/>
        },
        {title: 'Textarea withCleaner', component: <Textarea withCleaner/>},
        {title: 'Textarea withCleaner', component: <Textarea withCleaner value={222}/>},
    ]
];
const componentsGroup2 = [
    [
        {
            title: 'CategoryItem',
            component: <CategoryItem category={{icon: LanguageIcon, title: 'Language'}} title="Sandwich"><SandwichIcon/></CategoryItem>
        },
        {
            title: 'CategoryMenuRow',
            component: <CategoryMenuRow menuItems={[{CATEGORY_ID: 1}, {CATEGORY_ID: 2}, {CATEGORY_ID: 3}]}/>
        },
        {
            title: 'CategoryMenuRow', component: <ExampleCategoryWithSelected/>
        },
    ],
    [
        {
            title: 'MenuItem',
            component:
                <MenuItem withEditIcon
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
    ],
    [
        {
            title: 'Company',
            component: <Company
                company={{
                    PHOTOS: 'https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg, https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg, https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg',
                    NAME: 'Domono',
                    CITY_ID: '204',
                    SCHEDULE: ', , , , , 11:00-22:00, 10:00-19:00',
                    STREET: 'Davidusk 15.',
                }}
            />
        },
        {
            title: 'Company',
            component: <Company
                withMoreInfo
                company={{
                    PHOTOS: 'https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg, https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg, https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg',
                    NAME: 'Domono',
                    CITY_ID: '204',
                    SCHEDULE: '01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-22:00, 01:00-22:00',
                    STREET: 'Davidusk 15.',
                }}
            />
        },
        {
            title: 'Company',
            component: <Company
                company={{
                    PHOTOS: 'https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg, https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg, https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg',
                    NAME: 'Domono',
                    CITY_ID: '204',
                    SCHEDULE: ',,,,,,',
                    STREET: 'Davidusk 15.',
                }}
            >
                <EditBar>
                    <PrimaryButton><EditIcon/>Company</PrimaryButton>
                    <QRCodeButton><QRCodeIcon/></QRCodeButton>
                    <PrimaryButton><EditIcon/>Menu</PrimaryButton>
                </EditBar>
            </Company>
        },
    ],
    [
        {title: 'Notification.Loading', component: <Notification.Loading/>},
        {title: 'Notification.Error', component: <Notification.Error message={'Broken content.'}/>},
        {title: 'Notification.Success', component: <Notification.Success message={'Company was created.'}/>},
    ],

];
const componentsGroup3 = [
    [
        {
            title: 'SettingMenuRow',
            component:
                <SettingMenuRow
                    icon={LockIcon}
                    title={`Change Password`}
                    toggleHandler={() => {
                    }}
                    toggleStatus={true}
                />
        },
        {
            title: 'SettingMenuRow',
            component:
                <SettingMenuRow
                    icon={LogOutIcon}
                    title="Only change handler"
                    changeHandler={() => console.log('clicked')}
                />
        },
        {
            title: 'SettingMenuRow',
            component: <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
        },

        {
            title: 'AccountSettings', component:
                <AccountSettings groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler"
                                    changeHandler={() => console.log('clicked')}/>
                </AccountSettings>
        },
        {
            title: 'OptionSettings', component:
                <OptionSettings groupTitle="Accounts">
                    <SettingMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                    <SettingMenuRow icon={LogOutIcon} title="Only change handler"
                                    changeHandler={() => console.log('clicked')}/>
                </OptionSettings>
        },
    ],
    [
        {title: "NavigationHeader", component: <NavigationHeader title="category"/>},
        {title: 'HistoryTabBar', component: <HistoryTabBar/>},
        {
            title: 'HistoryTabBar in OptionSettings', component:
                <NavigationHeader title="category" backUrl={' '}>
                    <HistoryTabBar/>
                </NavigationHeader>
        },

        {title: 'BottomMenu', component: <RowSplitter height='80px'><BottomMenu/></RowSplitter>},
        {title: 'ContentContainer', component: <ContentContainer>Sign up with</ContentContainer>},
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
        {
            title: 'ImagePopupContent',
            component: <ImageContent
                imageUrl="https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg"/>
        },
        {
            title: 'IntroPopupContent',
            component: <IntroContent>Some text Some text Some text Some text Some text</IntroContent>
        },
        {title: 'CityPopupContent', component: <CityContent availableCities={getAllCities()}/>},
    ],
    [
        {
            title: 'UserAccountBar',
            component: <CustomerAccountBar fullName="Jhon Smith" status="Basic Member"/>
        },
        {
            title: 'EmptyBasket', component:
                <NotificationTDB
                    Icon={EmptyBasketIcon}
                    title="Your Cart is empty"
                    description="Looks like you haven't made your order yet."
                >
                    <Link to={''}>
                        <PrimaryButton isWide>Shop Now</PrimaryButton>
                    </Link>
                </NotificationTDB>
        },
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

    const renderGroup = (group) => {
        return (
            <Wrapper>
                {group.map((components, index) =>
                    <Column key={index}>{renderRows(components)}</Column>)
                }
            </Wrapper>
        )
    }


    return (
        <div>
            <Header>
                <Space/>
                <PrimaryButton onClick={setWhiteBackground}>White</PrimaryButton>
                <Space/>
                <PrimaryButton onClick={setGreyBackground}>Grey</PrimaryButton>
                <Space/>
                <PrimaryButton onClick={setBlueBackground}>Blue</PrimaryButton>
                <Space/>
                <Space/>
                <Space/>
                {renderRows(colors)}
            </Header>
            {renderGroup(componentsGroup1)}
            {renderGroup(componentsGroup2)}
            {renderGroup(componentsGroup3)}
            {/*<CatalogPage/>*/}
        </div>
    )
}

export default ComponentsPage;