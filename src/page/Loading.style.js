import styled from "styled-components";
import {THEME} from "../theme";

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(flex)`
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
  min-height: 100%;
`;

export const Content = styled(flex)`
  flex-direction: column;
  width: 266px;
  height: 266px;
  border-radius: 50%;
  background: ${THEME.COLOR.ACCENT4};
  border: solid 13px ${THEME.COLOR.ACCENT3};
`;

export const LogoText = styled(flex)`
  color: ${THEME.COLOR.PRIMARY};
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;;
`;


