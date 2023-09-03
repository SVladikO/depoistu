import React from 'react';
import {GroupTitle} from "./AccountSettings.style";

const AccountSettings = ({groupTitle, noTopBorder, children}) => {
    return (
        <>
            <GroupTitle noTopBorder={noTopBorder}>{groupTitle}</GroupTitle>
            <div className="user-account-rows-wrapper">{children}</div>
        </>
    );
};

export default AccountSettings;

