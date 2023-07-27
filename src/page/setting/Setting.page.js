import React, {useState} from 'react';

import {Wrapper, EditBar} from './Setting.style';

import {ReactComponent as LockIcon} from '../../icons/lock.svg';
// import {ReactComponent as OrderHistoryIcon} from '../../icons/order_history.svg';
// import {ReactComponent as NotificationIcon} from '../../icons/notification.svg';
// import {ReactComponent as NewsletterIcon} from '../../icons/newsletter.svg';
// import {ReactComponent as PhoneCallIcon} from '../../icons/phone_call.svg';
// import {ReactComponent as PaymentIcon} from '../../icons/payment.svg';
// import {ReactComponent as LikeIcon} from '../../icons/favorite.svg';
// import {ReactComponent as DeliveryAddressIcon} from '../../icons/location.svg';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';
import {ReactComponent as ProfileIcon} from '../../icons/profile.svg';
// import {ReactComponent as CurrencyIcon} from '../../icons/currency.svg';
import {ReactComponent as LanguageIcon} from '../../icons/language.svg';
import {ReactComponent as InfoIcon} from "../../icons/info.svg";
// import {ReactComponent as LinkedAccountIcon} from '../../icons/linked_account.svg';
import {ReactComponent as StoreIcon} from '../../icons/house.svg';
import {ReactComponent as TeamIcon} from "../../icons/team.svg";
// import {ReactComponent as ConditionsIcon} from '../../icons/list.svg';
// import {ReactComponent as HelpIcon} from '../../icons/chat.svg';

import {
    SettingMenuRow,
    AccountSettings,
    NotificationTDB,
    PrimaryButton,
    Input
} from '../../components'

import {URL} from '../../utils/config';
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {Link} from "react-router-dom";
import {TRANSLATION as TR, translate} from "../../utils/translation";
import LanguagePopup from "../../page-view/language-popup/LanguagePopup";

const SettingPage = () => {
    const [isShowLanguagePopup, setIsShowLanguagePopup] = useState(false);
    const openLanguagePopup = () => setIsShowLanguagePopup(true);
    const closeLanguagePopup = () => setIsShowLanguagePopup(false);

    const [customer, setCustomer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));

    const singInSingUpNotification = (
        <NotificationTDB
            title={translate(TR.PAGE.SETTINGS.NOTIFICATION.TITLE)}
            description={translate(TR.PAGE.SETTINGS.NOTIFICATION.DESCRIPTION)}
        >
            <EditBar>
                <Link to={URL.SING_IN}>
                    <PrimaryButton isWide>{translate(TR.PAGE.SETTINGS.BUTTONS.SING_IN)}</PrimaryButton>
                </Link>
                <Link to={URL.SING_UP}>
                    <PrimaryButton isWide>{translate(TR.PAGE.SETTINGS.BUTTONS.SING_UP)}</PrimaryButton>
                </Link>
            </EditBar>
        </NotificationTDB>
    );

    const emailVerificationNotification = (
        <NotificationTDB
            title={translate(TR.PAGE.SETTINGS.NOTIFICATION.VERIFICATION_TITLE)}
            description={translate(TR.PAGE.SETTINGS.NOTIFICATION.VERIFICATION_DESCRIPTION)}
        >
            <Input/>
            <PrimaryButton isWide>{translate(TR.PAGE.SETTINGS.BUTTONS.VERIFICATION)}</PrimaryButton>
        </NotificationTDB>
    );

    const logOut = () => {
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER);
        setCustomer(undefined);
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    }

    return (
        <>
            {!customer && singInSingUpNotification}
            {customer && !customer.IS_VERIFIED_EMAIL && emailVerificationNotification}
            <LanguagePopup onClose={closeLanguagePopup} isShow={isShowLanguagePopup}/>
            <Wrapper>
                {/*<CustomerAccountBar fullName='Jhon Smith' phone="+14844731243"/>*/}
                {/*<RowSplitter height='20px'/>*/}
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
                        </AccountSettings>
                    </>)
                }
                <AccountSettings
                    noTopBorder={!!customer}
                    groupTitle={translate(TR.PAGE.SETTINGS.GROUP_TITLE.OPTIONS)}>
                    {/*<SettingMenuRow icon={NewsletterIcon} title='Newsletter' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={NotificationIcon} title='Notification' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={PhoneCallIcon} title='Phone Call' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                    {/*<SettingMenuRow icon={CurrencyIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.CURRENCY)} href='/catalog' label='$USD'/>*/}
                    {/*<SettingMenuRow icon={HelpIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.HELP)} href='/catalog'/>*/}
                    <SettingMenuRow
                        icon={LanguageIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.LANGUAGE)}
                        changeHandler={openLanguagePopup}
                        label={translate(TR.PAGE.SETTINGS.LABEL.CURRENT_LANGUAGE)}
                    />
                    <SettingMenuRow
                        icon={InfoIcon}
                        title={translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}
                        href={URL.ABOUT_US}
                    />
                    <SettingMenuRow
                        icon={TeamIcon}
                        title={translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}
                        href={URL.OUR_TEAM}
                    />
                    {/*<SettingMenuRow icon={LinkedAccountIcon} title={translate(TR.PAGE.SETTINGS.MENU_ROW.LINKED_ACCOUNTS)} href='/catalog' label='Facebook, go ...'/>*/}
                </AccountSettings>
            </Wrapper>
        </>
    );
};

export default SettingPage;
