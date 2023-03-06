import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  min-width: 355px;
  max-width: 355px;
  min-height: 355px;
  max-height: 60vh;
  background-color: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  z-index: 100;

  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export const BackButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  font-size: 16px;
  color: ${COLOR.ACCENT5};
  
  & > svg {
    position: relative;
    top: 3px;
    left: -2px;
    height: 12px;
    fill: ${COLOR.ACCENT5};
  }
`;

export const Image = styled.img`
  min-width: 335px;
  min-height: 335px;
  max-width: 335px;
  max-height: 335px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;
export const CitiesContentBox = styled(Wrapper)`
  flex-direction: column;
  min-width: 355px;
  min-height: 480px;
  max-width: 355px;
  max-height: 500px;
`;