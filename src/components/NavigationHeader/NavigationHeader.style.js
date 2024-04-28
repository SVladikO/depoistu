import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 15px;
    background: ${COLOR.WHITE};
    position: relative;
    height: 54px;
    border-bottom: solid 1px ${COLOR.ACCENT9};
`;

export const CurrentLanguage = styled.div`
    ${FONT.SIZE_20};
    cursor: pointer;
`;

export const RightSubWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    & > svg {
      height: 19px;
      width: 22px;
    }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_600};
  justify-self: center;
  padding: 16px;
  color: ${COLOR.ACCENT1};
  display: block;
  z-index: 3;
`

export const BackButton = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 15px 20px 15px;
  z-index: 4;
  & > svg {
    height: 16px;
    width: 16px;
  
    fill: ${COLOR.ACCENT1};
  }
`;