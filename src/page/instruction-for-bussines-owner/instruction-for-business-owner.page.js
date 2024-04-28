import React from 'react';
import {Wrapper} from "./instruction-for-business-owner.page.style";

import {useScrollUp} from "utils/hook";
import {ContentContainer} from "components";

const InstructionForBusinessOwnerPage = () => {
    useScrollUp();

    // Example how to setup youtobe video
    // https://www.youtube.com/watch?v=zXzBb-1mc6k
    // you have to replace only "watch?v=" with "embed/" and your video is ready to play in iframe.
    // https://www.youtube.com/embed/zXzBb-1mc6k?

    return (
        <ContentContainer noShadow>
            <Wrapper>
                <iframe
                    width="360"
                    height="360"
                    src="https://www.youtube.com/embed/9i2023MsSHs"
                />
            </Wrapper>
        </ContentContainer>
    );
};

export default InstructionForBusinessOwnerPage;