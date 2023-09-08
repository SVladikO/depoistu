import styled from "styled-components";

import {ReactComponent as LoadingIcon} from "../../assets/icons/loading-white.svg";
import {button} from "./button";
import {COLOR} from "../../utils/theme";

const PrimaryButtonWrapper = styled(button)`
  color: ${COLOR.ACCENT4};
  background: ${p => p.isDisabled ? COLOR.ACCENT5 : p.isLoading ? COLOR.PRIMARY : COLOR.ACCENT3};

  &:active {
    background: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.PRIMARY};
  }
`;

export const PrimaryButton = ({clickHandler, children, isLoading, isWide, isDisabled, withContainerPadding}) => {
    return (
        <PrimaryButtonWrapper
            onClick={clickHandler}
            isWide={isWide}
            isDisabled={isDisabled}
            isPrimary
            isLoading={isLoading}
        >
            {isLoading && <LoadingIcon className="loading"/>}
            {children}
        </PrimaryButtonWrapper>
    )
}