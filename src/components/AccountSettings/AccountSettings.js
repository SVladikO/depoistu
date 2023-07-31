import React from 'react';
import {RowsWrapper, GroupTitle} from "./AccountSettings.style";

const AccountSettings = ({groupTitle, noTopBorder, children}) => {
    return (
        <>
            <GroupTitle noTopBorder={noTopBorder}>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-account-rows-wrapper">{children}</RowsWrapper>
        </>
    );
};

export default AccountSettings;

