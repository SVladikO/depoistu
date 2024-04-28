import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  border-radius: ${BORDER_RADIUS.COMPANY};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.WHITE};
  border-top: 1px solid ${COLOR.ACCENT9};
  border-bottom: 1px solid ${COLOR.ACCENT9};
  
  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  border-top: solid 1px ${COLOR.ACCENT9};
  padding: 14px 15px 24px;

    & > a {
        display: block;
    }

    & > div:first-child {
        margin: 0 0 10px 0;
    }
    & > div,
    & > a,
    & > button {
        margin: 0 0 6px 0;
    }

    & > *:last-child {
        margin: 0;
    }
`;
