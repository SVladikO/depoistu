import styled from 'styled-components'
import {THEME} from "../../theme";
import {hexToRgbA} from "../../utils";

export const button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: ${THEME.COLOR.LIGHT};
  font-family: LatoRegular;
`;

export const primary = styled(button)`
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
`;

export const withIcon = styled(button)`
  display: flex;
  align-items: center;
  padding: 12px 26px;

  & > svg {
    fill: ${THEME.COLOR.LIGHT};
    width: 12.8px;
    height: 13.05px;
    margin: 0 12px 0 0;
  }
`;

export const PrimaryWideButton = styled(primary)`
  font-family: LatoBold;
  width: 100%;
`;

export const PrimaryRoundedButton = styled(primary)`
  border-radius: 20px;
  width: 100%;
`;

export const PrimaryWithIconButton = styled(withIcon)`
  background-image: linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});
`;

export const SecondaryButton = styled(button)`
    color: ${THEME.COLOR.PRIMARY};
    background: ${hexToRgbA(THEME.COLOR.SECONDARY, 0.1)};
    font-family: LatoBold;
    padding: 12px 24px;
`;

export const SecondaryWithIconButton = styled(withIcon)`
  color: ${THEME.COLOR.SECONDARY};
  background: ${hexToRgbA(THEME.COLOR.SECONDARY, 0.1)};
  
  & > svg {
    fill: ${THEME.COLOR.SECONDARY}
  }
`;

export const ThirdButton = styled(button)`
  background: ${THEME.COLOR.PRIMARY};
  font-family: LatoBold;
  padding: 12px 24px;
`;