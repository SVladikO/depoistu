import React from 'react';
import {Wrapper, Title, Description} from "./AboutUs.page.style";
import {translate, TRANSLATION} from "../../utils/translation";

const AboutUsPage = () => {
    return (
        <Wrapper>
            {translate(TRANSLATION.PAGE.ABOUT_US.CONTENT).map(
                el => {
                    return (
                        <>
                            <Title>{el.question}</Title>
                            <Description>{el.answers.map(answer => <div>{answer}</div>)}</Description>
                        </>
                    )
                }
            )}
        </Wrapper>
    );
};

export default AboutUsPage;