import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 2px;
  border: solid 1px ${p => p.isSelected ? COLOR.PRIMARY : COLOR.ACCENT5};
  border-radius: ${BORDER_RADIUS.SUB_CATEGORY};
  color: ${props => props.isSelected ? COLOR.PRIMARY : COLOR.ACCENT1};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 16px;
  
  &:hover {
    cursor: pointer;
  }
`;
