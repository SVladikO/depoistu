import React from 'react';
import {Wrapper, Title, LeftContent, RightContent,RightAnchor} from "./AccountMenuRow.style";
import {Link} from "react-router-dom";
import ToggleCheckbox from "../ToggleCheckbox/ToggleCheckbox";

const AccountMenuRow = ({
                            icon: Icon,
                            title,
                            href,
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
            <Link href={href}>
                <Wrapper>
                    <LeftContent>
                        <Icon/>
                        <Title>{title}</Title>
                    </LeftContent>
                    <RightContent>
                        <RightAnchor/>
                    </RightContent>
                </Wrapper>
            </Link>
        )
    }
    const renderWithHandler = () => {
        return (
            <Wrapper onChange={changeHandler}>
                <Icon/>
                <Title>{title}</Title>
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