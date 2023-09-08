import styled from "styled-components";
import {BORDER_RADIUS, COLOR, rotationAnimation, FONT} from "../../utils/theme";

export const button = styled.button`
  height: 50px;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT.SIZE_20};
  
  border-radius: ${BORDER_RADIUS.BUTTON};
  ${p => p.isLoading && 'opacity: 0.7'};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};
  width: ${p => p.isWide ? '100%' : 'auto'};
  cursor: ${p => p.isDisabled ? 'default' : 'pointer'};

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