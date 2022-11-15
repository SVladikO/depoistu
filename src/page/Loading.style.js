import styled from "styled-components";
import {COLOR, GRADIENT} from "../theme";

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(flex)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  min-height: 100%;
`;

export const Content = styled(flex)`
  flex-direction: column;
  width: 228px;
  height: 228px;
  border-radius: 50%;
  background: ${COLOR.ACCENT4};
  border: solid 13px ${COLOR.ACCENT3};
  
  & > svg {
    width: 140px;
    height: 140px;
    fill: ${COLOR.PRIMARY};
  }
`;

export const LogoText = styled(flex)`
  color: ${COLOR.PRIMARY};
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;;
`;


