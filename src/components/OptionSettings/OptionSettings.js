import React from 'react';
import {Wrapper, GroupTitle, RowsWrapper} from "./OptionSettings.style";

const OptionSettings = ({groupTitle, noBorder=false, children}) => {
    return (
        <Wrapper className="user-option-group-wrapper" noBorder={noBorder}>
            <GroupTitle>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-option-group-rows-wrapper">{children}</RowsWrapper>
        </Wrapper>
    );
};

export default OptionSettings;

