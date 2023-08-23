import React from 'react';
import {Wrapper, Title, Description} from "./AboutUs.page.style";
import {currentLanguage, translate, TRANSLATION as TR} from "../../utils/translation";

debugger;
console.log(translate(TR.PAGE.ABOUT_US.CONTENT))
const AboutUsPage = () => {
    return (
        <Wrapper>
            {/*<Title>{TR.PAGE.ABOUT_US[currentLanguage][0].question}</Title>*/}
            {/*<Description>{TR.PAGE.ABOUT_US[currentLanguage][0].answer}</Description>*/}

        </Wrapper>
    );
};

export default AboutUsPage;