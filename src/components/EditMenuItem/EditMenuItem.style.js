import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";
export const Wrapper = styled.div`
`;

export const MenuItemPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0 0 15px 0;
`;
export const ImagePlace = styled.div`
  width: 90px;
  height: 90px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 5px;
`;
