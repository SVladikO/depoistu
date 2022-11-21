import styled from 'styled-components'
import {COLOR, GRADIENT} from "../../theme";
import {hexToRgbA} from "../../utils";

export const button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: ${COLOR.ACCENT4};
  font-family: Lato;
`;

export const primary = styled(button)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
`;

export const withIcon = styled(button)`
  display: flex;
  align-items: center;
  padding: 12px 26px;

  & > svg {
    fill: ${COLOR.ACCENT4};
    width: 12.8px;
    height: 13.05px;
    margin: 0 12px 0 0;
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
  border-radius: 20px;
  width: 100%;
`;

export const PrimaryWithIconButton = styled(withIcon)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  @media (max-width: 390px) and (min-width: 320px)  {
    min-width: 110px;
    height: 45px;
    justify-content: stretch;
    padding: 12px 24px;
  }
`;

export const SecondaryButton = styled(button)`
    color: ${COLOR.PRIMARY};
    background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};
    font-weight: 700;
    padding: 12px 24px;
`;

export const SecondaryWithIconButton = styled(withIcon)`
  color: ${COLOR.ACCENT3};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};
  
  & > svg {
    fill: ${COLOR.ACCENT3};
    display: block;
  }
  @media (max-width: 390px) and (min-width: 320px)  {
    max-width: 130px;
    height: 45px;
    padding: 12px 17px 12px 20px;
  }
  @media (max-width: 350px) and (min-width: 320px)  {
    max-width: 110px;
    height: 45px;
    padding: 12px 12px;
  }
`;

export const ThirdButton = styled(button)`
  background: ${COLOR.PRIMARY};
  font-weight: 700;
  padding: 12px 24px;
`;
