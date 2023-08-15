import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const button = styled.button`
  color: ${COLOR.ACCENT4};
  width: ${p => p.isWide ? '100%' : 'auto'};
  height: 50px;
  padding: 12px 24px;
  border: none;
  border-radius: ${BORDER_RADIUS.FOURTH};
  font-size: 16px;
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