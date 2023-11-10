import styled from "styled-components";

import {button, ButtonWrapper} from "./button";
import {ReactComponent as LoadingIcon} from "assets/icons/loading.svg";

import {COLOR} from "utils/theme";

const PrimaryButtonWrapper = styled(button)`
  color: ${p => p.isDisabled ? COLOR.ACCENT4 : COLOR.ACCENT10};
  background: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT3};

  & > svg {
    fill: ${COLOR.ACCENT10};
  }
  
  &:active {
    color: ${p => p.isDisabled ? COLOR.ACCENT4 : COLOR.ACCENT3};
    background: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT10};
  }
`;

export const PrimaryButton = ({type='button', clickHandler, children, isLoading, isWide, isDisabled, withPadding=false}) => {
    return (
        <ButtonWrapper withPadding={withPadding}>
            <PrimaryButtonWrapper
                type={type}
                onClick={clickHandler}
                isWide={isWide}
                isDisabled={isDisabled}
                isPrimary
                isLoading={isLoading}
            >
                {isLoading && <LoadingIcon className="loading"/>}
                {children}
            </PrimaryButtonWrapper>
        </ButtonWrapper>
    )
}