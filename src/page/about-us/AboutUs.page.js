import React from 'react';
import {Wrapper,AboutUsItem, Title, Description} from "./AboutUs.page.style";
import {translate, TRANSLATION as TR} from "../../utils/translation";


const AboutUsPage = () => {
    return (
         <Wrapper>
            <AboutUsItem>
                <Title>{translate(TR.PAGE.ABOUT_US.WHO_WE_ARE.TOP_TITLE)}</Title>
                <Description>{translate(TR.PAGE.ABOUT_US.WHO_WE_ARE.DESCRIPTION)}</Description>
                <Description>{translate(TR.PAGE.ABOUT_US.WHO_WE_ARE.PROBLEM)}</Description>
            </AboutUsItem>
             <AboutUsItem>
                 <Title>{translate(TR.PAGE.ABOUT_US.WHAT_UNITED_US.TOP_TITLE)}</Title>
                 <Description>{translate(TR.PAGE.ABOUT_US.WHAT_UNITED_US.DESCRIPTION)}</Description>
             </AboutUsItem>
             <AboutUsItem>
                 <Title>{translate(TR.PAGE.ABOUT_US.WHEN_DID_WE_START.TOP_TITLE)}</Title>
                 <Description>{translate(TR.PAGE.ABOUT_US.WHEN_DID_WE_START.DESCRIPTION)}</Description>
             </AboutUsItem>
             <AboutUsItem>
                 <Title>{translate(TR.PAGE.ABOUT_US.WHEN_WAS_THE_FIRST_VERSION_RELEASED.TOP_TITLE)}</Title>
                 <Description>{translate(TR.PAGE.ABOUT_US.WHEN_WAS_THE_FIRST_VERSION_RELEASED.DESCRIPTION)}</Description>
             </AboutUsItem>
             <AboutUsItem>
                 <Title>{translate(TR.PAGE.ABOUT_US.MAIN_IDEA_OF_THE_PROJECT.TOP_TITLE)}</Title>
                 <Description>{translate(TR.PAGE.ABOUT_US.MAIN_IDEA_OF_THE_PROJECT.DESCRIPTION)}</Description>
                 <Description>{translate(TR.PAGE.ABOUT_US.MAIN_IDEA_OF_THE_PROJECT.PROBLEM)}</Description>
             </AboutUsItem>
             <AboutUsItem>
                 <Title>{translate(TR.PAGE.ABOUT_US.COST.TOP_TITLE)}</Title>
                 <Description>{translate(TR.PAGE.ABOUT_US.COST.DESCRIPTION)}</Description>
             </AboutUsItem>
         </Wrapper>
    );
};

export default AboutUsPage;