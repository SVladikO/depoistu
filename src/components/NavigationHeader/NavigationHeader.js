import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {Wrapper, Title, NestedContent, MainContent} from "./NavigationHeader.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const params = useParams();
    const {title, getTitle, backUrl} = props;
    let _title = title || getTitle(params)

    return (
            <Wrapper className='pm-NavigationHeader'>
                <MainContent>
                    {backUrl && <Link to={backUrl}><BackArrow /></Link>}
                    <Title>{_title}</Title>
                </MainContent>
                <NestedContent>
                    {props.children}
                </NestedContent>
            </Wrapper>
    );
};

export default NavigationHeader;

