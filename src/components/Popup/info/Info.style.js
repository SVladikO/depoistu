import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
  * > div {
    margin: 0 0 20px 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 34px 0;
  & > a {
    color: ${COLOR.ACCENT3};
    font-size: 20px;
  }
  svg {
    display: block;
    margin: 0 0 10px 0;
  }
`;
