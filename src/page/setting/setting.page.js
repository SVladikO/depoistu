import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";

import {Wrapper} from './setting.page.style';

import {ReactComponent as LogOutIcon} from 'assets/icons/logout.svg';
import {ReactComponent as ProfileIcon} from 'assets/icons/profile.svg';
import {ReactComponent as OrderHistoryIcon} from 'assets/icons/order_history.svg';
import {ReactComponent as LanguageIcon} from 'assets/icons/language.svg';
import {ReactComponent as AboutUsIcon} from "assets/icons/about_us.svg";
import {ReactComponent as StoreIcon} from 'assets/icons/house.svg';
import {ReactComponent as InstructionIcon} from 'assets/icons/instruction.svg';
import {ReactComponent as MenuCategoryIcon} from 'assets/icons/menu_category.svg';
import {ReactComponent as RocketIcon} from "assets/icons/rocket.svg";
import {ReactComponent as ResetSettingsIcon} from "assets/icons/reset_settings.svg";

import {
    SettingMenuRow,
    AccountSettings,
    NotificationTDB,
    Input,
    NotificationLoading,
    RowSplitter,
    PrimaryButton
} from 'components'

import LanguagePopup from "features/language/LanguagePopup";
import {openLanguagePopup} from 'features/language/languageSlice';
import {deleteCustomer} from "features/customer/customerSlice";
import {cleanFavoriteCompanies} from 'features/favorite-company/favoriteComapnySlice'

import {URL} from 'utils/config';
import {useScrollUp} from "utils/hook";
import validation from "utils/validation";
import {BE_API, fetchData, errorHandler} from "utils/fetch";
import {TRANSLATION as TR, translate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";

import packageInfo from '../../../package.json';
import SingInSingUpView from "page-view/sing-in-sing-up-view/sing-in-sing-up-view";
import {resetSettings} from "utils/management";

const SettingPage = () => {
    useScrollUp();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const customer = useSelector(state => state.customer.value);

    const onCheckVerification = ({emailVerificationCode}) => {
        setIsLoading(true)
        fetchData(BE_API.CUSTOMER.PUT_VERIFY_EMAIL(), {email: customer.email, emailVerificationCode, method: 'put'})
            .then(res => {
                if (res.body.isEmailVerified) {
                    // addCustomer({...customer, isVerifiedEmail: true})
                }
            })
            .catch(errorHandler)
            .finally(() => setIsLoading(false));
    }

    // TODO: Add email verification
    const EmailVerificationCodeSchema = Yup.object().shape(validation.customer.emailVerificationCode);
    const emailVerificationNotification = (
        <NotificationTDB
            title={translate(TR.PAGE.SETTINGS.NOTIFICATION.VERIFICATION_TITLE)}
            description={translate(TR.PAGE.SETTINGS.NOTIFICATION.VERIFICATION_DESCRIPTION)}
        >
            <Formik
                initialValues={{emailVerificationCode: ''}}
                validationSchema={EmailVerificationCodeSchema}
                onSubmit={onCheckVerification}
            >
                {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={values.emailVerificationCode}
                            name="emailVerificationCode"
                            onBlur={handleBlur}
                            isTouched={touched.emailVerificationCode}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('emailVerificationCode', '')}
                            errorMessage={errors.emailVerificationCode}
                            withCleaner
                        />
                        <RowSplitter height={'10px'}/>
                        <PrimaryButton type="submit"
                                       isWide>{translate(TR.PAGE.SETTINGS.BUTTONS.VERIFICATION)}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </NotificationTDB>
    );

    const logOut = () => {
        dispatch(deleteCustomer())
        dispatch(cleanFavoriteCompanies())
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
        LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU);
        LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE);
        LocalStorage.remove(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    }

    return (
        <>
            <SingInSingUpView/>
            {isLoading && <NotificationLoading/>}
            <LanguagePopup/>
            <Wrapper>
                {customer && (
                    <>
                        <AccountSettings
                            groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.ACCOUNTS)}>
                            <SettingMenuRow
                                icon={ProfileIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.EDIT_PROFILE)}
                                href={URL.EDIT_CUSTOMER}
                            />
                            <SettingMenuRow
                                icon={OrderHistoryIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.ORDER_HISTORY)}
                                href={URL.ORDER_HISTORY}
                            />
                            {/*TODO: Change password page disabled as BE isn't ready yet. */}
                            {/*<SettingMenuRow*/}
                            {/*    icon={LockIcon}*/}
                            {/*    title={translate(TR.PAGE.SETTINGS.MENU_ROW.CHANGE_PASS)}*/}
                            {/*    href={URL.CHANGE_PASSWORD}*/}
                            {/*/>*/}
                            <SettingMenuRow
                                icon={LogOutIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.EXIT)}
                                changeHandler={logOut}
                            />
                        </AccountSettings>

                        {!!customer.isBusinessOwner &&
                            <AccountSettings
                                noTopBorder
                                groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS)}
                            >
                                <SettingMenuRow
                                    icon={StoreIcon}
                                    title={translate(TR.PAGE.SETTINGS.MENU_ROW.COMPANY)}
                                    href={URL.CUSTOMER_COMPANIES}
                                />
                                <SettingMenuRow
                                    icon={MenuCategoryIcon}
                                    title={translate(TR.PAGE.SETTINGS.MENU_ROW.AVAILABLE_MENU_CATEGORIES)}
                                    href={URL.AVAILABLE_MENU_CATEGORIES}
                                />
                            </AccountSettings>
                        }
                    </>)
                }
                <AccountSettings
                    noTopBorder={customer}
                    groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.OTHERS)}>
                    <SettingMenuRow
                        icon={LanguageIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.LANGUAGE)}
                        changeHandler={() => dispatch(openLanguagePopup())}
                        label={translate(TR.PAGE.SETTINGS.LABEL.CURRENT_LANGUAGE)}
                    />
                    <SettingMenuRow
                        icon={AboutUsIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_PROJECT)}
                        href={URL.ABOUT_PROJECT}
                    />
                    <SettingMenuRow
                        icon={InstructionIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.INSTRUCTION_FOR_BUSINESS_OWNER)}
                        href={URL.INSTRUCTION_FOR_BUSINESS_OWNER}
                    />
                    <SettingMenuRow
                        icon={RocketIcon}
                        title={`${translate(TR.PAGE.SETTINGS.MENU_ROW.VERSION)} ${packageInfo.version}`}
                        href={'#'}
                    />
                    <SettingMenuRow
                        icon={ResetSettingsIcon}
                        title={`${translate(TR.PAGE.SETTINGS.MENU_ROW.RESET_SETTINGS)}`}
                        changeHandler={resetSettings}
                    />
                </AccountSettings>
            </Wrapper>
        </>
    );
};

export default SettingPage;
