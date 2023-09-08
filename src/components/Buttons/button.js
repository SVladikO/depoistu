import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const button = styled.button`
  color: ${COLOR.ACCENT4};
  width: ${p => p.isWide ? '100%' : 'auto'};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};
  height: 50px;
  padding: 12px;
  border: none;
  border-radius: ${BORDER_RADIUS.FOURTH};
  font-size: 20px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 12px;
    height: 12px;
    margin: ${p => p.isOnlyIcon ? 0 : '0 10px 0 0'};
  }
`;