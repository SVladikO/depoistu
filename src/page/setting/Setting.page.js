import React, {useState} from 'react';

import {ROUTER} from '../../utils/config';

import {ReactComponent as OrderHistoryIcon} from '../../icons/order_history.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as NotificationIcon} from '../../icons/notification.svg';
import {ReactComponent as PaymentIcon} from '../../icons/payment.svg';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';
import {ReactComponent as NewsletterIcon} from '../../icons/newsletter.svg';
import {ReactComponent as PhoneCallIcon} from '../../icons/phone_call.svg';
import {ReactComponent as CurrencyIcon} from '../../icons/currency.svg';
import {ReactComponent as LanguageIcon} from '../../icons/language.svg';
import {ReactComponent as LinkedAccountIcon} from '../../icons/linked_account.svg';
import {ReactComponent as LikeIcon} from '../../icons/favorite.svg';
import {ReactComponent as DeliveryAddressIcon} from '../../icons/map_point.svg';
import {ReactComponent as StoreIcon} from '../../icons/house.svg';
import {ReactComponent as ConditionsIcon} from '../../icons/list.svg';
import {ReactComponent as HelpIcon} from '../../icons/chat.svg';
import {ReactComponent as BusinessIcon} from '../../icons/busines.svg';


import {
    RowSplitter,
    SettingMenuRow,
    UserAccountBar,
    AccountSettings,
    OptionSettings, NotificationTDB,
} from '../../components'

import {LocalStorage} from "../../utils/utils";

const SettingPage = () => {
    const [user, setUser] = useState(LocalStorage.getGuest());

    if (!user) {
        return (
            <NotificationTDB
                title="Restricted access!"
                description="This page is available only after verification."
                buttonText="Go to Sign in page"
                link={`${ROUTER.SING_IN.URL}?backUrl=${ROUTER.SETTING.URL}`}
            />
        )
    }

    const logOut = () => {
        LocalStorage.removeGuest();
        setUser(undefined);
    }

    return (
        <>
            <UserAccountBar fullName='Jhon Smith' phone="+14844731243"/>
            <RowSplitter height='20px'/>
            <AccountSettings groupTitle='Accounts'>
                <SettingMenuRow icon={LikeIcon} title={ROUTER.Favorite.TITLE} href={ROUTER.Favorite.URL}/>
                <SettingMenuRow icon={OrderHistoryIcon} title={ROUTER.ORDER_HISTORY.TITLE}
                                href={ROUTER.ORDER_HISTORY.URL}/>
                <SettingMenuRow icon={LockIcon} title='Change Password' href={ROUTER.CHANGE_PASSWORD.URL}/>
                <SettingMenuRow icon={PaymentIcon} title='Payment' href='/catalog'/>
                <SettingMenuRow icon={DeliveryAddressIcon} title='Delivery Address' href='/catalog'/>
                <SettingMenuRow icon={StoreIcon} title='Store Location' href='/catalog'/>
                <SettingMenuRow icon={ConditionsIcon} title='Terms & Conditions' href='/catalog'/>
                <SettingMenuRow icon={HelpIcon} title='Help' href='/catalog'/>
                <SettingMenuRow icon={BusinessIcon} title='For Business' href='/catalog'/>
                <SettingMenuRow icon={LogOutIcon} title='Sign Out' changeHandler={logOut}/>
            </AccountSettings>
            <OptionSettings groupTitle='More Options'>
                <SettingMenuRow icon={NewsletterIcon} title='Newsletter'
                                toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={NotificationIcon} title='Notification'
                                toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={PhoneCallIcon} title='Phone Call'
                                toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={CurrencyIcon} title='Currency' href='/catalog' label='$USD'/>
                <SettingMenuRow icon={LanguageIcon} title='Language' href='/catalog' label='English'/>
                <SettingMenuRow icon={LinkedAccountIcon} title='Linked Account' href='/catalog'
                                label='Facebook, go ...'/>
            </OptionSettings>
        </>
    );
};

export default SettingPage;
