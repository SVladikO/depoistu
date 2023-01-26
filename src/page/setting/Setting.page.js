import React from 'react';

import {ROUTER} from '../../utils/config';

import {ReactComponent as OrderHistoryIcon} from '../../icons/order_history.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as NotificationIcon} from '../../icons/notification.svg';
import {ReactComponent as SettingIcon} from '../../icons/setting.svg';
import {ReactComponent as PaymentIcon} from '../../icons/payment.svg';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';
import {ReactComponent as NewsletterIcon} from '../../icons/newsletter.svg';
import {ReactComponent as TextMessageIcon} from '../../icons/text_message.svg';
import {ReactComponent as PhoneCallIcon} from '../../icons/phone_call.svg';
import {ReactComponent as CurrencyIcon} from '../../icons/currency.svg';
import {ReactComponent as LanguageIcon} from '../../icons/language.svg';
import {ReactComponent as LinkedAccountIcon} from '../../icons/linked_account.svg';

import {
    PrimaryWideButton,
    RowSplitter,
    SettingMenuRow,
    UserAccountBar,
    UserAccountGroup,
    UserOptionGroup,
} from '../../components'
import {Link} from "react-router-dom";
import {LocalStorage} from "../../utils/utils";

const SettingPage = () => {

    const isGuestLogged = LocalStorage.getGuest();

    if (!isGuestLogged) {
        return <Link to={ROUTER.SING_IN.URL}><PrimaryWideButton>Login</PrimaryWideButton></Link>
    }

    return (
        <>
            <UserAccountBar fullName='Jhon Smith' status='Basic Member'/>
            <RowSplitter height='20px' />
            <UserAccountGroup  groupTitle='Accounts'>
                <SettingMenuRow icon={OrderHistoryIcon} title={ROUTER.ORDER_HISTORY.TITLE} href={ROUTER.ORDER_HISTORY.URL} />
                <SettingMenuRow icon={LockIcon} title='Change Password' href='/catalog' />
                <SettingMenuRow icon={NotificationIcon} title='Notification' href='/catalog' />
                <SettingMenuRow icon={SettingIcon} title='Setting' href='/catalog' />
                <SettingMenuRow icon={PaymentIcon} title='Payment' href='/catalog' />
                <SettingMenuRow icon={LogOutIcon} title='Sign Out' toggleHandler={() => LocalStorage.removeGuest()} />
            </UserAccountGroup>
            <UserOptionGroup  groupTitle='More Options'>
                <SettingMenuRow icon={NewsletterIcon} title='Newsletter' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={TextMessageIcon} title='Text Message' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={PhoneCallIcon} title='Phone Call' toggleHandler={() => console.log('clicked toggle')} toggleStatus={true}/>
                <SettingMenuRow icon={CurrencyIcon} title='Currency' href='/catalog' label='$USD' />
                <SettingMenuRow icon={LanguageIcon} title='Language' href='/catalog' label='English' />
                <SettingMenuRow icon={LinkedAccountIcon} title='Linked Account' href='/catalog' label='Facebook, go ...' />

            </UserOptionGroup>
        </>
    );
};

export default SettingPage;