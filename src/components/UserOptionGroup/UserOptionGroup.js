import React from 'react';
import {Wrapper, GroupTitle, Content} from "./UserOptionGroup.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const UserOptionGroup = ({groupTitle, children}) => {
    return (
        <Wrapper>
            <GroupTitle>{groupTitle}</GroupTitle>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default UserOptionGroup;

