import * as Yup from 'yup';

export const USER = {
    NAME: {
        MIN: 2,
        MAX: 30
    },
    PASSWORD: {
        MIN: 6,
        MAX: 12
    },
    PHONE: {
        MIN: 13,
        MAX: 13
    },
    EMAIL: {
        MAX: 30
    }
};

export const user_validation = {
    name: Yup.string()
        .min(USER.NAME.MIN, `Too Short! Min length ${USER.NAME.MIN}`)
        .max(USER.NAME.MAX, `Too Long! Max length ${USER.NAME.MAX}`)
        .required("Required!"),
    password: Yup.string()
        .min(USER.PASSWORD.MIN, `Too Short! Min length ${USER.PASSWORD.MIN}`)
        .max(USER.PASSWORD.MAX, `Too Long! Max length ${USER.PASSWORD.MAX}`)
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .max(USER.EMAIL.MAX, `Too Long! Max length ${USER.EMAIL.MAX}`)
        .required('Required'),
    phone: Yup.string()
        .min(USER.PHONE.MIN, 'Example: +380971234567')
        .max(USER.PHONE.MAX, 'Example: +380971234567')
        .required("Required!"),
    confirmedPassword: Yup.string()
        .required("Required!")
        .min(USER.PASSWORD.MIN, `Too Short! Min length ${USER.PASSWORD.MIN}`)
        .max(USER.PASSWORD.MAX, `Too Long! Max length ${USER.PASSWORD.MAX}`)
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.newPassword === value
        })
}

export const MENU_ITEM = {
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

export const COMPANY = {
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
    SCHEDULE: {},
};
