import styled from "styled-components";
import {COLOR, FONT, hexToRgbA} from "../../../../utils/theme";

export const Wrapper = styled.div`
  height: ${p => p.isHidden ? '0px' : 'auto'};
  padding: ${p => p.isHidden ? '0px' : '18px 0 16px 16px'};
  color: ${hexToRgbA(COLOR.ACCENT1, 0.7)};
  background: ${hexToRgbA(COLOR.ACCENT9, 0.5)};
  ${FONT.SIZE_18};
`;
