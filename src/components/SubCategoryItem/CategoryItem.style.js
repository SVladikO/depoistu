import styled from "styled-components";
import {COLOR, FONT, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  padding: 4px !important;
  height: 46px;
  border-radius: ${BORDER_RADIUS.SUB_CATEGORY};
  border: ${p => p.isSelected ? `solid 2px ${COLOR.WHITE}` : ''};
  color: ${COLOR.WHITE};
  ${FONT.SIZE_16};
  line-height: 16px;
  ${FONT.WEIGHT_700};
  text-align: center;
  
  &:hover {
    cursor: pointer;
  }
`;
