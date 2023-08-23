import {LocalStorage, LOCAL_STORAGE_KEY} from "./localStorage";

export const LANGUAGE_KEYS = {
    UA: 'ua',
    EN: 'en'
}

export const truncate = (text, availableLength = 1) => {
    if (text.length < availableLength) {
        return text;
    }

    return text.substring(0, availableLength) + ' ...';
};

export const currentLanguage = LocalStorage.get(LOCAL_STORAGE_KEY.REDUX_STATE).language.siteLanguage;

export const translate = obj => {
    return obj[currentLanguage];
}

export const TRANSLATION = {
    YES: {
        en: 'Yes',
        ua: 'Так'
    },
    NO: {
        en: 'No',
        ua: 'Ні'
    },
    COMPANY_NAME: {
        ua: 'DEPOISTU',
        en: 'DEPOISTU'
    },
    INTRODUCTION: {
        BUTTON: {
            ua: 'Далі',
            en: 'Further'
        },
        INTRODUCTION_MAIN: {
            ua: 'Меню всіх закладів харчування України має бути в  одному місці. На цьому сайті.',
            en: 'The menu of all cafes and restaurants of Ukraine should be in one place. On this site.'
        },
        INTRODUCTION_HELP: {
            ua: 'Знайомтесь з меню до або під час візиту.',
            en: 'Familiarize yourself with the menu before or during your visit.',
        },
        INTRODUCTION_TELL: {
            ua: 'Ми не показуємо в пошуку міста в яких ще не зареєструвались заклади.',
            en: 'We don`t show in the search engine cities in which establishments have not yet been registered.'
        }
    },
    VALIDATION: {
        REQUIRED: {
            en: "Required",
            ua: "Обов'язковий"
        },
        MIN_LENGTH: {
            en: "Min length",
            ua: "Мінімальна довжина"
        },
        MAX_LENGTH: {
            en: "Max length",
            ua: "Максимальна довжина"
        },
        EXAMPLE: {
            en: "Example",
            ua: "Приклад"
        },
        PASSWORD_MUST_MUCH: {
            en: "Password must much",
            ua: "Паролі мають співпадати"
        },
        OLD_PASSWORD_MUST_MUCH: {
            en: "Old password must much",
            ua: "Старий пароль має співпасти"
        },
        INVALID_EMAIL: {
            en: "Invalid email",
            ua: "Невалідний мейл"
        },
        MIN_VALUE: {
            en: "Min value is ",
            ua: "Мінімальне значення "
        },
        MAX_VALUE: {
            en: "Max value is ",
            ua: "Максимальне значення "
        },
        MIN_SYMBOLS: {
            en: "Min number of characters is ",
            ua: "Мінімальна кількість символів "
        },
        MAX_SYMBOLS: {
            en: "Max number of characters is ",
            ua: "Максимальне кількість символів "
        }
    },
    WEEK_DAY: {
        MON: {
            en: "Mon",
            ua: "Пн"
        },
        TU: {
            en: "Tu",
            ua: "Вт"
        },
        WED: {
            en: "Wed",
            ua: "Ср"
        },
        TH: {
            en: "Th",
            ua: "Чт"
        },
        FRI: {
            en: "Fri",
            ua: "Пт"
        },
        SAT: {
            en: "Sat",
            ua: "Сб"
        },
        SUN: {
            en: "Sun",
            ua: "Нд"
        },
    },
    INPUT_LABEL: {
        COMPANY: {
            NAME: {
                en: "Name",
                ua: "Ім'я"
            },
            CITY: {
                en: "City",
                ua: "Місто"
            },
            STREET: {
                en: "Street",
                ua: "Вулиця"
            },
            PHONE: {
                en: "Phone",
                ua: "Телефон"
            },
            WORK_SCHEDULE: {
                en: "Work schedule",
                ua: "Графік роботи"
            },
        },
        DROPDOWN_TITLE: {
            en: 'Select ...',
            ua: 'Виберіть ...'
        },
        MENU_ITEM: {
            NAME: {
                en: "Name",
                ua: "Ім'я"
            },
            PRICE: {
                en: "Price",
                ua: "Ціна"
            },
            CATEGORY: {
                en: "Category",
                ua: "Категорія"
            },
            DESCRIPTION: {
                en: "Description",
                ua: "Опис"
            },
            COOKING_TIME: {
                en: "Cooking time (in minutes)",
                ua: "Час приготування (в хвилинах)"
            },
            MEAL_SIZE: {
                en: "Size",
                ua: "Розмір"
            }
        },
        CUSTOMER: {
            NAME: {
                en: "Name",
                ua: "Ім'я"
            },
            PHONE: {
                ua: "Номер Телефону",
                en: "Phone Number"
            },
            EMAIL: {
                ua: "Електронна Пошта",
                en: "Email"
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
    MEASUREMENTS: {
        PRICE: {
            ua: 'грн',
            en: 'UAH'
        },
        WEIGHT: {
            ua: "г",
            en: 'g'
        },
        LIQUID: {
            ua: "мл",
            en: 'ml'
        },
        PREPARING: {
            ua: "хв",
            en: 'min'
        },
    },
    PAGE_VIEW: {
        COMPANY: {
            WEEKEND: {
                ua: "Вихідний",
                en: 'Weekend'
            },
            ADD_IMAGE: {
                ua: "Додати фото",
                en: 'Add photo'
            },
        },
        MENU_ITEM: {
            BUTTON: {
                ADD_IMAGE: {
                    ua: "Додати фото",
                    en: 'Add photo'
                },
                CHANGE_IMAGE: {
                    ua: "Змінити фото",
                    en: 'Change photo'
                }
            }
        }
    },
    PAGE: {
        COMPANY_DETAILS: {
            TOP_TITLE: {
                ua: "Деталі компанії",
                en: 'Company details'
            },
            MENU_TITLE: {
                ua: "МЕНЮ",
                en: 'MENU'
            },
            MENU_PROBLEM: {
                ua: 'Меню компанії відсутнє',
                en: 'There is no menu in company'
            }
        },
        CUSTOMER_COMPANIES: {
            TOP_TITLE: {
                ua: "Ваші компанії",
                en: 'Your companies'
            },
            WARNING: {
                ua: "Не додавайте компанії заради розваги. Інакше будемо змушені заблокувати ваш аккаунт. Не витрачайте ваш і наш час дарма.",
                en: "Don't add companies for fun as we will block your account.  Don't waste your time and ours."
            },
            BUTTON: {
                COMPANY: {
                    en: 'Company',
                    ua: "Компанія"
                },
                MENU: {
                    en: 'Menu',
                    ua: "Меню"
                },
                ADD_COMPANY: {
                    en: 'Add company',
                    ua: "Додати компанію"
                }
            }
        },
        ADD_COMPANY: {
            TOP_TITLE: {
                en: 'Add company',
                ua: "Додати компанію"
            },
            BUTTON: {
                ADD_COMPANY: {
                    en: 'Add company',
                    ua: "Додати компанію"
                }
            }
        },
        EDIT_MENU: {
            TOP_TITLE: {
                en: 'Edit menu',
                ua: "Редагувати меню"
            },
            BUTTON: {
                ADD_MENU_ITEM: {
                    en: 'Add menu item',
                    ua: "Додати пункт меню",
                }
            }
        },
        EDIT_MENU_ITEM: {
            TOP_TITLE: {
                en: 'Edit menu item',
                ua: "Редагувати пункт меню",
            },
            BUTTON: {
                DELETE_MENU_ITEM: {
                    en: 'Delete menu item',
                    ua: "Видалити пункт меню",
                },
                EDIT_MENU_ITEM: {
                    en: 'Save changes',
                    ua: "Зберегти зміни",
                }
            },
        },
        EDIT_COMPANY: {
            TOP_TITLE: {
                ua: "Редагувати компанію",
                en: 'Edit company'
            },
            BUTTON: {
                EDIT_COMPANY: {
                    en: 'Save',
                    ua: "Зберегти"
                },
                DELETE_COMPANY: {
                    en: 'Delete company',
                    ua: "Видалити компанію"
                }
            },
            NOTIFICATION: {
                COMPANY_WAS_DELETED: {
                    en: 'Company was deleted.',
                    ua: "Компанію видалено."
                },
                OPEN_MY_COMPANIES_PAGE: {
                    en: 'Open my companies page.',
                    ua: "Відкрийте сторінку моїх компаній."
                },
                NO_COMPANY_BY_THIS_ID: {
                    en: 'No company by this id',
                    ua: "Немає компанії з цим ідентифікатором"
                },

            }
        },
        ADD_MENU_ITEM: {
            TOP_TITLE: {
                ua: "Додати позицію меню",
                en: 'Add menu item'
            },
            BUTTON: {
                ADD_MENU_ITEM: {
                    en: 'Save',
                    ua: "Зберегти",
                }
            },
        },
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
            BUTTONS: {
                SING_IN: {
                    ua: "Вхiд",
                    en: "Sign in"
                },
                SING_UP: {
                    ua: "Реєстрація",
                    en: "Sign up"
                },
                VERIFICATION: {
                    ua: "Перевірити",
                    en: "Verify"
                }
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
            LABEL: {
                CURRENT_LANGUAGE: {
                    ua: "Українська",
                    en: "English"
                }
            },
            NOTIFICATION: {
                DESCRIPTION: {
                    ua: "Ця сторiнка доступна тiльки пicля пiдтвердження",
                    en: "This page is available only after verification"
                },
                VERIFICATION_DESCRIPTION: {
                    ua: "Перевірте пошту. Ми надіслали вам лист з кодом. Введіть його в поле нижче.",
                    en: "Check your email. We already sent you letter with verification code. Enter him in the row below."
                },
                LOADING: {
                    ua: "Завантаження...",
                    en: "Loading..."
                },
                TITLE: {
                    ua: "Обмежений доступ!",
                    en: "Restricted access!"
                },
                VERIFICATION_TITLE: {
                    ua: "Підтвердіть емаїл",
                    en: "Verify email"
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
        FOOTER: {
            BACK_TO_TOP_BUTTON:{
                ua: 'Догори',
                en: 'Back to top'
            }
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
        FORGOT_PASSWORD: {
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
            }
        },
    },
    COMPONENTS: {
        BUTTON: {
            LOADING: {
                en: 'Loading',
                ua: 'Завантажується'
            },
        },
        COMPANY: {
            STATUS_OPEN: {
                ua: "Відкрито",
                en: "Open"
            },
            STATUS_CLOSE: {
                ua: "Закрито",
                en: "Close"
            },
            TILL: {
                ua: "до",
                en: "till"
            },
            SCHEDULE_BUTTON: {
                ua: "Показати графік",
                en: "Show schedule"
            }
        },
        MENU_ITEM: {
            BUTTON: {
                EDIT_MENU_ITEM: {
                    en: "Edit",
                    ua: "Редагувати"
                },
                HIDDEN: {
                    en: "HIDDEN",
                    ua: "ПРИХОВАНО"
                },
            },
        },
        POPUP: {
            CITY: {
                INPUT: {
                    en: " region",
                    ua: " область"
                }
            },
            ARE_YOU_SURE: {
                en: "Are you sure you want to delete the company and menu? ",
                ua: "Ви впевнені, що хочете видалити компанію та меню?"
            }
        }
    },
    NOTIFICATION: {
        LOADING: {
            ua: "Завантаження ...",
            en: "Loading ..."
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
            ua: "Море продукти",
            en: "Seafood"
        },
        SALADS: {
            ua: "Овочевi страви",
            en: "Salads"
        },
        ALCOHOL: {
            ua: "Алкоголь",
            en: "Alcohol"
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
            en: 'Hot dishes'
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
            ua: 'Монгал',
            en: 'Dishes on fire'
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