import * as Yup from 'yup';
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {translate, TRANSLATION} from "./translation";

const MESSAGE = {
    REQUIRED: translate(TRANSLATION.VALIDATION.REQUIRED),
    MIN_LENGTH:  translate(TRANSLATION.VALIDATION.MIN_LENGTH),
    MAX_LENGTH: translate(TRANSLATION.VALIDATION.MAX_LENGTH),
    EXAMPLE: translate(TRANSLATION.VALIDATION.EXAMPLE),
    PASSWORD_MUST_MUCH: translate(TRANSLATION.VALIDATION.PASSWORD_MUST_MUCH),
    OLD_PASSWORD_MUST_MUCH: translate(TRANSLATION.VALIDATION.OLD_PASSWORD_MUST_MUCH),
    INVALID_EMAIL: translate(TRANSLATION.VALIDATION.INVALID_EMAIL),
}

const PHONE = {
    MIN: 12,
    MAX: 12
};

const PHONE_VALIDATION = from =>
    Yup.string()
        .min(from.PHONE.MIN, `${MESSAGE.EXAMPLE}: 380970122333`)
        .max(from.PHONE.MAX, `${MESSAGE.EXAMPLE}: 380970122333`)
        .required(MESSAGE.REQUIRED)

const CUSTOMER = {
    NAME: {
        MIN: 2,
        MAX: 30
    },
    PASSWORD: {
        MIN: 6,
        MAX: 12
    },
    PHONE,
    EMAIL: {
        MAX: 30
    }
};


const CUSTOMER_PASSWORD = Yup.string()
    .required(MESSAGE.REQUIRED)
    .min(CUSTOMER.PASSWORD.MIN, `${MESSAGE.MIN_LENGTH} ${CUSTOMER.PASSWORD.MIN}`)
    .max(CUSTOMER.PASSWORD.MAX, `${MESSAGE.MAX_LENGTH} ${CUSTOMER.PASSWORD.MAX}`)

const customer_validation = {
    name: Yup.string()
        .min(CUSTOMER.NAME.MIN, `${MESSAGE.MIN_LENGTH} ${CUSTOMER.NAME.MIN}`)
        .max(CUSTOMER.NAME.MAX, `${MESSAGE.MAX_LENGTH} ${CUSTOMER.NAME.MAX}`)
        .required(MESSAGE.REQUIRED),
    email: Yup.string()
        .email(MESSAGE.INVALID_EMAIL)
        .max(CUSTOMER.EMAIL.MAX, `${MESSAGE.MAX_LENGTH} ${CUSTOMER.EMAIL.MAX}`)
        .required(MESSAGE.REQUIRED),
    phone: PHONE_VALIDATION(CUSTOMER),
    oldPassword: CUSTOMER_PASSWORD
        .test(`passwords-match`, MESSAGE.OLD_PASSWORD_MUST_MUCH, value => {
            const customer = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);
            return customer.PASSWORD === value
        }),
    confirmedPassword: CUSTOMER_PASSWORD
        .test(`passwords-match`, MESSAGE.PASSWORD_MUST_MUCH, function (value) {
            return this.parent.newPassword === value
        })
}
const singInValidation = {
    email: customer_validation.email,
    password: CUSTOMER_PASSWORD
}
const forgetPasswordValidation = {
    email: customer_validation.email,
}
const singUpValidation = {
    name: customer_validation.name,
    email: customer_validation.email,
    phone: customer_validation.phone,
    newPassword: CUSTOMER_PASSWORD,
    confirmedPassword: customer_validation.confirmedPassword,
}
const changePasswordValidation = {
    oldPassword: customer_validation.oldPassword,
    newPassword: CUSTOMER_PASSWORD,
    confirmedPassword: customer_validation.confirmedPassword
}

const MENU_ITEM = {
    NAME: {
        MIN: 2,
        MAX: 30
    },
    PRICE: {
        MIN: 1,
    },
    DESCRIPTION: {
        MAX: 100
    },
    COOKING_TIME: {
        MIN: 1,
        MAX: 2
    },
    MEAL_SIZE: {
        MIN: 1,
        MAX: 4
    },
};

const menu_item_validation = {
    name: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(MENU_ITEM.NAME.MIN, `${MESSAGE.MIN_LENGTH} ${MENU_ITEM.NAME.MIN}`)
        .max(MENU_ITEM.NAME.MAX, `${MESSAGE.MAX_LENGTH} ${MENU_ITEM.NAME.MAX}`),
    category: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(MENU_ITEM.NAME.MIN, `${MESSAGE.MIN_LENGTH} ${MENU_ITEM.NAME.MIN}`)
        .max(MENU_ITEM.NAME.MAX, `${MESSAGE.MAX_LENGTH} ${MENU_ITEM.NAME.MAX}`),
    price: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(MENU_ITEM.PRICE.MIN, `${MESSAGE.MIN_LENGTH} ${MENU_ITEM.PRICE.MIN}`),
    description: Yup.string()
        .max(MENU_ITEM.DESCRIPTION.MAX, `${MESSAGE.MAX_LENGTH} ${MENU_ITEM.DESCRIPTION.MAX}`),
    cookingTime: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(MENU_ITEM.COOKING_TIME.MIN, `${MESSAGE.MIN_LENGTH} ${MENU_ITEM.COOKING_TIME.MIN}`)
        .max(MENU_ITEM.COOKING_TIME.MAX, `${MESSAGE.MAX_LENGTH} ${MENU_ITEM.COOKING_TIME.MAX}`),
    size: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(MENU_ITEM.MEAL_SIZE.MIN, `${MESSAGE.MIN_LENGTH} ${MENU_ITEM.MEAL_SIZE.MIN}`)
        .max(MENU_ITEM.MEAL_SIZE.MAX, `${MESSAGE.MAX_LENGTH} ${MENU_ITEM.MEAL_SIZE.MAX}`)
}

const COMPANY = {
    NAME: {
        MIN: 2,
        MAX: 30
    },
    CITY: {
        //we take city from the exist list
    },
    STREET: {
        MIN: 2,
        MAX: 30
    },
    PHONE,
    SCHEDULE: {},
};

const company_validation = {
    name: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(COMPANY.NAME.MIN, `${MESSAGE.MIN_LENGTH} ${COMPANY.NAME.MIN}`)
        .max(COMPANY.NAME.MAX, `${MESSAGE.MAX_LENGTH} ${COMPANY.NAME.MAX}`),
    city_id: Yup.string().required(MESSAGE.REQUIRED),
    street: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(COMPANY.STREET.MIN, `${MESSAGE.MIN_LENGTH} ${COMPANY.STREET.MIN}`)
        .max(COMPANY.STREET.MAX, `${MESSAGE.MAX_LENGTH} ${COMPANY.STREET.MAX}`),
    phone: PHONE_VALIDATION(COMPANY),
}

const validation = {
    customer: {
        singIn: singInValidation,
        singUp: singUpValidation,
        changePassword: changePasswordValidation,
        forgetPassword: forgetPasswordValidation
    },
    menuItem: menu_item_validation,
    company: company_validation
}
export default validation;

