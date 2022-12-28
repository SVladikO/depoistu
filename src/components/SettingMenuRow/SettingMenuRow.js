import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Title, LeftContent, RightContent, RightAnchor, Label} from "./SettingMenuRow.style";

import ToggleCheckbox from "../ToggleCheckbox/ToggleCheckbox";

const SettingMenuRow = ({
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
            <Wrapper className="account-menu-row">
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
            <Link to={href}>
                <Wrapper className="account-menu-row">
                    <LeftContent>
                        <Icon/>
                        <Title>{title}</Title>
                    </LeftContent>
                    <RightContent>
                        <Label>{label}</Label>
                        <RightAnchor/>
                    </RightContent>
                </Wrapper>
            </Link>
        )
    }
    const renderWithHandler = () => {
        return (
            <Wrapper onClick={changeHandler} className="account-menu-row">
                <LeftContent>
                    <Icon/>
                    <Title>{title}</Title>
                </LeftContent>

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

export default SettingMenuRow;