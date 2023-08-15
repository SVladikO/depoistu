import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 10px;
  border: solid 1px ${p => p.isSelected ? COLOR.ACCENT3 : COLOR.ACCENT5};
  border-radius: ${BORDER_RADIUS.FOURTH};
  color: ${props => props.isSelected ? COLOR.ACCENT3 : COLOR.ACCENT1};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 12px;
`;
