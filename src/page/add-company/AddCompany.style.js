import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  & > * {
    margin: 0 0 15px 0;
  }
`;

export const WarningText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${COLOR.ACCENT6};
  max-width: 200px;
  margin: 0 auto 5px auto;
`;

