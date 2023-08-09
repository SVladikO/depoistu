import styled, {css} from 'styled-components'
import {BORDER_RADIUS, COLOR, GRADIENT, hexToRgbA, rotationAnimation} from "../../utils/theme";

export const button = styled.button`
  color: ${COLOR.ACCENT4};
  width: ${p => p.isWide ? '100%' : 'auto'};
  height: 50px;
  padding: 12px 24px;
  border: none;
  border-radius: ${BORDER_RADIUS.FOURTH};
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 12px;
    height: 12px;
    margin: ${p => p.isOnlyIcon ? 0 : '0 10px 0 0'};
  }
`;

export const PrimaryButtonStyle = styled(button)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});

  & > svg {
    fill: ${COLOR.ACCENT4};
  }

  ${({isLoading}) => isLoading && css`
    cursor: default;
    background: ${COLOR.ACCENT5};

    & > svg {
      margin-right: 10px;
      animation: ${rotationAnimation} 1s infinite linear;
    }
    
    &::after {
      display: inline-block;
      animation: appearingDots steps(1, end) 2s infinite;
      content: '';
    }

    @keyframes appearingDots {
        0% {content: '';}
        25% {content: '.';}
        50% {content: '..';}
        75% {content: '...';}
        100% {content: '';}
      }
    `}
`;

export const SecondaryButton = styled(button)`
  color: ${COLOR.ACCENT3};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};

  & > svg {
    fill: ${COLOR.ACCENT3};
  }
`;

export const ThirdButton = styled(button)`
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.FOURTH};
  color: ${COLOR.ACCENT5};
  border: 1px solid ${COLOR.ACCENT5};
  padding: 2px 10px 4px 10px;
  display: block;
  height: auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  & > svg {
    width: 15px;
    height: 15px;
    color: ${COLOR.ACCENT3};
    fill: ${COLOR.ACCENT3};
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;
