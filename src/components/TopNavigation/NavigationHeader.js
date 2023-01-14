import React from 'react';
import {Wrapper, Title, NestedContent, MainContent} from "./NavigationHeader.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";
import {useParams} from "react-router-dom";

const NavigationHeader = (props) => {
    const params = useParams();
    const {title, getTitle, href} = props;
    let _title = title || getTitle(params)

    return (
            <Wrapper>
                <MainContent>
                    {href && <a href={href}><BackArrow /></a>}
                    <Title>{_title}</Title>
                </MainContent>
                <NestedContent>
                    {props.children}
                </NestedContent>
            </Wrapper>
    );
};

export default NavigationHeader;

