import React from 'react';
import {Wrapper, GroupTitle, RowsWrapper} from "./UserOptionGroup.style";

const UserOptionGroup = ({groupTitle, children}) => {
    return (
        <Wrapper className="user-option-group-wrapper">
            <GroupTitle>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-option-group-rows-wrapper">{children}</RowsWrapper>
        </Wrapper>
    );
};

export default UserOptionGroup;

