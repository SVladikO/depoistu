import styled from "styled-components";
import {COLOR, BORDER_RADIUS, SHADOW} from "utils/theme";

export const Wrapper = styled.div`
  ${SHADOW};
  border-radius: ${BORDER_RADIUS.COMPANY};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  margin: ${p => p.withMoreInfo ? '0 0 2px 0' : '0 0 10px 0'};
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background-color: ${COLOR.ACCENT4};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${COLOR.ACCENT3};
  }
`;

export const ImageSection = styled.div`
  display: flex;
  height: 200px;
  max-height: 200px;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Content = styled.div`
  padding: 16px 16px 20px 16px;
`;

export const CompanyInfo = styled.div`
  & > * {
    margin: 0 0 10px 0;
  }

  & > *:last-child {
    margin: 0;
  }
`;

export const Schedule = styled.div`
  display: flex;
  height: 19px;
  margin: 0 0 12px 0;
`;

export const OpenStatus = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  display: inline-flex;
  margin: 0 7px 0 0;
  
  svg {
    display: inline-block;
    width: 15px;
    height: 18px;
    color: ${COLOR.ACCENT1};
    margin: 4px 8px 0 -1px;
  }
`;
export const CloseStatus = styled.span`
  color: ${COLOR.ACCENT1};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: inline-flex;
  svg {
    display: inline-block;
    width: 15px;
    height: 18px;
    color: ${COLOR.ACCENT1};
    margin: 4px 8px 0 -1px;
  }
`;

export const Closes = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  position: relative;
  display: inline-block;
 
  & > span {
    display: inline-block;
  }
  
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 16px 0;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 20px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  border: ${props => props.withAdditionalStyles ? `1px solid ${COLOR.ACCENT5}` : 'none'};
  //padding: ${props => props.withAdditionalStyles ? '2px 10px 4px 10px' : '0'};
  margin: 0 0 10px 0;
  color: ${COLOR.ACCENT1};
  svg {
    width: 10px;
    height: 16px;
    display: block;
    margin: 0 10px 0 0;
    color: ${COLOR.ACCENT1};
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT5};
 
`;