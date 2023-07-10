import React from 'react';
import {Wrapper, GroupTitle, RowsWrapper} from "./OptionSettings.style";

const OptionSettings = ({groupTitle, noBottomBorder=false, noTopBorder=false, children}) => {
    return (
        <Wrapper className="user-option-group-wrapper" noBottomBorder={noBottomBorder} noTopBorder={noTopBorder}>
            <GroupTitle>{groupTitle}</GroupTitle>
            <RowsWrapper className="user-option-group-rows-wrapper">{children}</RowsWrapper>
        </Wrapper>
    );
};

export default OptionSettings;

