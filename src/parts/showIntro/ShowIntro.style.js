import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const Overflow = styled.div`
  overflow: scroll;
  height: 80vh;
`;
export const Wrapper = styled.div`
  height: 700px;
  margin: 0 0 40px 0;
  padding: 40px 23px 100px;

  & > * {
    margin-bottom: 22px;
  }
  
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 34px 0;

  svg {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 0 10px 0;
  }
`;

export const Address = styled.div`
  color: ${COLOR.ACCENT1};
  ${FONT.SIZE_22};
  display: flex;
  justify-content: center;
`;