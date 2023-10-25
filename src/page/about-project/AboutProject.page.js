import React from 'react';
import {Wrapper, Title, Description, AnswerWrapper, Answer} from "./AboutProject.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";

const AboutProjectPage = () => {
    useScrollUp();

    return (
        <Wrapper>
            {translate(TRANSLATION.PAGE.ABOUT_PROJECT.CONTENT).map(
                el => {
                    return (
                        <>
                            <Title>{el.question}</Title>

                            <Description>
                                {
                                    el.answers.map((answer, index) =>
                                        <AnswerWrapper withCounter={el.withCounter}>
                                            {el.withCounter ? index + 1 + '. ' : ''}
                                            <Answer withCounter={el.withCounter}>
                                                {answer}
                                            </Answer>
                                        </AnswerWrapper>
                                    )
                                }
                            </Description>
                        </>
                    )
                }
            )}
        </Wrapper>
    );
};

export default AboutProjectPage;