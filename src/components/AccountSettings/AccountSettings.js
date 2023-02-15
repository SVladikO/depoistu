import React from 'react';
import {RowsWrapper, GroupTitle} from "./AccountSettings.style";

const AccountSettings = ({groupTitle, children}) => {
    return (
        <>
            <GroupTitle>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-account-rows-wrapper">{children}</RowsWrapper>
        </>
    );
};

export default AccountSettings;

