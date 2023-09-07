import styled from "styled-components";
import {COLOR, FONT_22_500} from "../../utils/theme";

export const PopupButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
  width: 100%;
`;

export const PopupContentContainer = styled.div`
  padding: 16px;
  margin: 18px;
  background: ${COLOR.ACCENT4};
  border-radius: 5px;
`;
export const PopupTitle = styled.div`
  ${FONT_22_500};
  padding-bottom: 30px;
`;
