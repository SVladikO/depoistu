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
    let language = currentLanguage;

    if (!currentLanguage) {
        language = 'en'
    }

    return obj[language];
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
    SEE_MORE: {
        ua: 'більше',
        en: 'see more'
    },
    GO_TO_A_SEARCH_PAGE: {
        ua: 'Перейти на сторінку пошуку',
        en: 'Go to a search page'
    },
    INTRODUCTION: {
        BUTTON: {
            ua: 'Далі',
            en: 'Continue'
        },
        TEXT: {
            ua: [
                'Меню всіх закладів харчування України має бути в  одному місці. На цьому сайті.',
                'Знайомтесь з меню до або під час візиту.',
                'Ми не показуємо в пошуку міста в яких ще не зареєструвались заклади.',
                'Вартість в гривні.'
            ],
            en: [
                'The menu of all cafes and restaurants of Ukraine should be in one place. On this site.',
                'Familiarize yourself with the menu before or during your visit.',
                'We don`t show in the search engine cities in which establishments have not yet been registered.',
                'All price in uah.'
            ]
        },
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
            en: "Passwords must match",
            ua: "Паролі мають співпадати"
        },
        OLD_PASSWORD_MUST_MUCH: {
            en: "Old password must match",
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
            },
            PRICE: {
                en: "Price",
                ua: "Ціна"
            },
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
                ua: "Деталі закладу",
                en: 'Company details'
            },
            MENU_PROBLEM: {
                ua: 'Меню закладу відсутнє',
                en: 'There is no menu in company'
            },
            COMPANY_DOESNT_EXIST: {
                ua: 'Заклад не знайдено',
                en: "Company wasn't found"
            }
        },
        CUSTOMER_COMPANIES: {
            TOP_TITLE: {
                ua: "Ваші заклади",
                en: 'Your companies'
            },
            WARNING: {
                ua: "Не додавайте заклади заради розваги. Інакше будемо змушені заблокувати ваш аккаунт. Не витрачайте ваш і наш час дарма. Дякуєм.",
                en: "Don't add companies for fun as we will block your account.  Don't waste your time and ours. Thanks."
            },
            BUTTON: {
                COMPANY: {
                    en: 'Company',
                    ua: "Заклад"
                },
                MENU: {
                    en: 'Menu',
                    ua: "Меню"
                },
                ADD_COMPANY: {
                    en: 'Add company',
                    ua: "Додати заклад"
                }
            }
        },
        ADD_COMPANY: {
            TOP_TITLE: {
                en: 'Add company',
                ua: "Додати заклад"
            },
            BUTTON: {
                ADD_COMPANY: {
                    en: 'Add company',
                    ua: "Додати заклад"
                },
                ADD_MENU: {
                    en: 'Add menu for this company',
                    ua: "Додати меню"
                },

            }
        },
        EDIT_COMPANY: {
            TOP_TITLE: {
                ua: "Редагувати заклад",
                en: 'Edit company'
            },
            BUTTON: {
                EDIT_COMPANY: {
                    en: 'Save',
                    ua: "Зберегти"
                },
                DELETE_COMPANY: {
                    en: 'Delete company',
                    ua: "Видалити заклад"
                },
                OPEN_COMPANIES_PAGE: {
                    en: 'Open my companies page',
                    ua: "Відкрити мої компанії"
                }
            },
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
        ADD_MENU_ITEM: {
            TOP_TITLE: {
                ua: "Додати позицію меню",
                en: 'Add menu item'
            },
            BUTTON: {
                ADD_MENU_ITEM: {
                    en: 'Save',
                    ua: "Зберегти",
                },
                UPDATE_MENU_ITEM: {
                    en: 'Update',
                    ua: "Оновити",
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
                VERSION: {
                    ua: 'Версія',
                    en: 'Version'
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
                DO_YOU_LIKE: {
                    ua: "Вам подобається цей сайт?",
                    en: "Do you like this website?"
                },
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
                ua: "Про наш заклад",
                en: "About our company"
            },
            CONTENT: {
                en: [
                    {
                        question: "Who we are?",
                        answers: ["We are team of soulmates from different places of Ukraine, who want to solve common problem:",
                            "Easy find place where you can eat in Ukraine."
                        ]
                    },
                    {
                        question: "Main idea of the project",
                        answers: ["All restaurants of Ukraine in one place.",
                            "If your institution is not on our website, then you do not exist at all."
                        ]
                    },
                    {
                        question: "Cost",
                        answers: ["This set of functionality is free for visitors and businesses."]
                    },
                    {
                        question: "When did we start make this project?",
                        answers: ["01.11.2022"]
                    },
                    {
                        question: "When was the first version released?",
                        answers: ["01.11.23"]
                    },
                    {
                        question: "What united us?",
                        answers: ["Willingness to learn and create something new."]
                    },
                ],
                ua: [
                    {
                        question: "Хто ми?",
                        answers: ["Ми команда однодумців з різних куточків України, які хочуть вирішити спільну проблему:", "Швидко знаходити заклади харчування в Україні."]
                    },
                    {
                        question: "Головна ідея проекту",
                        answers: ["Всі заклади України в одному місці.",
                            "Якщо вашого закладу немає на нашому сайті, значить вас взагалі не існує."
                        ]
                    },
                    {
                        question: "Вартість",
                        answers: ["Даний набір функціоналу безкоштовний для користувачів та бізнесу."]
                    },
                    {
                        question: "Коли ми почали розробляти проект?",
                        answers: ["1 Листопада 2022 року"]
                    },
                    {
                        question: "Коли випустили першу версію?",
                        answers: ["1 Листопада 2023 року"]
                    },
                    {
                        question: "Що нас об`єднує?",
                        answers: ["Бажання навчатись і створювати щось нове."]
                    },
                ],
            }
        },
        OUR_TEAM: {
            TOP_TITLE: {
                ua: "Наша Команда",
                en: "Our Team"
            }
        },
        FAVORITE: {
            TOP_TITLE: {
                ua: "Улюблені заклади",
                en: "Favorite companies"
            },
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
            BACK_TO_TOP_BUTTON: {
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
                en: "Do you have an account?"
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
                en: "Closed"
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
                CHANGE_VISIBILITY: {
                    en: "Change visibility",
                    ua: "Змінити відоб"
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
            DELETE_COMPANY_QUESTION: {
                en: "Are you sure you want to delete the company and menu? ",
                ua: "Ви впевнені, що хочете видалити заклад та меню?"
            },
            ARE_YOU_SURE: {
                en: "Are you sure? ",
                ua: "Ви впевнені?"
            }
        }
    },
    NOTIFICATION: {
        UN_ABLE_MAKE_REQUEST: {
            en: "Backend doesn't response. If you want to fix this problem faster you can message us. Email in footer. Sorry by this situation.",
            ua: "Бекенд не відповідає. Якщо хочете швидше вирішити тех. проблему напишіть нам лист. Пошта знаходиться в низу сайту. Вибачаємось за дану ситуацію."
        },
        OPEN_MY_COMPANIES_PAGE: {
            en: 'Open my companies page.',
            ua: "Відкрийте сторінку моїх закладів."
        },
        NO_COMPANY_BY_THIS_ID: {
            en: 'No company by this id',
            ua: "Немає закладу з цим ідентифікатором"
        },
        LOADING: {
            ua: "Завантаження ...",
            en: "Loading ..."
        },
        NO_COMPANY: {
            ua: 'Нема зареєстрованих закладів',
            en: 'No companies in db yet'
        },
        CLOSE_ALL_NOTIFICATIONS_BUTTON: {
            ua: 'Закрити всі',
            en: 'Close all'
        },
        MENU_ITEM: {
            WAS_CREATED: {
                en: 'Menu item was created.',
                ua: "Позицію меню додано."
            },
            WAS_DELETED: {
                en: 'Menu item was deleted.',
                ua: "Позицію меню видалено."
            },
            WAS_UPDATED: {
                en: 'Menu item was updated.',
                ua: 'Позицію меню оновлено.'
            },
        },
        CUSTOMER: {
            UPDATED_PASSWORD: {
                en: "Password was updated.",
                ua: "Пароль оновлено."
            }
        },
        COMPANY: {
            WAS_DELETED: {
                en: 'Company was deleted.',
                ua: "Заклад видалено."
            },
            WAS_CREATED: {
                ua: 'Заклад створено.',
                en: 'Company was created.'
            },
            WAS_UPDATED: {
                ua: 'Дані оновлено.',
                en: 'Data was updated.'
            },
            CREATE_MENU_SUGGESTION: {
                ua: 'Без меню заклад не побачать користувачі.',
                en: "Customers won't see this company without menu."
            },
            LOADING_AVAILABLE_CITIES: {
                en: "Loading available cities ...",
                ua: "Загрузка доступних міст ..."
            },

            LOADING_COMPANY: {
                en: "Loading company ...",
                ua: "Загрузка закладу ..."
            },
        },
        LOADING_AVAILABLE_COMPANIES: {
            en: "Loading companies ...",
            ua: "Загрузка закладів ..."
        },
        LOADING_MENU: {
            en: "Loading menu ...",
            ua: "Загрузка меню ..."
        },

    },

    BOTTOM_MENU: {
        MAIN: {
            ua: "Головна",
            en: "Main"
        },
        MENU: {
            ua: "Меню",
            en: "Menu"
        },
        FAVORITE: {
            ua: "Улюблені",
            en: "Favorite"
        },
        SETTINGS: {
            ua: "Системні",
            en: "Settings"
        },
    },
    TOP_CATEGORIES: {
        KITCHEN: {
            ua: "Кухня",
            en: "Kitchen",
        },
        DESSERTS: {
            ua: "Десерти",
            en: "Desserts",
        },
        HOT_DRINKS: {
            ua: "Гарячі напої",
            en: "Hot drinks",
        },
        BAR: {
            ua: "Бар",
            en: "Bar",
        },
    },
    SUB_CATEGORIES: {
        CHILDREN: {
            en: "Children’s menu",
            ua: "Дитяче меню"
        },
        VEGETARIAN: {
            ua: "Вегaнське",
            en: "Vegetarian"
        },

        FIRST_DISHES: {
            en: "First dishes",
            ua: "Перші страви"
        },
        SECOND_DISHES: {
            en: "Second dishes",
            ua: "Другі страви"
        },
        MAIN_DISHES: {
            en: "Main dishes",
            ua: "Основні страви"
        },
        DUMPLING: {
            en: "Dumplings",
            ua: "Вареники"
        },
        PANCAKES: {
            en: "Pancakes",
            ua: "Млинці"
        },
        PANS: {
            en: "Pans",
            ua: "Пательні"
        },
        FOR_COMPANY: {
            en: "For company",
            ua: "Для компанії"
        },
        HOT_APPETIZERS: {
            en: "Hot appetizers",
            ua: "Гарячі закуски"
        },
        SNACKS: {
            en: "Snacks",
            ua: "Снеки"
        },
        KHINKALI: {
            en: "Khinkali",
            ua: "Хінкалі"
        },
        WOC: {
            en: "Woc",
            ua: "Вок"
        },

        HOT_DOGS: {
            en: "Hot dogs",
            ua: "Хот-доги"
        },
        PASTA: {
            en: "Pasta",
            ua: "Паста"
        },
        OYSTERS: {
            en: "Oysters",
            ua: "Устриці"
        },

        BOWLS: {
            en: "Bowls",
            ua: "Боули"
        },
        MUSSELS: {
            en: "Mussels",
            ua: "Мідії"
        },

        TARTARS: {
            en: "Tartars",
            ua: "Тартари"
        },
        ICE_CREAM: {
            en: "Ice cream",
            ua: "Морозиво"
        },

        FRESH: {
            en: "Fresh",
            ua: "Фреші"
        },
        HOMEMADE_LEMONADE: {
            en: "Homemade lemonades",
            ua: "Домашні лимонади"
        },
        BRANDY: {
            en: "Brandy",
            ua: "Бренді"
        },
         BOURBON: {
            en: "Bourbon",
            ua: "Бурбон"
        },
        MORSES_AND_UZVAR: {
            en: "Morses and Uzvars",
            ua: "Морси та узвари"
        },
        SHOTS: {
            en: "Shots",
            ua: "Шоти"
        },
        LONGS: {
            en: "Longs",
            ua: "Лонги"
        },
        NO_ALCOHOL: {
            en: "Non-alcoholic",
            ua: "Без алкогольні"
        },
        WINE_GEORGIA: {
            en: "Wines of Georgia",
            ua: "Вина Грузії"
        },
        WINE_ITALY: {
            en: "Wines of Italy",
            ua: "Вина Італії"
        },
        WINE_FRANCE: {
            en: "Wines of France",
            ua: "Вина Франції"
        },
        WHITE_WINE: {
            en: "White wines",
            ua: "Білі вина"
        },
        RED_WINE: {
            en: "Red wines",
            ua: "Червоні вина"
        },
        PING_WINE: {
            en: "Pink wines",
            ua: "Рожеві вина"
        },
        NO_ALCOHOL_WINE: {
            en: "No alcohol wines",
            ua: "Безалкогольні вина"
        },
        WINE_SPARKLING: {
            en: "Sparkling wines",
            ua: "Ігристі вина"
        },
        WINE_CHILE: {
            en: "Chile wines",
            ua: "Вина Чілі"
        },
        VERMOUTH: {
            en: "Vermouth",
            ua: "Вермут"
        },
        TINCTURE: {
            en: "Tincture",
            ua: "Настоянки"
        },
        LIQUEUR: {
            en: "Liqueur",
            ua: "Лікер"
        },
        TEQUILA: {
            en: "Tequila",
            ua: "Текіла"
        },
        GIN: {
            en: "Gin",
            ua: "Джин"
        },
        RUM: {
            en: "Rum",
            ua: "Ром"
        },
        WHISKEY: {
            en: "Whiskey",
            ua: "Віскі"
        },
        HORILKA: {
            en: "Horilka",
            ua: "Горілка"
        },
        COGNAC: {
            en: "Cognac",
            ua: "Коньяк"
        },
        NALUVKU: {
            en: "Naluvku",
            ua: "Наливки"
        },
        BEER: {
            en: "Beer",
            ua: "Пиво"
        },
        COFFEE: {
            en: "Coffee",
            ua: "Кава"
        },
        HOME_TEA: {
            en: "Home tea",
            ua: "Домашній чай"
        },
        BREWED_TEA: {
            en: "Brewed tea",
            ua: "Заварний чай"
        },
        TEA: {
            en: "Tea",
            ua: "Чай"
        },
        TEA_ADDITION: {
            en: "Addition to tea",
            ua: "Доповнення до чаю"
        },
        BLACK_TEA: {
            en: "Black tea",
            ua: "Чорний чай"
        },
        GREEN_TEA: {
            en: "Green tea",
            ua: "Зелений чай"
        },
        HERBAL_TEA: {
            en: "Herbal tea",
            ua: "Травяний чай"
        },
        PUERH: {
            en: "Puerh",
            ua: "Пуери"
        },
        STEAK: {
            en: "Steak",
            ua: "Стейк"
        },
        HOME: {
            en: "Home kitchen",
            ua: "Домашня кухня"
        },
        SEASONAL: {
            en: "Seasonal",
            ua: "Сезонне"
        },
        BAKERY: {
            ua: "Випiчка",
            en: "Bakery"
        },
        DRINKS: {
            ua: "Напої",
            en: "Drinks"
        },
        MULLED_WINE: {
            ua: "Глінтвейн",
            en: "Mulled wine"
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
        CRAFT_BREAD: {
            ua: "Хліб крафтовий",
            en: "Craft bread"
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
            ua: "Салати",
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
            ua: 'Фірмові страви',
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
        GRILL: {
            ua: 'Гриль',
            en: 'Grill'
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
        COCKTAILS_ALCOHOL: {
            ua: 'Коктейлі алкогольні',
            en: 'Cocktails alcohol'
        },
        COCKTAILS: {
            ua: 'Коктейлі без алкогольні',
            en: 'Cocktails no alcohol'
        },
        SHAWARMA: {
            ua: 'Шаверма',
            en: 'Shawarma'
        }
    },
}