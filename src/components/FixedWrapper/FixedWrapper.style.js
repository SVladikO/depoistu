import styled from "styled-components";
import {DEVICE_WIDTH} from "utils/theme";

export const FixedWrapper = styled.div`
  position: fixed;
  z-index: 10;
  ${p => p.fixTop ? 'top: 0' : ''};
  ${p => p.fixBottom ? 'bottom: 0' : ''};
  left: 0;
  right: 0;
  transition: top 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    width: 100%;
    min-width: ${DEVICE_WIDTH.MIN};
    max-width: ${DEVICE_WIDTH.MAX};
  }
`;