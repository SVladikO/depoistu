import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Marker, Popup} from "react-leaflet";

import {Wrapper, Column, Component, Row, ColorCircle, Header, Space, MapContainer} from './Components.style';

import
{
    AccountSettings,
    Input,
    CityInput,
    Price,
    HistoryTabBar,
    Rating,
    Discount,
    SubCategoryItem,
    SettingMenuRow,
    ToggleCheckbox,
    CheckBoxWithLabel,
    SecondaryButton,
    ContentContainer,
    NotificationLoading,
    NavigationHeader,
    FromToTime,
    ThirdButton,
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
    MenuItemDescription,
    Dropdown,
    PrimaryButton,
    NotificationFactory,
    NOTIFICATION_STATUS,
    Footer
} from "components";

import {ReactComponent as QRCodeIcon} from "assets/icons/qr_code.svg";
import {ReactComponent as EmptyBasketIcon} from "assets/icons/empty_basket.svg";
import {ReactComponent as MailIcon} from 'assets/icons/mail.svg';
import {ReactComponent as EditIcon} from "assets/icons/edit.svg";
import {ReactComponent as LockIcon} from 'assets/icons/lock.svg';
import {ReactComponent as LogOutIcon} from "assets/icons/logout.svg";
import {ReactComponent as SandwichIcon} from 'assets/icons/sandwich.svg';
import {ReactComponent as LanguageIcon} from "assets/icons/language.svg";

import Map from "components/Map/Map";
import Checkbox from "components/Checkbox/Checkbox";
import IntroContent from "components/Popup/info/Info";
import CityContent from "components/Popup/city/CityContent"
import {markerIcon} from "components/Map/customUI/markerIcon/markerIcon";
import {ReactComponent as LocationIcon} from "assets/icons/location.svg";
import {EditBar, QRCodeButton} from "page/customer-companies/CustomerCompanies.style";

import {COLOR} from "utils/theme";
import {getOnlyCityIds} from "utils/cities";

const colors = Object
    .keys(COLOR)
    .map(key => ({title: key, component: <ColorCircle key={key} bg={COLOR[key]}/>, value: COLOR[key], width: '85px'})
    )

const mockMenuItem = {
    id: 10,
    name: '4 Cheese',
    categoryId: 1,
    description: 'spicy , tomato, sauce, chilies, mozzare, lla, spicy, ice, tomato, sauce, chili, mozzarella, sauce, chili',
    photos: ['https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png'],
    size_1: 100,
    price_1: 120,
    size_2: 200,
    price_2: 220,
    size_3: 300,
    price_3: 300,
    likes: 5,

}

const [UnselectedDropdown, SelectedDropdown, WithErrorDropdown] = (() => {
    const options = [
        {value: 1, title: 'Burger1'},
        {value: 2, title: 'Burger2'},
        {value: 3, title: 'Burger3'},
        {value: 4, title: 'Burger4'},
        {value: 5, title: 'Burger5'},
        {value: 6, title: 'Burger6'},
        {value: 7, title: 'Burger7'},
        {value: 8, title: 'Burger8'},
        {value: 9, title: 'Burger9'},
        {value: 10, title: 'Burger10'},
        {value: 11, title: 'Burger11'},
        {value: 12, title: 'Burger12'},
    ];

    return [
        () => {
            const [selectedOption, setSelectedOption] = useState();
            return (
                <Dropdown
                    selectedOption={selectedOption}
                    options={options}
                    onSelect={setSelectedOption}
                    label={'Label'}
                    isRequired
                />
            )
        },
        () => {
            const [selectedOption, setSelectedOption] = useState(options[0]);
            return (
                <Dropdown
                    selectedOption={selectedOption}
                    options={options}
                    onSelect={setSelectedOption}
                />
            )
        },
        () => {
            const [selectedOption, setSelectedOption] = useState(options[0]);
            return (
                <Dropdown
                    selectedOption={selectedOption}
                    options={options}
                    onSelect={setSelectedOption}
                    errorMessage={'Some error'}
                    isTouched
                />
            )
        }
    ]
})();

const componentsGroup0 = [
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
        {title: 'Price', component: <Price>50</Price>},
    ],
    [
        {
            title: 'CategoryItem',
            component: <SubCategoryItem category={{icon: LanguageIcon, title: 'Language'}}
                                        title="Sandwich"><SandwichIcon/></SubCategoryItem>
        },
    ],
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
    ],
];

const componentsGroup1 = [
    [
        {title: 'PrimaryButton', component: <PrimaryButton>Primary</PrimaryButton>},
        {title: 'PrimaryButton isDisabled', component: <PrimaryButton isDisabled>Primary</PrimaryButton>},
        {title: 'PrimaryButton isLoading', component: <PrimaryButton isLoading>Primary</PrimaryButton>},
        {title: 'PrimaryButton isWide', component: <PrimaryButton isWide>Primary wide</PrimaryButton>},
        {title: 'SecondaryButton', component: <SecondaryButton>Secondary</SecondaryButton>},
        {title: 'SecondaryButton isDisabled', component: <SecondaryButton isDisabled>Secondary</SecondaryButton>},
        {title: 'SecondaryButton isLoading', component: <SecondaryButton isLoading={true}>Secondary</SecondaryButton>},
        {title: 'SecondaryButton isWide', component: <SecondaryButton isWide>Secondary wide</SecondaryButton>},
        {title: 'ThirdButton', component: <ThirdButton>Third</ThirdButton>},
        {title: 'ThirdButton isWide', component: <ThirdButton isWide>Third</ThirdButton>},
    ],
    [
        {title: 'Label', component: <Label>Change Password</Label>},
        {
            title: 'Input', component: <Input/>
        },
        {
            title: 'Input {labelName}', component: <Input labelName={'Label'}/>
        },
        {
            title: 'Input {labelName, withCleaner, isRequired} ',
            component: <Input labelName={'Label'} withCleaner value={111} isRequired/>
        },
        {
            title: 'Input {labelName, withSwitcher}',
            component: <Input labelName={'Label name'} value={1111} withSwitcher/>
        },
        {
            title: 'Input  {labelName, Icon, isRequired}',
            component: <Input Icon={MailIcon} isRequired value="jodode@mail.com" withCleaner labelName={'Label name'}/>
        },
        {
            title: 'Input  {labelName, errorMessage, isRequired}',
            component: <Input isTouched isRequired errorMessage={'Max length 12.'} value="+380970663322"
                              labelName={'Label'}/>
        },
        {
            title: 'Input  {labelName, Icon, errorMessage, isRequired}',
            component: <Input isTouched Icon={MailIcon} isRequired errorMessage={'Max length 12.'} value="+380970663322"
                              labelName={'Label'}/>
        },
    ],
    [
        {
            title: 'CityInput',
            component: <CityInput withIcon Icon={LocationIcon} value={'Vinnica'}/>
        },
        {
            title: 'CityInput {labelName}',
            component: <CityInput withIcon labelName={'Label'} Icon={LocationIcon} value={'Vinnica'}/>
        },
        {
            title: 'FromToTime', component: <FromToTime prefix='mon' dayName='Mon' values={{}}/>
        },
        {
            title: 'FromToTime',
            component: <FromToTime prefix='mon' dayName='Mon' values={{monIsChecked: true}}/>
        },
        {
            title: 'Textarea',
            component: <Textarea labelName={'Textarea'} isRequired withCleaner placeholder={'Write here'}/>
        },
        {
            title: 'Textarea withCleaner',
            component: <Textarea labelName={'Textarea'} withCleaner value={222} placeholder={'Write here'}/>
        },
    ]
];
const componentsGroup2 = [
    [
        {
            title: 'MenuItemDetails without description',
            component:
                <MenuItemDescription
                    item={{...mockMenuItem, description: ''}}
                    isVisible
                />
        }, {
        title: 'MenuItemDetails with description',
        component:
            <MenuItemDescription
                item={mockMenuItem}
                isVisible
            />
    },
        {
            title: 'MenuItemDetails with image',
            component:
                <MenuItemDescription
                    item={{...mockMenuItem, description: ''}}
                    isWithImage
                    isVisible
                />
        }, {
        title: 'MenuItemDetails with image & description',
        component:
            <MenuItemDescription
                item={mockMenuItem}
                isWithImage
                isVisible
            />
    }, {
        title: 'MenuItemDetails with image & description & "new" flag',
        component:
            <MenuItemDescription
                item={mockMenuItem}
                isWithImage
                isNewItemFlag
                isVisible
            />
    },
        {
            title: 'MenuItem editing',
            component:
                <MenuItem
                    item={mockMenuItem}
                    isEditMode
                    isWithImage
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
                    name: 'Domono',
                    photos: ['https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg', 'https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg'],
                    cityId: '204',
                    schedule: ', , , , , 11:00-22:00, 10:00-19:00',
                    street: 'Davidusk 15.',
                }}
            />
        },
        {
            title: 'Company',
            component: <Company
                withMoreInfo
                company={{
                    photos: ['https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg', 'https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg'],
                    name: 'Domono',
                    cityId: '204',
                    schedule: '01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-21:00, 01:00-22:00, 01:00-22:00',
                    street: 'Davidusk 15.',
                    phone1: '38 097 066 8820'
                }}
            />
        },
        {
            title: 'Company',
            component: <Company
                company={{
                    photos: ['https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg', 'https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg'],
                    name: 'Domono',
                    cityId: '204',
                    schedule: ',,,,,,',
                    street: 'Davidusk 15.',
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
        {
            title: 'StatusNotification info',
            component: <NotificationFactory type={NOTIFICATION_STATUS.INFO}>No Internet
                Connection.</NotificationFactory>
        },
        {
            title: 'StatusNotification error',
            component: <NotificationFactory type={NOTIFICATION_STATUS.ERROR}>No Internet
                Connection.</NotificationFactory>
        },
        {
            title: 'StatusNotification success',
            component: <NotificationFactory type={NOTIFICATION_STATUS.SUCCESS}>Order placed. Order
                placed.</NotificationFactory>
        },
        {
            title: 'StatusNotification warning',
            component: <NotificationFactory type={NOTIFICATION_STATUS.WARNING}>No Internet
                Connection.</NotificationFactory>
        },
        {title: 'NotificationLoading', component: <NotificationLoading/>},
        {title: 'Dropdown Unselected', component: <UnselectedDropdown/>},
        {title: 'Dropdown WithSelected', component: <SelectedDropdown/>},
        {title: 'Dropdown WithError', component: <WithErrorDropdown/>},
    ],
];
const componentsGroup3 = [

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
            title: 'IntroContent.Info',
            component: <IntroContent.Info>Some text Some text Some text Some text Some text</IntroContent.Info>
        },
        {title: 'CityPopupContent', component: <CityContent availableCityIds={getOnlyCityIds()}/>},
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
        {title: 'Footer', component: <Footer/>},
    ]
]

const componentsGroup4 = [[
    {
        title: 'Map',
        component: (
            <MapContainer>
                <Map>
                    <Marker icon={markerIcon} position={[51.505, -0.09]}>
                        <Popup>
                            Check template of popup.<br /> Example.
                        </Popup>
                    </Marker>
                </Map>
            </MapContainer>)
    }
]]

// document.body.style.backgroundColor = '#d8d8d8'

function ComponentsPage() {
    const setWhiteBackground = useCallback(() => document.body.style.background = '#ffffff', []);
    const setGreyBackground = useCallback(() => document.body.style.background = '#d8d8d8', []);
    const setBlueBackground = useCallback(() => document.body.style.background = '#001993', []);

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

    useEffect(() => {
        document.body.style.background = '#ffffff'
    }, [])


    return (
        <>
            <Header>
                {renderRows(colors)}
            </Header>
            <Header>
                <PrimaryButton onClick={setWhiteBackground}>White</PrimaryButton>
                <Space/>
                <PrimaryButton onClick={setGreyBackground}>Grey</PrimaryButton>
                <Space/>
                <PrimaryButton onClick={setBlueBackground}>Blue</PrimaryButton>
            </Header>
            <RowSplitter height="140px"/>
            {renderGroup(componentsGroup0)}
            {renderGroup(componentsGroup1)}
            {renderGroup(componentsGroup2)}
            {renderGroup(componentsGroup3)}
            {renderGroup(componentsGroup4)}
            {/*<CatalogPage/>*/}
        </>
    )
}

export default ComponentsPage;