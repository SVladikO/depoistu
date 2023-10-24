import styled from "styled-components";

import {button, ButtonWrapper} from "./button";
import {ReactComponent as LoadingIcon} from "assets/icons/loading-white.svg";

import {COLOR} from "utils/theme";

const PrimaryButtonWrapper = styled(button)`
  color: ${COLOR.ACCENT4};
  background: ${p => p.isDisabled ? COLOR.ACCENT5 : p.isLoading ? COLOR.PRIMARY : COLOR.ACCENT3};
  pointer-events:${p => p.isDisabled ? 'none' : null};
  
  &:active {
    background: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
  }
`;

export const PrimaryButton = ({clickHandler = () => {}, children, isLoading, isWide, isDisabled, withPadding=false}) => {
    return (
        <ButtonWrapper withPadding={withPadding}>
            <PrimaryButtonWrapper
                onClick={() => !isLoading && clickHandler()}
                isWide={isWide}
                isPrimary
                isLoading={isLoading}
                isDisabled={isDisabled}
            >
                {isLoading && <LoadingIcon className="loading"/>}
                {children}
            </PrimaryButtonWrapper>
        </ButtonWrapper>
    )
}