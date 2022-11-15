import styled from "styled-components";
import {COLOR} from "../../theme";

export const Wrapper = styled.div`
  width: 40px;
  background-color: ${COLOR.PRIMARY};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border-radius: 8px;
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
