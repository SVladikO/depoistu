import styled from "styled-components";
import {COLOR, GRADIENT} from "../utils/theme";
import {hexToRgbA} from "../utils/utils";

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(flex)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  height: 100vh;
`;

export const Content = styled(flex)`
  flex-direction: column;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: ${COLOR.ACCENT4};
  border: solid 13px ${hexToRgbA(COLOR.ACCENT3, 0.86)};
  
  & > svg {
    width: 122px;
    height: 110px;
  }
`;

export const LogoText = styled(flex)`
  color: ${COLOR.PRIMARY};
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
`;


