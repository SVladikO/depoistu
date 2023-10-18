import styled, {css} from "styled-components";
import {button, ButtonWrapper} from "./button";
import {COLOR, hexToRgbA, rotationAnimation} from "utils/theme";
import {ReactComponent as LoadingIcon} from "assets/icons/loading-red.svg";

export const SecondaryButtonWrapper = styled(button)`
  color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT3};
  background: ${p => p.isDisabled ? COLOR.ACCENT4 : hexToRgbA(COLOR.ACCENT3, 0.1)};
  border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT3};

  &:active {
    border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
    color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
  }

  & > svg {
    fill: ${COLOR.ACCENT3};
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  
  & > svg.loading {
    ${p => p.isLoading && css`animation: ${rotationAnimation} 1s infinite linear;`};
  }
`;

export const SecondaryButton = (props) => {
    const {children, clickHandler = () => {}, isLoading, isDisabled, withPadding=false} = props;
    return (
        <ButtonWrapper withPadding={withPadding}>
            <SecondaryButtonWrapper {...props} onClick={()=>!isLoading && clickHandler()}>
                {isLoading && <LoadingIcon className="loading"/>}
                {children}
            </SecondaryButtonWrapper>
        </ButtonWrapper>
    )
}