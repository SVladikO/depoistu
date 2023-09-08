import styled from "styled-components";
import {button} from "./button";
import {ReactComponent as LoadingIcon} from "../../assets/icons/loading-white.svg";
import {COLOR, GRADIENT} from "../../utils/theme";

const PrimaryButtonWrapper = styled(button)`
  background: ${p => p.isDisabled 
          ? COLOR.ERROR2
          : `linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO})`};
  color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT4};


`;

export const PrimaryButton = ({clickHandler, children, isLoading, isWide, isDisabled}) => {
    return (
        <PrimaryButtonWrapper
            onClick={clickHandler}
            isWide={isWide}
            isDisabled={isDisabled}
            isPrimary
        >
            {isLoading && <LoadingIcon />}
            {children}
        </PrimaryButtonWrapper>
    )
}