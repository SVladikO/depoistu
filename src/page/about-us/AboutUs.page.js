import React from 'react';
import {Wrapper, Title, Description} from "./AboutUs.page.style";
import {translate, TRANSLATION} from "../../utils/translation";

console.log(translate(TRANSLATION.PAGE.ABOUT_US.CONTENT))
const AboutUsPage = () => {
    return (
        <Wrapper>
            {translate(TRANSLATION.PAGE.ABOUT_US.CONTENT).map(
                el => {
                    return (
                        <>
                            <Title>{el.question}</Title>
                            <Description>{el.answer.map(a => <div>{a}</div>)}</Description>
                        </>
                    )
                }
            )}
        </Wrapper>
    );
};

export default AboutUsPage;