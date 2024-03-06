import styled from "styled-components";

import {button, ButtonWrapper} from "./button";
import {ReactComponent as LoadingIcon} from "assets/icons/loading.svg";

import {COLOR, lighterDarkerColor} from "utils/theme";

const PrimaryButtonWrapper = styled(button)`
    color: ${p => p.isDisabled ? COLOR.WHITE : COLOR.WHITE};
    background: ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -20) : COLOR.PRIMARY};

    & > svg {
        fill: ${COLOR.WHITE};
    }
    
    &:active {
        background: ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -40) : lighterDarkerColor(COLOR.PRIMARY, -20)};
    }
`;

export const PrimaryButton = ({
                                  type='button',
                                  clickHandler,
                                  children,
                                  isLoading,
                                  isWide,
                                  isDisabled,
                                  isOnlyIcon,
                                  withPadding=false
}) => {
    return (
        <ButtonWrapper withPadding={withPadding}>
            <PrimaryButtonWrapper
                type={type}
                onClick={clickHandler}
                isWide={isWide}
                isDisabled={isDisabled}
                isPrimary
                isLoading={isLoading}
                isOnlyIcon={isOnlyIcon}
            >
                {isLoading && <LoadingIcon className="loading"/>}
                {children}
            </PrimaryButtonWrapper>
        </ButtonWrapper>
    )
}