import React from 'react';
import {Wrapper, GroupTitle} from "./UserAccountGroup.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const UserAccountGroup = ({groupTitle, children}) => {
    return (
        <>
            <GroupTitle>{groupTitle}</GroupTitle>
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default UserAccountGroup;

