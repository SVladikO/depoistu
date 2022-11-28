import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  width: 40px;
  background-color: ${COLOR.PRIMARY};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border-radius: ${BORDER_RADIUS.THIRD};
  color: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    fill: ${COLOR.ACCENT4};
    width: 9.61px;
    height: 9.2px;
  }
`

export const Text = styled.span`
  box-sizing: border-box;
  margin: 0 2.4px 0 0;
`;
