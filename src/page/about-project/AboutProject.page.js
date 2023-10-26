import React from 'react';
import {Wrapper, Title, Description, AnswerWrapper, Answer} from "./AboutProject.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION as TR, TRANSLATION} from "utils/translation";
import {ROUTER} from "../../utils/config";
import {PrimaryButton} from "../../components";
import {useNavigate} from "react-router-dom";

const AboutProjectPage = () => {
    useScrollUp();
    const navigate = useNavigate();

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

            <PrimaryButton isWide clickHandler={() => navigate(ROUTER.SEARCH.URL)}>
                {translate(TR.GO_TO_A_SEARCH_PAGE)}
            </PrimaryButton>
        </Wrapper>
    );
};

export default AboutProjectPage;