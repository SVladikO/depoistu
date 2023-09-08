import styled from "styled-components";
import {BORDER_RADIUS, COLOR, rotationAnimation, FONT} from "../../utils/theme";

export const button = styled.button`
  ${FONT.SIZE_20};
  color: ${COLOR.ACCENT4};
  width: ${p => p.isWide ? '100%' : 'auto'};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};
  height: 50px;
  padding: 10px 24px;
  border: ${p => p.isPrimary ? 'none' : `2px solid ${COLOR.PRIMARY}`};
  border-radius: ${BORDER_RADIUS.BUTTON};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${p => p.isDisabled ? 'default' : 'pointer'};
  box-sizing: border-box;

  &:active {
    border: ${p => p.isPrimary && p.isDisabled ? 'none' : `2px solid ${COLOR.PRIMARY}`};
    padding: ${p => p.isPrimary && !p.isDisabled ? '10px 22px' : `10px 24px`};
  }

  & > svg {
    width: 12px;
    height: 12px;
    margin: ${p => p.isOnlyIcon ? 0 : '0 10px 0 0'};
  }

  & > svg.loading {
    fill: ${COLOR.ACCENT4};
    height: 20px;
    width: 20px;
    margin-right: 10px;
    animation: ${rotationAnimation} 1s infinite linear;
  }
`;