export const resolveTranslation = obj => {
    console.log(888, obj);
    if (!obj) {
        debugger;
    }
    return obj["ua"];
}

export const TRANSLATION = {
    COMPANY_NAME: {ua: 'DOMONO', en: 'DOMONO'},
    PAGE: {
        CHANGE_PASSWORD: {
            TOP_TITLE: {ua: "Змiнити пароль", en: "Change Password"},
            BUTTON: {
                SAVE_PASSWORD: {ua: "Зберегти!", en: "Save now!"},
                SAVE_CHANGES: {ua: "Зберегти зміни", en: "Save changes"},
            },
            LABEL: {
                OLD_PASSWORD: {en: "Old Password", ua: "Старий Пароль"},
                NEW_PASSWORD: {en: "New Password", ua: "Новий Пароль"},
                CONFIRM_PASSWORD: {en: "Confirm Password", ua: "Пiдтвердiть Пароль"},
            },
        },
        SETTINGS: {
            TOP_TITLE: {
                en: "Settings",
                ua: "Налаштування"
            },
            MENU_ROW: {
                CHANGE_PASS: {en: "Change Password", ua: "Змiнити пароль"},
                COMPANY: {ua: "Мої заклади", en: "My сompanies"},
                EDIT_PROFILE: {ua: "Редагувати профіль", en: "Edit Profile"},
                MENU: {ua: "Налаштувати меню", en: "Set up menu"},
                ABOUT_US: {ua: "Про нас", en: "About us"},
                LOCATION: {ua: "Мicце знаходження", en: "Store Location"},
                TERMS: {ua: "Умови та Положення", en: "Terms and Conditions"},
                HELP: {ua: "Допомога", en: "Help"},
                EXIT: {en: "Sing out", ua: "Вихiд"},
                CURRENCY: {ua: "Валюта", en: "Currency"},
                LANGUAGE: {en: "Language", ua: "Мова"},
                LINKED_ACCOUNTS: {en: "Linked Account", ua: "Пов'язанi Аккаути"},
            },
            GROUP_TITLE: {
                ACCOUNTS: {en: "Accounts", ua: "Остобистий кабiнет"},
                FOR_BUSINESS: {en: "For business", ua: "Для бізнесу"},
                OPTIONS: {en: "More Options", ua: "Розширенi налаштування"},
            },
            USER_PHONE_LABEL: {en: "Phone", ua: "Телефон"},

        },
        EDIT_USER_PROFILE: {
            TOP_TITLE: {ua: "Змінити профіль", en: "Edit profile"}
        },
        ABOUT_US: {
            TOP_TITLE: {ua: "Про нашу компанію", en: "About our company"}
        },
        OUR_TEAM: {
            TOP_TITLE: {ua: "Наша Команда", en: "Our Team"}
        },
        SEARCH: {
            TOP_TITLE: {ua: "Пошук", en: "Search"},
            ARROW_LABEL: {ua: "Назад", en: "Back"},
        },
        SING_IN: {
            TOP_TITLE: {
                en: "Sign in",
                ua: "Вхiд"
            },
            USER_NOTIFICATION: {
                en: "You already logged!",
                ua: "Вхiд виконаний"
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
                en: "You don’t have an account?",
                ua: "Ви зареєстрованi?"
            }
        },
        SING_UP: {
            TOP_TITLE: {
                en: "Sing up", ua: "Реєстрацiя"
            },
            CREATE_ACCOUNT: {
                en: "Create an account",
                ua: "Створити аккаунт"
            },
            LABEL: {
                USER_NAME: {en: "Name", ua: "Ім'я"},
                PHONE: {ua: "Номер Телефону", en: "Phone Number"},
                EMAIL: {en: "Emial", ua: "Електронна Пошта"},
                PASSWORD: {ua: "Пароль", en: "Password"},
                CONFIRM_PASSWORD: {en: "Confirm Password", ua: "Пiдтвердiть Пароль"},
                CHECKBOX_CONFIRM_TERMS: {
                    en: "By creating an account you agree to our Terms of Service and Privacy Policy",
                    ua: "Створенням свого аккаунту ви погоджуєтесь з нашими правилами користування та полiтикою конфiденцiйностi"
                }
            }
        },
    },
    NOTIFICATION: {
        DESCRIPTION: {
            ua: "Ця сторiнка доступна тiльки пicля пiдтвердження",
            en: "This page is available only after verification."
        },
        LOADING: {ua: "Завантаження...", en: "Loading..."},
        TITLE: {en: "Restricted access!", ua: "Обмежений доступ"}
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
    CATEGORIES: {
        BAKERY: {
            en: "Bakery",
            ua: "Випiчка"
        },
        DRINKS: {
            ua: "Безалкогольнi напої",
            en: "Beverage"
        },
        BURGERS: {
            ua: "Бургери",
            en: "Burgers"
        },
        NOODLES: {
            ua: "Локшина", en:
                "Noodles"
        },
        PIZZA: {en: "Pizza", ua: "Пiцца"},
        SANDWITCH: {ua: "Сендвичi", en: "Sandwitch"},
        SEAFOOD: {ua: "Морепродукти", en: "Seafood"},
        SALADS: {ua: "Овочевi страви", en: "Salads"},
        ALCOHOL: {ua: "Алкогольнi напої", en: "Alcohol drinks"},
        WINE_CARD: {ua: "Винна карта", en: "Wine card"},
        HOT_DRINKS: {ua: "Гарячi напої", en: "Hot drinks"},
        SPECIALITIES: {en: 'Specialities', ua: 'Фірмові страві'},
        BREAKFAST: {en: 'Breakfasts', ua: 'Сніданки'},
        COLD_APPETIZERS: {en: 'Cold appetizers', ua: 'Холодні закуски'},
        HOT_DISHES: {en: 'Hot dishes (Main Course)', ua: 'Гарячі страви'},
        MEAT_DISHES: {en: 'Meat dishes', ua: "М'ясні страви"},
        FISH_DISHES: {en: 'Fish dishes', ua: 'Рибні страви'},
        DISHES_ON_FIRE: {en: 'Dishes on fire (weight in raw form)', ua: 'Страви на вогні'},
        SAUCES: {en: 'Sauces', ua: 'Соуси'},
        SIDE_DISHES: {en: 'Side dishes', ua: 'Гарніри'},
        SOUPS: {en: 'Soups', ua: 'Супи'},
        DESERTS: {en: 'Deserts', ua: 'Десерти'},
        BANQUET_MENU: {en: 'Banquet menu', ua: 'Банкетне меню'},
        SUSHI: {en: 'Sushi', ua: 'Суші'},
        COCKTAILS: {en: 'Cocktails', ua: 'Коктейлі'},
        SHAWARMA: {en: 'Shawarma', ua: 'Шаверма'}
    },
}