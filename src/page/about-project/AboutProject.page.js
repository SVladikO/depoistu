import React from 'react';
import {Wrapper, Title, Description, AnswerWrapper, Answer} from "./AboutProject.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION as TR, TRANSLATION} from "utils/translation";
import {ROUTER} from "../../utils/config";
import {PrimaryButton, RowSplitter} from "../../components";
import {useNavigate} from "react-router-dom";

const AboutProjectPage = () => {
    useScrollUp();
    const navigate = useNavigate();

    return (
        <Wrapper>
            {translate(TRANSLATION.PAGE.ABOUT_PROJECT.CONTENT).map(
                el => {
                    return (
                        <div key={el.question + '_wrapper'}>
                            <Title key={el.question} className="question_title">{el.question}</Title>

                            <Description key={el.question + '_description'}>
                                {
                                    el.answers.map((answer, index) =>
                                        <AnswerWrapper withCounter={el.withCounter} key={answer}>
                                            {el.withCounter ? index + 1 + '. ' : ''}
                                            <Answer withCounter={el.withCounter}>
                                                {answer}
                                            </Answer>
                                        </AnswerWrapper>
                                    )
                                }
                            </Description>
                        </div>
                    )
                }
            )}
            <RowSplitter height="30px" />
            <PrimaryButton isWide clickHandler={() => navigate(ROUTER.SEARCH.URL)}>
                {translate(TR.GO_TO_A_SEARCH_PAGE)}
            </PrimaryButton>
        </Wrapper>
    );
};

export default AboutProjectPage;