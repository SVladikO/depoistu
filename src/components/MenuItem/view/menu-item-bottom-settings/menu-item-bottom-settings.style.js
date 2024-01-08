import styled from "styled-components";
import {COLOR, FONT} from "../../../../utils/theme";

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    color: ${COLOR.ACCENT5};
  }
`;

export const EditRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    border-top: 1px solid ${COLOR.ACCENT1};

    & > div {
        border-right: 1px solid ${COLOR.ACCENT1};
    }
    
    & svg {
        fill: ${COLOR.ACCENT1};
    }

    .ToggleCheckbox, .EditButton {
        ${FONT.SIZE_16};
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
        padding: 8px 0;
    }

`;


export const EditLabel = styled.span`
  ${FONT.SIZE_16};
  color: ${COLOR.ACCENT1};
  margin: 0 0 0 6px;
`;
