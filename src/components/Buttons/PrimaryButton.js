import styled from "styled-components";
import {button} from "./button";
import {COLOR, GRADIENT, rotationAnimation} from "../../utils/theme";
import {ReactComponent as LoadingIcon} from "../../assets/icons/loading-white.svg";
import {useState} from "react";

const PrimaryButtonWrapper = styled(button)`
  background: ${p => p.isDisabled 
          ? COLOR.ERROR2
          : `linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO})`};
  color: ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT4};
  opacity: ${p => p.isClicked ? 0.8: 1};

  & > svg {
    fill: ${COLOR.ACCENT4};
    height: 20px;
    width: 20px;
    margin-right: 10px;
    animation: ${rotationAnimation} 1s infinite linear;
  }
`;

export const PrimaryButton = ({children, isLoading, isWide, isDisabled}) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <PrimaryButtonWrapper
            onClick={() => setIsClicked(true)}
            isWide={isWide}
            isDisabled={isDisabled}
            isPrimary
            isClicked={isClicked}
        >
            {isLoading && <LoadingIcon />}
            {children}
        </PrimaryButtonWrapper>
    )
}