import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT, SHADOW} from "utils/theme";

export const Wrapper = styled.div`
  ${SHADOW};
  position: relative;
  width: 96%;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.MENU_ITEM};
  border: solid 1px ${COLOR.ACCENT9};
  margin: 0 auto 6px;
  svg{
    width: 25px;
    height: 25px;
  }
  background-color: ${({isVisible}) => isVisible ? 'none': COLOR.ERROR2};
  transition: background-color 0.5s;
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isWithImage ? '1fr 3fr': '1fr'};
  align-self:center
`

export const Info = styled.div`
  padding: 16px;
`

export const InfoOneRow = styled.div`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const NewFlag = styled.div`
  ${FONT.SIZE_14};
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

export const SizePriceWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const FoodTitle = styled.div`
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_600};
  color: ${COLOR.ACCENT1};
  margin: 0 5px 4px 0;
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
`;

export const Description = styled.div`
  ${FONT.SIZE_16};
  ${FONT.WEIGHT_400};
  margin-top: 8px;
  margin-right: 58px;
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
  ${FONT.SIZE_16};
  color: ${COLOR.ACCENT1};
  margin: 0 0 0 6px;
`;

export const SeeMore = styled.span`
  cursor: pointer;
  color: ${COLOR.INFO1};
  &:hover {
    text-decoration: underline;
  }
`;

export const SizePriceTd = styled.td`
  ${FONT.SIZE_20};
  text-align: right;
`;

export const EditRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-top: 1px solid ${p => p.isVisible ? COLOR.ACCENT8: COLOR.ACCENT4};
  
  .ToggleCheckbox, .EditButton {
    ${FONT.SIZE_16};
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
  
`;