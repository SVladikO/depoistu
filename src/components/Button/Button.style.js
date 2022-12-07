import styled from 'styled-components'
import {BORDER_RADIUS, COLOR, GRADIENT} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const button = styled.button`
  height: 50px;
  padding: 12px;
  border: none;
  border-radius: ${BORDER_RADIUS.FOURTH};
  color: ${COLOR.ACCENT4};
  font-family: Lato;
  font-size: 16px;
  line-height: 19px;
`;

export const SecondaryButton = styled(button)`
  color: ${COLOR.PRIMARY};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};
  font-weight: 700;
  padding: 12px 24px;
`;

export const ThirdButton = styled(button)`
  background: ${COLOR.PRIMARY};
  font-weight: 700;
  padding: 12px 24px;
`;


export const primary = styled(button)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
`;

export const PrimaryWideButton = styled(primary)`
  width: 100%;
  color: ${COLOR.ACCENT4};
`;

export const PrimaryRoundedButton = styled(primary)`
  border-radius: ${BORDER_RADIUS.FIRST};
  width: 100%;
`;

export const withIcon = styled(button)`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  height: 45px;
  min-width: 132px;

  & > svg {
    fill: ${COLOR.ACCENT4};
    width: 12.8px;
    height: 13.05px;
    margin: 2px 12px 0 0;
  }
`;

export const PrimaryWithIconButton = styled(withIcon)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  justify-content: stretch;
  padding: 12px 24px;
`;

export const SecondaryWithIconButton = styled(withIcon)`
  color: ${COLOR.ACCENT3};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};

  & > svg {
    fill: ${COLOR.ACCENT3};
    display: block;
  }
`;

