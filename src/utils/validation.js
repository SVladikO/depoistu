import * as Yup from 'yup';
import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {translate, TRANSLATION} from "./translation";

const MESSAGE = {
    REQUIRED: translate(TRANSLATION.VALIDATION.REQUIRED),
    MIN_LENGTH:  translate(TRANSLATION.VALIDATION.MIN_LENGTH),
    MAX_LENGTH: translate(TRANSLATION.VALIDATION.MAX_LENGTH),
    MIN_VALUE:  translate(TRANSLATION.VALIDATION.MIN_VALUE),
    MAX_VALUE:  translate(TRANSLATION.VALIDATION.MAX_VALUE),
    MIN_SYMBOLS:  translate(TRANSLATION.VALIDATION.MIN_SYMBOLS),
    MAX_SYMBOLS:  translate(TRANSLATION.VALIDATION.MAX_SYMBOLS),
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
        .required(MESSAGE.REQUIRED)
        .min(from.PHONE.MIN, `${MESSAGE.EXAMPLE}: 380970122333`)
        .max(from.PHONE.MAX, `${MESSAGE.EXAMPLE}: 380970122333`)

const PHONE_VALIDATION_WITHOUT_REQUIRED = from =>
    Yup.string()
        .min(from.PHONE.MIN, `${MESSAGE.EXAMPLE}: 380970122333`)
        .max(from.PHONE.MAX, `${MESSAGE.EXAMPLE}: 380970122333`)

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
        }),
    emailVerificationCode: Yup.string().required(MESSAGE.REQUIRED),
}
const singInValidation = {
    email: customer_validation.email,
    password: CUSTOMER_PASSWORD
}
const forgetPasswordValidation = {
    email: customer_validation.email,
}
const emailVerificationCodeValidation = {
    emailVerificationCode: customer_validation.emailVerificationCode,
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

const menu_item_validation = {
    name: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(2, `${MESSAGE.MIN_SYMBOLS} 2`)
        .max(30, `${MESSAGE.MAX_SYMBOLS} 30`),
    categoryId: Yup.string().required(MESSAGE.REQUIRED),
    price: Yup.number()
        .required(MESSAGE.REQUIRED)
        .moreThan(0, `${MESSAGE.MIN_VALUE} 1`),
    description: Yup.string()
        .max(100, `${MESSAGE.MAX_SYMBOLS} 100`),
    cookingTime: Yup.number()
        .required(MESSAGE.REQUIRED)
        .moreThan(0, `${MESSAGE.MIN_VALUE} 1`)
        .lessThan(100, `${MESSAGE.MAX_VALUE} 99`),
    size: Yup.number()
        .required(MESSAGE.REQUIRED)
        .moreThan(0, `${MESSAGE.MIN_VALUE} 1`)
        .lessThan(10000, `${MESSAGE.MAX_VALUE} 9999`),
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
    cityId: Yup.string().required(MESSAGE.REQUIRED),
    street: Yup.string()
        .required(MESSAGE.REQUIRED)
        .min(COMPANY.STREET.MIN, `${MESSAGE.MIN_LENGTH} ${COMPANY.STREET.MIN}`)
        .max(COMPANY.STREET.MAX, `${MESSAGE.MAX_LENGTH} ${COMPANY.STREET.MAX}`),
    phone1: PHONE_VALIDATION(COMPANY),
    phone2: PHONE_VALIDATION_WITHOUT_REQUIRED(COMPANY),
    phone3: PHONE_VALIDATION_WITHOUT_REQUIRED(COMPANY),
}

const validation = {
    customer: {
        singIn: singInValidation,
        singUp: singUpValidation,
        emailVerificationCode: emailVerificationCodeValidation,
        changePassword: changePasswordValidation,
        forgetPassword: forgetPasswordValidation
    },
    menuItem: menu_item_validation,
    company: company_validation
}
export default validation;

