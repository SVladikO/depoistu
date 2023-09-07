import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT_16, FONT_16_700} from "../../utils/theme";

export const button = styled.button`
  ${FONT_16_700};
  color: ${COLOR.ACCENT4};
  width: ${p => p.isWide ? '100%' : 'auto'};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};
  height: 50px;
  padding: 10px 24px;
  border: none;
  border-radius: ${BORDER_RADIUS.BUTTON};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s;
  cursor: ${p => p.isDisabled ? 'default': 'pointer'} ;

  &:hover {
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.30);
  }

  &:active {
    opacity: 0.8;
  }
  
  & > svg {
    width: 12px;
    height: 12px;
    margin: ${p => p.isOnlyIcon ? 0 : '0 10px 0 0'};
  }
`;