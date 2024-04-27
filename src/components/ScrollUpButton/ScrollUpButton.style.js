import styled from 'styled-components'
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const ToTopButtonWrapper = styled.div`
    top: -66px;
    position: absolute;
    
    z-index: 19;
    transform: rotate(180deg);
    box-sizing: border-box;
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${p => p.isVisible ? 'visible' : 'hidden'};
    border-radius: ${BORDER_RADIUS.CIRCLE};
    border: solid 2px ${COLOR.WHITE};
    background-color: ${COLOR.ACCENT1};
    box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.11);
    opacity: ${p => p.isVisible ? 1 : 0};
    transition: opacity 0.5s, visibility 0.3s;

    & > svg {
        fill: ${COLOR.WHITE};
    }
`