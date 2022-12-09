import React from 'react';
import {RowsWrapper, GroupTitle} from "./UserAccountGroup.style";

const UserAccountGroup = ({groupTitle, children}) => {
    return (
        <>
            <GroupTitle>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-account-rows-wrapper">{children}</RowsWrapper>
        </>
    );
};

export default UserAccountGroup;

