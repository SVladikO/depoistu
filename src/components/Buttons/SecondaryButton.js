import styled, {css} from "styled-components";
import {button, ButtonWrapper} from "./button";
import {COLOR, hexToRgbA, lighterDarkerColor, rotationAnimation} from "utils/theme";
import {ReactComponent as LoadingIcon} from "assets/icons/loading.svg";

export const SecondaryButtonWrapper = styled(button)`
  color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
  background: ${p => p.isDisabled ? hexToRgbA(COLOR.ACCENT5, 0.01) : hexToRgbA(COLOR.PRIMARY, 0.09)};
  border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};

  &:active {
    border: 2px solid ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -20) : lighterDarkerColor(COLOR.PRIMARY, -20)};
    color: ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -20) : lighterDarkerColor(COLOR.PRIMARY, -20)};
    background: ${p => p.isDisabled ? hexToRgbA(COLOR.ACCENT5, 0.04) : hexToRgbA(COLOR.PRIMARY, 0.2)};
  }

  & > svg {
    fill: ${COLOR.PRIMARY};
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  
  & > svg.loading {
    ${p => p.isLoading && css`animation: ${rotationAnimation} 1s infinite linear;`};
  }
`;

export const SecondaryButton = (props) => {
    const {children, isLoading, withPadding=false, clickHandler} = props
    return (
        <ButtonWrapper withPadding={withPadding}>
            <SecondaryButtonWrapper type={'button'} {...props} onClick={clickHandler}>
                {isLoading && <LoadingIcon className="loading"/>}
                {children}
            </SecondaryButtonWrapper>
        </ButtonWrapper>
    )
}