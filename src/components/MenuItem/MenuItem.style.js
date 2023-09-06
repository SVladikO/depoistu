import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT_14_BOLD, FONT_16, FONT_18_500, FONT_24_700, SHADOW} from "../../utils/theme";
import {Flex} from "../Flex/Flex.style";

export const Wrapper = styled.div`
  ${SHADOW};
  position: relative;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
  margin: 0 0 2px;
  svg{
    width: 25px;
    height: 25px;
  }
  background-color: ${({isVisible}) => isVisible ? 'none': COLOR.ERROR2};
  transition: background-color 0.5s;
`

export const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isWithImage ? '1fr 3fr': '1fr'};
  align-self:center
`

export const MainInfo = styled.div`
  padding: 16px;
`

export const NewFlag = styled.div`
  ${FONT_14_BOLD};
  position: absolute;
  padding: 5px 12px;
  background-color: ${COLOR.ACCENT3};
  color: ${COLOR.ACCENT4};
  z-index: 2;
`

export const ImagesWrapper = styled.div`
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  border: solid 1px ${COLOR.ACCENT4};
  margin: 16px 0 16px 16px;
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
  width: 80px;
  height: 80px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;

export const Title = styled.div`
  ${FONT_24_700};
  color: ${COLOR.ACCENT1};
  margin: 0 5px 4px 0;
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
`;

export const Description = styled.div`
  //width: 250px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin-top: 8px;
`;

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    color: ${COLOR.ACCENT5};
  }
`;

export const EditLabel = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 0 6px;
`;

export const AdditionalDetails = styled(Flex)`
  ${FONT_18_500};
  color: ${COLOR.ACCENT1};
  border-top: 1px solid ${p => p.isVisible ? COLOR.ACCENT8: COLOR.ACCENT4};
  padding: 16px;

  & > svg {
    fill: #b5b5b5;
    height: 14px;
    width: 16px;
    margin: 0 2px 0 0;
  } 
  
  & > svg:nth-child(2) {
    margin: 0 2px 0 12px;
  }
  
  .ToggleCheckbox {
    margin-left: auto;
  }
`;

export const GreyDot = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${COLOR.ACCENT8};
  border-radius: 50%;
  margin: 0 14px;
`

export const SeeMore = styled.span`
  cursor: pointer;
  color: ${COLOR.INFO1};
  &:hover {
    text-decoration: underline;
  }
`

export const StatusHidden = styled.div`
  ${FONT_16};
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${COLOR.ERROR1};
`

export const EditRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-top: 1px solid ${p => p.isVisible ? COLOR.ACCENT8: COLOR.ACCENT4};
  
  .ToggleCheckbox, .EditButton {
    ${FONT_16};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    padding: 8px 0;
  }
  
  .ToggleCheckbox {
    border-right: 1px solid ${p => p.isVisible ? COLOR.ACCENT8: COLOR.ACCENT4};
  }
  
  .EditButton {
    
  }
`;