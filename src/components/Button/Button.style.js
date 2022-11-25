import styled from 'styled-components'
import {BORDER_RADIUS, COLOR, GRADIENT} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const button = styled.button`
  padding: 12px;
  border: none;
  border-radius: ${BORDER_RADIUS.FOURTH};
  color: ${COLOR.ACCENT4};
  font-family: Lato;
`;

export const primary = styled(button)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
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

export const PrimaryWideButton = styled(primary)`
  font-weight: 700;
  width: 100%;
  height: 50px;

  & > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${COLOR.ACCENT4};
  }
`;

export const PrimaryRoundedButton = styled(primary)`
  border-radius: ${BORDER_RADIUS.FIRST};
  width: 100%;
`;

export const PrimaryWithIconButton = styled(withIcon)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  font-size: 16px;
  justify-content: stretch;
  padding: 12px 24px;
`;

export const SecondaryWithIconButton = styled(withIcon)`
  color: ${COLOR.ACCENT3};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};
  font-size: 16px;
  & > svg {
    fill: ${COLOR.ACCENT3};
    display: block;
  }
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
