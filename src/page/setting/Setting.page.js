import React, {useState} from 'react';

import {EditBar} from './Setting.style';

import {ReactComponent as LockIcon} from '../../icons/lock.svg';
// import {ReactComponent as OrderHistoryIcon} from '../../icons/order_history.svg';
// import {ReactComponent as NotificationIcon} from '../../icons/notification.svg';
// import {ReactComponent as NewsletterIcon} from '../../icons/newsletter.svg';
// import {ReactComponent as PhoneCallIcon} from '../../icons/phone_call.svg';
// import {ReactComponent as PaymentIcon} from '../../icons/payment.svg';
// import {ReactComponent as LikeIcon} from '../../icons/favorite.svg';
// import {ReactComponent as DeliveryAddressIcon} from '../../icons/map_point.svg';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';
import {ReactComponent as ProfileIcon} from '../../icons/profile.svg';
// import {ReactComponent as CurrencyIcon} from '../../icons/currency.svg';
// import {ReactComponent as LanguageIcon} from '../../icons/language.svg';
import {ReactComponent as InfoIcon} from "../../icons/info.svg";
// import {ReactComponent as LinkedAccountIcon} from '../../icons/linked_account.svg';
import {ReactComponent as StoreIcon} from '../../icons/house.svg';
import {ReactComponent as TeamIcon} from "../../icons/team.svg";
// import {ReactComponent as ConditionsIcon} from '../../icons/list.svg';
// import {ReactComponent as HelpIcon} from '../../icons/chat.svg';

import {
    SettingMenuRow,
    AccountSettings,
    OptionSettings, NotificationTDB, PrimaryButton,
} from '../../components'

import {ROUTER, URL} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {Link} from "react-router-dom";

const SettingPage = () => {
    const [customer, setCustomer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));

    if (!customer) {
        return (
            <NotificationTDB
                title={resolveTranslation("PAGE.SETTINGS.NOTIFICATION.TITLE")}
                description={resolveTranslation("PAGE.SETTINGS.NOTIFICATION.DESCRIPTION")}
            >
                <EditBar>
                    <Link to={URL.SING_IN}>
                        <PrimaryButton isWide>Sing In</PrimaryButton>
                    </Link>
                    <Link to={URL.SING_UP}>
                        <PrimaryButton isWide>Sing Up</PrimaryButton>
                    </Link>
                </EditBar>
            </NotificationTDB>
        )
    }

    const logOut = () => {
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER);
        setCustomer(undefined);
        LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    }

    return (
        <>
            {/*<CustomerAccountBar fullName='Jhon Smith' phone="+14844731243"/>*/}
            {/*<RowSplitter height='20px'/>*/}
            <AccountSettings groupTitle={resolveTranslation("PAGE.SETTINGS.GROUP_TITLE.ACCOUNTS")}>
                {/*TODO: Hidden second version*/}
                {/*<SettingMenuRow icon={LikeIcon} title={ROUTER.Favorite.TITLE} href={ROUTER.Favorite.URL}/>*/}
                {/*<SettingMenuRow icon={OrderHistoryIcon} title={ROUTER.ORDER_HISTORY.TITLE} href={ROUTER.ORDER_HISTORY.URL}/>*/}
                {/*<SettingMenuRow icon={PaymentIcon} title='Payment' href='/catalog'/>*/}
                {/*<SettingMenuRow icon={DeliveryAddressIcon} title='Delivery Address' href='/catalog'/>*/}
                {/*<SettingMenuRow icon={StoreIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.LOCATION")} href='/catalog'/>*/}
                {/*<SettingMenuRow icon={ConditionsIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.TERMS")} href='/catalog'/>*/}
                <SettingMenuRow icon={ProfileIcon} title={resolveTranslation("PAGE.SETTING.MENU_ROW.EDIT_PROFILE")}
                                href={URL.EDIT_USER}/>
                <SettingMenuRow icon={LockIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.CHANGE_PASS")}
                                href={URL.CHANGE_PASSWORD}/>
                <SettingMenuRow icon={LogOutIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.EXIT")}
                                changeHandler={logOut}/>
            </AccountSettings>
            <OptionSettings groupTitle={resolveTranslation("PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS")}>
                <SettingMenuRow icon={StoreIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.COMPANY")}
                                href={ROUTER.CUSTOMER_COMPANIES.URL}/>
            </OptionSettings>
            <OptionSettings groupTitle={resolveTranslation("PAGE.SETTINGS.GROUP_TITLE.OPTIONS")}>
                {/*<SettingMenuRow icon={NewsletterIcon} title='Newsletter' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                {/*<SettingMenuRow icon={NotificationIcon} title='Notification' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                {/*<SettingMenuRow icon={PhoneCallIcon} title='Phone Call' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>*/}
                {/*<SettingMenuRow icon={CurrencyIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.CURRENCY")} href='/catalog' label='$USD'/>*/}
                {/*<SettingMenuRow icon={HelpIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.HELP")} href='/catalog'/>*/}
                <SettingMenuRow icon={InfoIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.ABOUT_US")}
                                href={URL.ABOUT_US}/>
                <SettingMenuRow icon={TeamIcon} title={resolveTranslation("PAGE.OUR_TEAM.TOP_TITLE")}
                                href={URL.OUR_TEAM}/>
                {/*<SettingMenuRow icon={LanguageIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.LANGUAGE")} href='/catalog' label='English'/>*/}
                {/*<SettingMenuRow icon={LinkedAccountIcon} title={resolveTranslation("PAGE.SETTINGS.MENU_ROW.LINKED_ACCOUNTS")} href='/catalog' label='Facebook, go ...'/>*/}
            </OptionSettings>
        </>
    );
};

export default SettingPage;
