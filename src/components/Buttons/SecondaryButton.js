import styled, {css} from "styled-components";
import {button, ButtonWrapper} from "./button";
import {COLOR, hexToRgbA, rotationAnimation} from "utils/theme";
import {ReactComponent as LoadingIcon} from "assets/icons/loading.svg";

export const SecondaryButtonWrapper = styled(button)`
  color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
  background: ${p => p.isDisabled ? COLOR.ACCENT4 : hexToRgbA(COLOR.ACCENT3, 0.1)};
  border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};

  &:active {
    border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
    color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
    background: ${p => p.isDisabled ? COLOR.ACCENT4 : hexToRgbA(COLOR.ACCENT3, 0.4)};
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