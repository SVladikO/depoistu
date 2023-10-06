import {Link} from "react-router-dom";
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";

import {Wrapper, EditBar} from './Setting.style';

import {ReactComponent as LockIcon} from 'assets/icons/lock.svg';
// import {ReactComponent as OrderHistoryIcon} from 'icons/order_history.svg';
// import {ReactComponent as NotificationIcon} from 'icons/notification.svg';
// import {ReactComponent as NewsletterIcon} from 'icons/newsletter.svg';
// import {ReactComponent as PhoneCallIcon} from 'icons/phone_call.svg';
// import {ReactComponent as PaymentIcon} from 'icons/payment.svg';
// import {ReactComponent as LikeIcon} from 'icons/favorite.svg';
// import {ReactComponent as DeliveryAddressIcon} from 'icons/location.svg';
import {ReactComponent as LogOutIcon} from 'assets/icons/logout.svg';
import {ReactComponent as ProfileIcon} from 'assets/icons/profile.svg';
// import {ReactComponent as CurrencyIcon} from 'icons/currency.svg';
import {ReactComponent as LanguageIcon} from 'assets/icons/language.svg';
import {ReactComponent as AboutUsIcon} from "assets/icons/about_us.svg";
// import {ReactComponent as LinkedAccountIcon} from 'icons/linked_account.svg';
import {ReactComponent as StoreIcon} from 'assets/icons/house.svg';
import {ReactComponent as MenuCategoryIcon} from 'assets/icons/menu_category.svg';
import {ReactComponent as TeamIcon} from "assets/icons/team.svg";
import {ReactComponent as RocketIcon} from "assets/icons/rocket.svg";
// import {ReactComponent as ConditionsIcon} from 'icons/list.svg';
// import {ReactComponent as HelpIcon} from 'icons/chat.svg';

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

import {URL} from 'utils/config';
import validation from "utils/validation";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {BE_API, fetchData} from "utils/fetch";
import {TRANSLATION as TR, translate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";
import packageInfo from '../../../package.json';


const SettingPage = () => {
    useScrollUp();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [customer, setCustomer] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER);

    const singInSingUpNotification = (
        <NotificationTDB
            title={translate(TR.PAGE.SETTINGS.NOTIFICATION.TITLE)}
            description={translate(TR.PAGE.SETTINGS.NOTIFICATION.DESCRIPTION)}
        >
            <EditBar>
                <Link to={URL.SING_UP}>
                    <PrimaryButton isWide minWidth="120px">{translate(TR.PAGE.SETTINGS.BUTTONS.SING_UP)}</PrimaryButton>
                </Link>
                <Link to={URL.SING_IN}>
                    <PrimaryButton isWide minWidth="120px">{translate(TR.PAGE.SETTINGS.BUTTONS.SING_IN)}</PrimaryButton>
                </Link>
            </EditBar>
        </NotificationTDB>
    );
    const onCheckVerification = ({emailVerificationCode}) => {
        setIsLoading(true)
        fetchData(BE_API.CUSTOMER.PUT_VERIFY_EMAIL(), {email: customer.email, emailVerificationCode, method: 'put'})
            .then(res => {
                if (res.body.isEmailVerified) {
                    setCustomer({...customer, isVerifiedEmail: true})
                }
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false));
    }

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
                        <PrimaryButton type="submit" isWide>{translate(TR.PAGE.SETTINGS.BUTTONS.VERIFICATION)}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </NotificationTDB>
    );

    const logOut = () => {
        setCustomer(undefined);
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    }

    return (
        <>
            {!customer && (
                <>
                    {singInSingUpNotification}
                    <RowSplitter height="10px" />
                    </>
            )}
            {/*{customer && !customer.isVerifiedEmail && emailVerificationNotification}*/}
            {isLoading && <NotificationLoading/>}
            <LanguagePopup />
            <Wrapper>
                {/*<CustomerAccountBar fullName='Jhon Smith' phone="+14844731243"/>*/}
                {/*<RowSplitter height='20px'/>*/}
                {/*{customer && !!customer.isVerifiedEmail && (*/}
                {customer && (
                    <>
                        <AccountSettings
                            groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.ACCOUNTS)}>
                            {/*TODO: Hidden second version*/}
                            {/*<SettingMenuRow icon={LikeIcon} title={ROUTER.Favorite.TITLE} href={ROUTER.Favorite.URL}/>*/}
                            {/*<SettingMenuRow icon={OrderHistoryIcon} title={ROUTER.ORDER_HISTORY.TITLE} href={ROUTER.ORDER_HISTORY.URL}/>*/}
                            {/*<SettingMenuRow icon={PaymentIcon} title='Payment' href='/catalog'/>*/}
                            {/*<SettingMenuRow icon={DeliveryAddressIcon} title='Delivery Address' href='/catalog'/>*/}
                            {/*<SettingMenuRow icon={StoreIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.LOCATION)} href='/catalog'/>*/}
                            {/*<SettingMenuRow icon={ConditionsIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.TERMS)} href='/catalog'/>*/}
                            <SettingMenuRow
                                icon={ProfileIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.EDIT_PROFILE)}
                                href={URL.EDIT_CUSTOMER}
                            />
                            <SettingMenuRow
                                icon={LockIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.CHANGE_PASS)}
                                href={URL.CHANGE_PASSWORD}
                            />
                            <SettingMenuRow
                                icon={LogOutIcon}
                                title={translate(TR.PAGE.SETTINGS.MENU_ROW.EXIT)}
                                changeHandler={logOut}
                            />
                        </AccountSettings>

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
                    </>)
                }
                <AccountSettings
                    noTopBorder={customer}
                    groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.OPTIONS)}>
                    {/*<SettingMenuRow icon={NewsletterIcon} title='Newsletter' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={NotificationIcon} title='Notification' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={PhoneCallIcon} title='Phone Call' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={CurrencyIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.CURRENCY)} href='/catalog' label='$USD'/>*/}
                    {/*<SettingMenuRow icon={HelpIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.HELP)} href='/catalog'/>*/}
                    <SettingMenuRow
                        icon={LanguageIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.LANGUAGE)}
                        changeHandler={() => dispatch(openLanguagePopup())}
                        label={translate(TR.PAGE.SETTINGS.LABEL.CURRENT_LANGUAGE)}
                    />
                    <SettingMenuRow
                        icon={AboutUsIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}
                        href={URL.ABOUT_US}
                    />
                    <SettingMenuRow
                        icon={TeamIcon}
                        title={translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}
                        href={URL.OUR_TEAM}
                    />
                    <SettingMenuRow
                        icon={RocketIcon}
                        title={`${translate(TR.PAGE.SETTINGS.MENU_ROW.VERSION)} ${packageInfo.version}`}
                        href={'#'}
                    />
                    {/*<SettingMenuRow icon={LinkedAccountIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.LINKED_ACCOUNTS)} href='/catalog' label='Facebook, go ...'/>*/}
                </AccountSettings>
            </Wrapper>
        </>
    );
};

export default SettingPage;
