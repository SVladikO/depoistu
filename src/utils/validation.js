import * as Yup from 'yup';

const PHONE = {
    MIN: 12,
    MAX: 12
};

const PHONE_VALIDATION = from =>
    Yup.string()
        .min(from.PHONE.MIN, `Example: 380971112233`)
        .max(from.PHONE.MAX, `Example: 380971112233`)
        .required(`Required!`)

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

const customer_validation = {
    name: Yup.string()
        .min(CUSTOMER.NAME.MIN, `Too Short! Min length ${CUSTOMER.NAME.MIN}`)
        .max(CUSTOMER.NAME.MAX, `Too Long! Max length ${CUSTOMER.NAME.MAX}`)
        .required(`Required!`),
    password: Yup.string()
        .min(CUSTOMER.PASSWORD.MIN, `Too Short! Min length ${CUSTOMER.PASSWORD.MIN}`)
        .max(CUSTOMER.PASSWORD.MAX, `Too Long! Max length ${CUSTOMER.PASSWORD.MAX}`)
        .required(`Required`),
    email: Yup.string()
        .email(`Invalid email`)
        .max(CUSTOMER.EMAIL.MAX, `Too Long! Max length ${CUSTOMER.EMAIL.MAX}`)
        .required(`Required`),
    phone: PHONE_VALIDATION(CUSTOMER),
    confirmedPassword: Yup.string()
        .required(`Required!`)
        .min(CUSTOMER.PASSWORD.MIN, `Too Short! Min length ${CUSTOMER.PASSWORD.MIN}`)
        .max(CUSTOMER.PASSWORD.MAX, `Too Long! Max length ${CUSTOMER.PASSWORD.MAX}`)
        .test(`passwords-match`, `Passwords must match`, function (value) {
            return this.parent.newPassword === value
        })
}
const singInValidation = {
    email: customer_validation.email,
    password: customer_validation.password
}
const singUpValidation = {
    name: customer_validation.name,
    email: customer_validation.email,
    phone: customer_validation.phone,
    newPassword: customer_validation.password,
    confirmedPassword: customer_validation.confirmedPassword,
}
const changePasswordValidation = {
    oldPassword: customer_validation.password,
    newPassword: customer_validation.password,
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
    customer: {
        singIn: singInValidation,
        singUp: singUpValidation,
        changePassword: changePasswordValidation
    },
    menuItem: menu_item_validation,
    company: company_validation
}
export default validation;

