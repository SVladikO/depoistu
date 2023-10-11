import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_700};
  color: ${COLOR.ACCENT1};
`