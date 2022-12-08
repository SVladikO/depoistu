import React from 'react';

// import { A } from "./UserAccaunt.style";

import {ReactComponent as GoogleIcon} from '../../icons/google.svg';
import {ReactComponent as FacebookIcon} from '../../icons/facebook.svg';
import {ReactComponent as MailIcon} from '../../icons/mail.svg';
import {ReactComponent as LockIcon} from '../../icons/lock.svg';
import {ReactComponent as LogOutIcon} from "../../icons/logout.svg";
import {ReactComponent as SandwichIcon} from '../../icons/sandwich.svg';
import {ReactComponent as LanguageIcon} from "../../icons/language.svg";

import {
    AccountMenuRow, RowSplitter,
    UserAccountBar,
    UserAccountGroup,
    UserOptionGroup,
} from '../../components'
// import {ReactComponent as LockIcon} from "../../icons/lock.svg";
// import {ReactComponent as LogOutIcon} from "../../icons/logout.svg";
// import {ReactComponent as LanguageIcon} from "../../icons/language.svg";

// import {ReactComponent as LogoIcon} from "../../icons/logo.svg";

const UserAccountPage = () => {
    return (
        <>
            <UserAccountBar fullName="Jhon Smith" href="/catalog" status="Basic Member"/>
            <RowSplitter height="20px" />
            <UserAccountGroup  groupTitle="Accounts">
                <AccountMenuRow icon={LanguageIcon} title="Language" href="/catalog" label="English"/>
                <AccountMenuRow icon={LogOutIcon} title="Only change handler" changeHandler={() => alert('clicked')}/>
            </UserAccountGroup>
            <UserOptionGroup  groupTitle="More Options">
                <AccountMenuRow icon={LockIcon} title={`Change Password`} toggleHandler={() => alert('clicked toggle')} toggleStatus={true}/>
                <AccountMenuRow icon={LockIcon} title={`Change Password`} toggleHandler={() => alert('clicked toggle')} toggleStatus={true}/>
            </UserOptionGroup>
        </>
    );
};

export default UserAccountPage;