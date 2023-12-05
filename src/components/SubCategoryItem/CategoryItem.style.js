import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  padding: 2px !important;
  height: 38px;
  border-radius: ${BORDER_RADIUS.SUB_CATEGORY};
  border: ${p => p.isSelected ? `solid 2px ${COLOR.ACCENT4}` : ''};
  color: ${COLOR.ACCENT4};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 16px;
  
  &:hover {
    cursor: pointer;
  }
`;
