import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  border-radius: ${BORDER_RADIUS.COMPANY};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  border-bottom: solid 1px ${COLOR.ACCENT5};

  .like_company_icon {
    fill: ${COLOR.ACCENT1};
  }
  
  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  border-top: solid 1px ${COLOR.ACCENT9};
  padding: 16px 16px 20px 16px;

    & > a {
        display: block;
    }

    svg.location_icon {
        height: 20px;
        width: 12px;
    }

    svg.time_icon {
        height: 18px;
        width: 15px;
    }
    svg.phone_icon {
        height: 18px;
        width: 18px;
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
