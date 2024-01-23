import React from 'react';
import {Wrapper} from "./instruction-for-business-owner.page.style";

import {useScrollUp} from "utils/hook";

const InstructionForBusinessOwnerPage = () => {
    useScrollUp();

    // Example how to setup youtobe video
    // https://www.youtube.com/watch?v=zXzBb-1mc6k
    // you have to replace only "watch?v=" with "embed/" and your video is ready to play in iframe.
    // https://www.youtube.com/embed/zXzBb-1mc6k?


    return (
        <Wrapper>
            <iframe
                width="360"
                height="360"
                src="https://www.youtube.com/embed/xddB4AFBgvo"
                allowfullscreen
            />
        </Wrapper>
    );
};

export default InstructionForBusinessOwnerPage;