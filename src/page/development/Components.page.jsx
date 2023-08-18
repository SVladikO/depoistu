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
    FetchButton,
    ContentContainer,
    Notification,
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
    CloseButton,
    MenuItemDetails,
    Dropdown, PrimaryButton
} from "../../components";

import {ReactComponent as QRCodeIcon} from "../../assets/icons/qr_code.svg";
import {ReactComponent as EmptyBasketIcon} from "../../assets/icons/empty_basket.svg";
import {ReactComponent as GoogleIcon} from '../../assets/icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../assets/icons/mail.svg';
import {ReactComponent as LockIcon} from '../../assets/icons/lock.svg';
import {ReactComponent as LogOutIcon} from "../../assets/icons/logout.svg";
import {ReactComponent as SandwichIcon} from '../../assets/icons/sandwich.svg';
import {ReactComponent as LanguageIcon} from "../../assets/icons/language.svg";

import {COLOR} from "../../utils/theme";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import ImageContent from "../../components/Popup/content/image/ImageContent";
import IntroContent from "../../components/Popup/content/info/Info";
import CityContent from "../../components/Popup/content/city/CityContent"
import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";
import Checkbox from "../../components/Checkbox/Checkbox";
import {EditBar, QRCodeButton} from "../customer-companies/CustomerCompanies.style";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {Link} from "react-router-dom";
import {getOnlyCityIds} from "../../utils/cities";

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
        {title: 'Price', component: <Price>50</Price>},
    ],
    [
        {title: 'PrimaryButton', component: <PrimaryButton><GoogleIcon/>Google</PrimaryButton>},
        {title: 'PrimaryButton', component: <PrimaryButton>Sing in</PrimaryButton>},
        {title: 'PrimaryButton isWide', component: <PrimaryButton isWide>Sing in</PrimaryButton>},
        {title: 'FetchButton isWide', component: <PrimaryButton isWide>Sing in</PrimaryButton>},
        {title: 'FetchButton isLoading isWide', component: <FetchButton isLoading isWide>Loading</FetchButton>},
        {title: 'SecondaryButton', component: <SecondaryButton><FacebookIcon/>facebook</SecondaryButton>},
        {title: 'SecondaryButton', component: <SecondaryButton>Cancel</SecondaryButton>},
        {title: 'SecondaryButton isWide', component: <SecondaryButton isWide>Cancel</SecondaryButton>},
        {title: 'ThirdButton', component: <ThirdButton><FacebookIcon/>Cancel</ThirdButton>},
        {title: 'ThirdButton isWide', component: <ThirdButton isWide><FacebookIcon/>Cancel</ThirdButton>},
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
            title: 'MenuItemDetails',
            component:
                <MenuItemDetails
                    item={{
                        ID: 10,
                        NAME: '4 Cheese',
                        CATEGORY_ID: 1,
                        DESCRIPTION: 'spicy , tomato, sauce, chili, mozzarella, spicy , tomato, sauce, chili, mozzarella',
                        IMAGE_URL: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                        COOKING_TIME: 15,
                        PRICE: 170,
                        SIZE: 150,
                    }}
                />
        },
        {
            title: 'MenuItem',
            component:
                <MenuItem
                    item={{
                        ID: 10,
                        NAME: '4 Cheese',
                        CATEGORY_ID: 1,
                        DESCRIPTION: 'spicy , tomato, sauce, chili, mozzarella, spicy , tomato, sauce, chili, mozzarella',
                        IMAGE_URL: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                        COOKING_TIME: 15,
                        PRICE: 170,
                        SIZE: 150,
                    }}
                />
        },
        {
            title: 'MenuItem',
            component:
                <MenuItem withEditIcon
                          item={{
                              ID: 10,
                              NAME: '4 Cheese',
                              CATEGORY_ID: 5,
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
                    PHONE: '38 097 066 8820'
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
                    <FetchButton><EditIcon/>Company</FetchButton>
                    <QRCodeButton><QRCodeIcon/></QRCodeButton>
                    <FetchButton><EditIcon/>Menu</FetchButton>
                </EditBar>
            </Company>
        },
    ],
    [
        {title: 'Notification.Loading', component: <Notification.Loading/>},
        {title: 'Notification.Error', component: <Notification.Error message={'Broken content.'}/>},
        {title: 'Notification.Success', component: <Notification.Success message={'Company was created.'}/>},
        {title: 'Dropdown Unselected', component: <UnselectedDropdown />},
        {title: 'Dropdown WithSelected', component:<SelectedDropdown />},
        {title: 'Dropdown WithError', component: <WithErrorDropdown />},
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
            title: 'IntroContent.Info',
            component: <IntroContent.Info>Some text Some text Some text Some text Some text</IntroContent.Info>
        },
        {
            title: 'IntroContent.InfoText',
            component: <IntroContent.InfoText>Some text Some text Some text Some text Some text</IntroContent.InfoText>
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
                        <FetchButton isWide>Shop Now</FetchButton>
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
                <FetchButton onClick={setWhiteBackground}>White</FetchButton>
                <Space/>
                <FetchButton onClick={setGreyBackground}>Grey</FetchButton>
                <Space/>
                <FetchButton onClick={setBlueBackground}>Blue</FetchButton>
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