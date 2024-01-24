import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../../../utils/theme";


export const Wrapper = styled.div`
    overflow: hidden;
    position: relative;

    & > img {
        left: -1px;
        width: 101%;
        height: 280px;
        background: ${COLOR.ACCENT2};
        border: solid 1px ${COLOR.ACCENT4};
        position: relative;

        // & > img {
        //     width: 80px;
        //     height: 80px;
            //     border-radius: ${BORDER_RADIUS.CIRCLE};
        // }
        //
        // svg {
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     width: 12px;
        //     height: 12px;
            //     color: ${COLOR.ACCENT5};
        // }
    }
`;

export const LoadingWrapper = styled.div`
    position: absolute;
    top: 48%;
    left: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;