import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  padding: 10px;
  height: 116px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
`

export const FoodImage = styled.img`
  min-width: 60px;
  min-height: 60px;
  max-width: 60px;
  max-height: 60px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  border: solid 1px ${COLOR.ACCENT4};
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 100;
`;

export const AdditionalDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${COLOR.ACCENT1};

  & > svg {
    fill: ${COLOR.ACCENT1};
    height: 14px;
    width: 14px;
  } 
  
  & > svg:nth-child(2) {
    margin: 0 0 0 10px;
  }
`;
