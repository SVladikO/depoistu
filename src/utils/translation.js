import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";

export const translate = obj => {
    const currentLanguage = LocalStorage.get(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE) || DEFAULT_LANGUAGE;

    return obj[currentLanguage];
}

export const LANGUAGE_KEYS = {
    UA: 'ua',
    EN: 'en'
}

export const DEFAULT_LANGUAGE = LANGUAGE_KEYS.UA;

export const TRANSLATION = {
    COMPANY_NAME: {
        ua: 'ДОМОНО',
        en: 'DOMONO'
    },
    INTRODUCTION: {
        ua: 'Меню всіх кафе та ресторанів України має бути в одному місці.Знайдіть заклад своєї мрії та допоможи іншим. Розкажи адміністраторам своїх улюблених закладів про наш сайт.',
        en: 'The menu of all cafes and restaurants of Ukraine should be in one place. Find the bookmark of your dreams and help others. Tell the administrators of your favorite bookmarks about our site.'
    },
    PAGE: {
        CHANGE_PASSWORD: {
            TOP_TITLE: {
                ua: "Змiнити пароль",
                en: "Change Password"
            },
            BUTTON: {
                SAVE_PASSWORD: {
                    ua: "Зберегти!",
                    en: "Save now!"
                },
                SAVE_CHANGES: {
                    ua: "Зберегти зміни",
                    en: "Save changes"
                },
            },
            LABEL: {
                OLD_PASSWORD: {
                    ua: "Старий Пароль",
                    en: "Old Password"
                },
                NEW_PASSWORD: {
                    ua: "Новий Пароль",
                    en: "New Password"
                },
                CONFIRM_PASSWORD: {
                    ua: "Пiдтвердiть Пароль",
                    en: "Confirm Password"
                },
            },
        },
        SETTINGS: {
            TOP_TITLE: {
                ua: "Налаштування",
                en: "Settings"
            },
            MENU_ROW: {
                CHANGE_PASS: {
                    ua: "Змiнити пароль",
                    en: "Change Password"
                },
                COMPANY: {
                    en: "My сompanies",
                    ua: "Мої заклади"
                },
                EDIT_PROFILE: {
                    en: "Edit Profile",
                    ua: "Редагувати профіль"
                },
                MENU: {
                    ua: "Налаштувати меню",
                    en: "Set up menu"
                },
                ABOUT_US: {
                    ua: "Про нас",
                    en: "About us"
                },
                LOCATION: {
                    ua: "Мicце знаходження",
                    en: "Store Location"
                },
                TERMS: {
                    ua: "Умови та Положення",
                    en: "Terms and Conditions"
                },
                HELP: {
                    ua: "Допомога",
                    en: "Help"
                },
                EXIT: {
                    ua: "Вихiд",
                    en: "Sing out"
                },
                CURRENCY: {
                    ua: "Валюта",
                    en: "Currency"
                },
                LANGUAGE: {
                    ua: "Мова",
                    en: "Language"
                },
                LINKED_ACCOUNTS: {
                    ua: "Пов'язанi Аккаути",
                    en: "Linked Accounts"
                },
            },
            NOTIFICATION: {
                DESCRIPTION: {
                    ua: "Ця сторiнка доступна тiльки пicля пiдтвердження",
                    en: "This page is available only after verification"
                },
                LOADING: {
                    ua: "Завантаження...",
                    en: "Loading..."
                },
                TITLE: {
                    ua: "Обмежений доступ!",
                    en: "Restricted access!"
                }
            },
            GROUP_TITLE: {
                ACCOUNTS: {
                    ua: "Остобистий кабiнет",
                    en: "My account"
                },
                FOR_BUSINESS: {
                    ua: "Для бізнесу",
                    en: "For business"
                },
                OPTIONS: {
                    ua: "Розширенi налаштування",
                    en: "More Options"
                },
            },
            USER_PHONE_LABEL: {
                ua: "Телефон",
                en: "Phone"
            },

        },
        EDIT_USER_PROFILE: {
            TOP_TITLE: {
                ua: "Змінити профіль",
                en: "Edit profile"
            }
        },
        ABOUT_US: {
            TOP_TITLE: {
                ua: "Про нашу компанію",
                en: "About our company"
            }
        },
        OUR_TEAM: {
            TOP_TITLE: {
                ua: "Наша Команда",
                en: "Our Team"
            }
        },
        SEARCH: {
            TOP_TITLE: {
                ua: "Пошук",
                en: "Search"
            },
            ARROW_LABEL: {
                ua: "Назад",
                en: "Back"
            },
            INPUT_PLACEHOLDER: {
                ua: "Виберіть місто",
                en: "Choose the city"
            },
        },
        SIGN_IN: {
            TOP_TITLE: {
                ua: "Вхiд",
                en: "Sign in"
            },
            USER_NOTIFICATION: {
                ua: "Вхiд виконаний",
                en: "You already logged!"
            },
            FORGOT_PASSWORD: {
                ua: "Забули пароль?",
                en: "Forgot password?"
            },
            SING_UP_LINK: {
                ua: "Зареєструватись",
                en: "Sing up"
            },
            ACCOUNT_CONFIRMATION: {
                ua: "Ви зареєстрованi?",
                en: "You don’t have an account?"
            }
        },
        FORGOT_PASSWORD:  {
            TOP_TITLE: {
                ua: "Забули пароль",
                en: "Forgot password"
            },
            SUBMIT_BUTTON: {
                ua: 'Відправити',
                en: 'Send'
            },
            LINK_TO_SIGN_IN_PAGE: {
                ua: 'Перейти на сторінку входу',
                en: 'Go to sign in page'
            }
        },
        SING_UP: {
            TOP_TITLE: {
                ua: "Реєстрацiя",
                en: "Sing up"
            },
            LABEL: {
                USER_NAME: {
                    en: "Name",
                    ua: "Ім'я"
                },
                PHONE: {
                    ua: "Номер Телефону",
                    en: "Phone Number"
                },
                EMAIL: {
                    ua: "Електронна Пошта",
                    en: "Emial"
                },
                PASSWORD: {
                    ua: "Пароль",
                    en: "Password"
                },
                CONFIRM_PASSWORD: {
                    ua: "Пiдтвердiть Пароль",
                    en: "Confirm Password"
                },
                CHECKBOX_CONFIRM_TERMS: {
                    ua: "Створенням свого аккаунту ви погоджуєтесь з нашими правилами користування та полiтикою конфiденцiйностi",
                    en: "By creating an account you agree to our Terms of Service and Privacy Policy"
                }
            }
        },
    },
    NOTIFICATION: {
        LOADING: {
            ua: "Завантаження...",
            en: "Loading..."
        },
    },
    BOTTOM_MENU: {
        SEARCH_TAB: {
            ua: "Пошук",
            en: "Search"
        },
        ACCOUNT_TAB: {
            ua: "Кабинет",
            en: "Account"
        },
    },
    TOP_CATEGORIES: {
        KITCHEN: {
            ua: "КУХНЯ",
            en: "KITCHEN",
        },
        DESSERTS: {
            ua: "ДЕСЕРТИ",
            en: "DESSERTS",
        },
        BAR: {
            ua: "БАР",
            en: "BAR",
        },
    },
    SUB_CATEGORIES: {
        BAKERY: {
            ua: "Випiчка",
            en: "Bakery"
        },
        DRINKS: {
            ua: "Напої",
            en: "Drinks"
        },
        BURGERS: {
            ua: "Бургери",
            en: "Burgers"
        },
        ROLLS: {
            ua: "Роли",
            en: "Rolls"
        },
        SUSHI_SETS: {
            ua: "Суші сети",
            en: "Sushi sets"
        },
        BUSINESS_LUNCH: {
            ua: "Бізнес ланч",
            en: "Business lunch"
        },
        ADDICTIVES: {
            ua: "Додатки",
            en: "Additives"
        },
        NOODLES: {
            ua: "Локшина",
            en: "Noodles"
        },
        PIZZA: {
            ua: "Пiцца",
            en: "Pizza"
        },
        SANDWITCH: {
            ua: "Сендвичi",
            en: "Sandwitch"
        },
        SEAFOOD: {
            ua: "Морепродукти",
            en: "Seafood"
        },
        SALADS: {
            ua: "Овочевi страви",
            en: "Salads"
        },
        ALCOHOL: {
            ua: "Алкогольнi напої",
            en: "Alcohol drinks"
        },
        WINE_CARD: {
            ua: "Винна карта",
            en: "Wine card"
        },
        HOT_DRINKS: {
            ua: "Гарячi напої",
            en: "Hot drinks"
        },
        SPECIALITIES: {
            ua: 'Фірмові страві',
            en: 'Specialities'
        },
        BREAKFAST: {
            en: 'Breakfasts',
            ua: 'Сніданки'
        },
        COLD_APPETIZERS: {
            ua: 'Холодні закуски',
            en: 'Cold appetizers'
        },
        HOT_DISHES: {
            ua: 'Гарячі страви',
            en: 'Hot dishes (Main Course)'
        },
        MEAT_DISHES: {
            ua: "М'ясні страви",
            en: 'Meat dishes'
        },
        FISH_DISHES: {
            ua: 'Рибні страви',
            en: 'Fish dishes'
        },
        DISHES_ON_FIRE: {
            ua: 'Страви на вогні',
            en: 'Dishes on fire (weight in raw form)'
        },
        SAUCES: {
            ua: 'Соуси',
            en: 'Sauces'
        },
        SIDE_DISHES: {
            ua: 'Гарніри',
            en: 'Side dishes'
        },
        SOUPS: {
            ua: 'Супи',
            en: 'Soups'
        },
        DESSERTS: {
            ua: 'Десерти',
            en: 'Desserts'
        },
        BANQUET_MENU: {
            ua: 'Банкетне меню',
            en: 'Banquet menu'
        },
        SUSHI: {
            ua: 'Суші',
            en: 'Sushi'
        },
        COCKTAILS: {
            ua: 'Коктейлі',
            en: 'Cocktails'
        },
        SHAWARMA: {
            ua: 'Шаверма',
            en: 'Shawarma'
        }
    },
}