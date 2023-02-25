import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const InvisibleWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  min-height: 100vh;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Wrapper = styled.div`
  min-width: 355px;
  min-height: 355px;
  max-width: 355px;
  max-height: 355px;
  background-color: ${COLOR.ACCENT4};
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
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