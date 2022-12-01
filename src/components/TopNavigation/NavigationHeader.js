import React from 'react';
import {BackgroundWrapper, Wrapper, Title, NestedContent, MainContent} from "./NavigationHeader.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const {title, href} = props;
    return (
        <BackgroundWrapper>
            <Wrapper>
                <MainContent>
                    {href && <a href={href}><BackArrow /></a>}
                    <Title>{title}</Title>
                </MainContent>
                <NestedContent>
                    {props.children}
                </NestedContent>
            </Wrapper>
        </BackgroundWrapper>
    );
};

export default NavigationHeader;

