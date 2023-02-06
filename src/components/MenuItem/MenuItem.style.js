import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  padding: 10px;
  min-height: 116px;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
  svg{
    width: 25px;
    height: 25px;
  }
`

export const FoodImage = styled.img`
  min-width: 90px;
  min-height: 90px;
  max-width: 90px;
  max-height: 90px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  border: solid 1px ${COLOR.ACCENT4};
  margin: 0 10px 0 0;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 4px;
`;

export const Description = styled.div`
  //width: 250px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 4px 0 28px 0;
`;
export const InvisibleDivider = styled.div`
  opacity: 0;
  height: 10px;
`;
export const AdditionalDetails = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT5};

  & > svg {
    fill: #b5b5b5;
    height: 14px;
    width: 14px;
    margin: 0 2px 0 0;
  } 
  
  & > svg:nth-child(2) {
    margin: 0 2px 0 12px;
  }
`;
