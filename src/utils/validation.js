import * as Yup from 'yup';

const PHONE = {
    MIN: 13,
    MAX: 13
};

const PHONE_VALIDATION = from =>
    Yup.string()
        .min(from.PHONE.MIN, `Example: +380971234567`)
        .max(from.PHONE.MAX, `Example: +380971234567`)
        .required(`Required!`)

const USER = {
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

const user_validation = {
    name: Yup.string()
        .min(USER.NAME.MIN, `Too Short! Min length ${USER.NAME.MIN}`)
        .max(USER.NAME.MAX, `Too Long! Max length ${USER.NAME.MAX}`)
        .required(`Required!`),
    password: Yup.string()
        .min(USER.PASSWORD.MIN, `Too Short! Min length ${USER.PASSWORD.MIN}`)
        .max(USER.PASSWORD.MAX, `Too Long! Max length ${USER.PASSWORD.MAX}`)
        .required(`Required`),
    email: Yup.string()
        .email(`Invalid email`)
        .max(USER.EMAIL.MAX, `Too Long! Max length ${USER.EMAIL.MAX}`)
        .required(`Required`),
    phone: PHONE_VALIDATION(USER),
    confirmedPassword: Yup.string()
        .required(`Required!`)
        .min(USER.PASSWORD.MIN, `Too Short! Min length ${USER.PASSWORD.MIN}`)
        .max(USER.PASSWORD.MAX, `Too Long! Max length ${USER.PASSWORD.MAX}`)
        .test(`passwords-match`, `Passwords must match`, function (value) {
            return this.parent.newPassword === value
        })
}
const singInValidation = {
    email: user_validation.email,
    password: user_validation.password
}
const singUpValidation = {
    name: user_validation.name,
    email: user_validation.email,
    newPassword: user_validation.password,
    confirmedPassword: user_validation.confirmedPassword,
    phone: user_validation.phone,
}
const changePasswordValidation = {
    oldPassword: user_validation.password,
    newPassword: user_validation.password,
    confirmedPassword: user_validation.confirmedPassword
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
        .required(`Required!`)
        .min(MENU_ITEM.NAME.MIN, `Min length ${MENU_ITEM.NAME.MIN}`)
        .max(MENU_ITEM.NAME.MAX, `Max length ${MENU_ITEM.NAME.MAX}`),
    price: Yup.string()
        .required(`Required!`)
        .min(MENU_ITEM.PRICE.MIN, `Min length ${MENU_ITEM.PRICE.MIN}`),
    description: Yup.string()
        .max(MENU_ITEM.DESCRIPTION.MAX, `Max length ${MENU_ITEM.DESCRIPTION.MAX}`),
    cookingTime: Yup.string()
        .required(`Required!`)
        .min(MENU_ITEM.COOKING_TIME.MIN, `Min length ${MENU_ITEM.COOKING_TIME.MIN}`)
        .max(MENU_ITEM.COOKING_TIME.MAX, `Max length ${MENU_ITEM.COOKING_TIME.MAX}`),
    size: Yup.string()
        .required(`Required!`)
        .min(MENU_ITEM.MEAL_SIZE.MIN, `Min length ${MENU_ITEM.MEAL_SIZE.MIN}`)
        .max(MENU_ITEM.MEAL_SIZE.MAX, `Max length ${MENU_ITEM.MEAL_SIZE.MAX}`)
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
        .required(`Required`)
        .min(COMPANY.NAME.MIN, `Min length ${COMPANY.NAME.MIN}`)
        .max(COMPANY.NAME.MAX, `Max length ${COMPANY.NAME.MAX}`),
    city: Yup.string().required(`Required`),
    street: Yup.string()
        .required(`Required`)
        .min(COMPANY.STREET.MIN, `Min length ${COMPANY.STREET.MIN}`)
        .max(COMPANY.STREET.MAX, `Max length ${COMPANY.STREET.MAX}`),
    phone: PHONE_VALIDATION(COMPANY),
}

const validation = {
    user: {
        singIn: singInValidation,
        singUp: singUpValidation,
        changePassword: changePasswordValidation
    },
    menuItem: menu_item_validation,
    company: company_validation
}
export default validation;

