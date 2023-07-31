import styled from "styled-components";
import {BORDER_RADIUS, COLOR, SHADOW} from "../../utils/theme";

export const Wrapper = styled.div`
  ${SHADOW};
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
  margin: 15px 0 15px 0;
  svg{
    width: 25px;
    height: 25px;
  }
`
export const ImagesWrapper = styled.div`
  min-width: 90px;
  min-height: 90px;
  max-width: 90px;
  max-height: 90px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  border: solid 1px ${COLOR.ACCENT4};
  margin: 0 10px 0 0;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    color: ${COLOR.ACCENT5};
  }
`;

export const FoodImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  margin: 0 5px 4px 0;
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
`;

export const Description = styled.div`
  //width: 250px;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  margin: 4px 0 18px 0;
`;

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    color: ${COLOR.ACCENT3};
  }
`;
export const EditLabel = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.PRIMARY};
  margin: 0 0 0 6px;
`;

export const AdditionalDetails = styled.div`
  display: flex;
  align-items: center;
  font-weight: 100;
  font-size: 18px;
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
