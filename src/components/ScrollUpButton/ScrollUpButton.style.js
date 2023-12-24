import styled from 'styled-components'
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const ToTopButtonWrapper = styled.a`
    position: fixed;
    bottom: 103px;
    right: ${p => `calc(100vw / 2 - ${p.rightMargin})`};
    z-index: 19;
    transform: rotate(180deg);
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${p => p.isVisible ? 'visible' : 'hidden'};
    border-radius: ${BORDER_RADIUS.CIRCLE};
    background-color: ${COLOR.ACCENT1};
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.11);
    opacity: ${p => p.isVisible ? 1 : 0};
    transition: opacity 0.5s, visibility 0.3s;
    border: solid 2px ${COLOR.ACCENT4};

    & > svg {
        fill: ${COLOR.ACCENT4};
    }
`