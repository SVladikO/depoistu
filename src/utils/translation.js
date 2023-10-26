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
        },
        SCHEDULE_IS_REQUIRED: {
            en: "Schedule is a required field.",
            ua: "Графік обовязкове поле. "

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
        PROFILE: {
            ARE_YOU_BUSINESS_OWNER: {
                ua: "Ви власник бізнесу ?",
                en: "Are you business owner ?"
            },
            BUTTON: {
                SAVE_CHANGE: {
                    ua: "Зберегти змінити",
                    en: "Save change"
                },
            }
        },
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
        INSTRUCTION_FOR_BUSINESS_OWNER: {
            TOP_TITLE: {
                ua: "Інструкція користувача",
                en: 'Usage instruction'
            },
        },
        AVAILABLE_MENU_CATEGORIES: {
            TOP_TITLE: {
                ua: " Доступні категорії меню",
                en: 'Available menu categories'
            },
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
            CITY: {
                en: 'City',
                ua: "Місто"
            },
            STREET: {
                en: 'Street',
                ua: "Вулиця"
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
                INSTRUCTION_FOR_BUSINESS_OWNER: {
                    en: "Usage instruction",
                    ua: "Інструкція користувача"
                },
                COMPANY: {
                    en: "My сompanies",
                    ua: "Мої заклади"
                },
                AVAILABLE_MENU_CATEGORIES: {
                    en: "Available menu categories",
                    ua: "Доступні категорії меню"
                },
                EDIT_PROFILE: {
                    en: "Profile",
                    ua: "Профіль"
                },
                MENU: {
                    ua: "Налаштувати меню",
                    en: "Set up menu"
                },
                ABOUT_PROJECT: {
                    ua: "Про проект",
                    en: "About project"
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
                ua: "Профіль",
                en: "Profile"
            }
        },
        ABOUT_PROJECT: {
            TOP_TITLE: {
                ua: "Про проект",
                en: "About project"
            },
            CONTENT: {
                en: [
                    {
                        question: "What is the main idea of the project?",
                        answers: [
                            "All catering establishments of Ukraine on one website depoistu.com",
                            "If your catering establishments is not on our website, then you do not exist at all."
                        ]
                    },
                    {
                        question: "What is the cost?",
                        answers: [
                            "The first four months after the launch of the project are FREE.",
                            "From 1.11.2023 - 1.04.2024",
                        ]
                    },
                    {
                        question: "Why do businesses need us?",
                        withCounter: true,
                        answers: [
                            "With us you save time, money, energy, nerves for planning, creating, maintaining and promoting your own website. Cool, don't you agree?",
                            "The possibility of changing the menu at any time of the day.",
                            "The opportunity to be modern.",
                            "Your customers can now view the menu from any distance at any time of the day.",
                            "More people know about you."
                        ]
                    },
                    {
                        question: "Why do customers need us?",
                        withCounter: true,
                        answers: [
                            "Find a restaurant in any corner of Ukraine faster.",
                            "Find the menu position faster.",
                            "Order faster.",
                            "You get what you want faster.",
                        ]
                    },
                    {
                        question: "How can a business make money faster?",
                        answers: [
                            "Place a QR MENU in your establishment on every table.",
                            "This is your investment in overall success.",
                            "All businesses will introduce their customers to this site.",
                            "And so we got an ecosystem.",
                            "All clients and all businesses in one place."
                        ]
                    },
                    {
                        question: "When was the first version released?",
                        answers: ["November 1, 2023"]
                    },
                    {
                        question: "What unites us?",
                        answers: [
                            "We want to solve a common problem: 'Quickly find food establishments in Ukraine.' ",
                        ]
                    },
                ],
                ua: [
                    {
                        question: "Яка головна ідея проекту ?",
                        answers: [
                            "Всі заклади харчування України на одному сайті depoistu.com",
                            "Якщо вашого закладу немає на нашому сайті, значить вас взагалі не існує."
                        ]
                    },
                    {
                        question: "Яка вартість ?",
                        answers: [
                            "Перші чотири місяці після запуску проекту БЕЗКОШТОВНО.",
                            "З 1.11.2023 - 1.04.2024",
                        ]
                    },
                    {
                        question: "Чому ми потрібні бізнесу ?",
                        withCounter: true,
                        answers: [
                            "З нами ви економите час, гроші, сили, нерви на планування, створення, підтримку, просування власного сайту. Круто, погодьтесь. ",
                            "Можливість змінювати меню в будь-яку пору доби.",
                            "Можливість бути сучасними.",
                            "Ваші клієнти тепер переглядають меню на будь-якій відстані в будь-яку пору доби.",
                            "Більше людей знають про вас."
                        ]
                    },

                    {
                        question: "Чому ми потрібні клієнтам ?",
                        withCounter: true,
                        answers: [
                            "Швидше знаходите заклад харчування в любому куточку України.",
                            "Швидше знаходите позицію меню.",
                            "Швидше замовляєте.",
                            "Швидше отримуєте бажане.",
                        ]
                    },
                    {
                        question: "Як бізнесу заробляти швидше ?",
                        answers: [
                            "Розмістіть QR MENU в своєму закладі на кожному столі.",
                            "Це ваша інвестиція в загальний успіх.",
                            "Всі бізнеси познайомлять своїх клієнтів з цим сайтом.",
                            "І от ми отримали екосистему.",
                            "Всі клієнти і всі бізнеси в одному місці."
                        ]
                    },
                    {
                        question: "Коли випустили першу версію?",
                        answers: ["1 Листопада 2023 року"]
                    },
                    {
                        question: "Що нас об`єднує?",
                        answers: [
                            "Бажаємо вирішити спільну проблему: 'Швидко знаходити заклади харчування в Україні.' ",
                        ]
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
            NO_CONTENT: {
                ua: "У вас ще нема улюблених закладів",
                en: "You don't have favorite companies yet"
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
            },
            BUTTON: {
                ua: "Зареєструватись",
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
                    en: "Show in menu",
                    ua: "Показати в меню"
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
        NO_INTERNET: {
            en: "No internet connection. We can't make request. Check connection and try again.",
            ua: "Інтернет відсутній. Неможливо зробити запит. Перевіте зєднання і спробуйте ще раз."
        },
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
                en: "Loading cities with registered cities",
                ua: "Загрузка міст де є зареєстровані заклади"
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
        LENTEN_DISHES: {
            en: "Lenten dishes",
            ua: "Пісні страви"
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
        CHACHA: {
            en: "Chacha",
            ua: "Чача"
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
        HOMEMADE_WINE: {
            en: "Homemade wines",
            ua: "Домашні вина"
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
        OWN_SMOKING: {
            ua: 'Власне копчення',
            en: 'Own smoking'
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
        DOUGH: {
            ua: 'Тісто',
            en: 'Dough'
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