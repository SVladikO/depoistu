import React from 'react';
import {Wrapper, Title, LeftContent, RightContent, RightAnchor, CustomLink, Label} from "./AccountMenuRow.style";
import ToggleCheckbox from "../ToggleCheckbox/ToggleCheckbox";

const AccountMenuRow = ({
                            icon: Icon,
                            title,
                            href,
                            label,
                            changeHandler,
                            toggleHandler,
                            toggleStatus
                        }) => {

    const renderWithToggle = () => {
        return (
            <Wrapper>
                <LeftContent>
                    <Icon/>
                    <Title>{title}</Title>
                </LeftContent>
                <RightContent>
                    <ToggleCheckbox checked={toggleStatus} changeHandler={toggleHandler}/>
                </RightContent>
            </Wrapper>
        )
    }
    const renderAsLink = () => {
        return (
            <CustomLink href={href}>
                <Wrapper>
                    <LeftContent>
                        <Icon/>
                        <Title>{title}</Title>
                    </LeftContent>
                </Wrapper>
            </CustomLink>
        )
    }
    const renderWithHandler = () => {
        return (
            <Wrapper onChange={() => changeHandler}>
                <LeftContent>
                    <Icon/>
                    <Title>{title}</Title>
                </LeftContent>
                <RightContent>
                    <Label>{label}</Label>
                    <RightAnchor/>
                </RightContent>
            </Wrapper>
        )
    }

    if (toggleHandler) {
        return renderWithToggle();
    }

    if (href) {
        return renderAsLink();
    }

    if (changeHandler) {
        return renderWithHandler();
    }
};

export default AccountMenuRow;