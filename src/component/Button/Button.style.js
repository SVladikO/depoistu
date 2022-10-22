import styled from 'styled-components'
import {THEME} from "../../theme";

export const Wrapper = styled.div``;

export const Primary = styled.button`
  color: ${THEME.COLOR.LIGHT};
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
  border-radius: 5px;
  padding: 12px;
  border: none;
  font-family: LatoBold;
`;

export const PrimaryBold = styled.button`
  color: ${THEME.COLOR.LIGHT};
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
  border-radius: 5px;
  padding: 12px;
  border: none;
  font-family: LatoBold;
`;

export const PrimaryWithIcon = styled.button`
  color: ${THEME.COLOR.LIGHT};
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
  border-radius: 5px;
  padding: 12px;
  border: none;
  font-family: LatoRegular;
  font-weight: 500;
`;
export const Secondary = styled.button`

`;