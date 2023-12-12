import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  border-radius: ${BORDER_RADIUS.COMPANY};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  border-bottom: solid 1px ${COLOR.ACCENT5};

  .like_company_icon {
    fill: ${COLOR.ACCENT1};
  }
  
  &:hover {
    cursor: pointer;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: ${COLOR.ACCENT4};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${COLOR.ACCENT3};
  }
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > svg {
    height: 30px;
    width: 30px;
  }
`;

export const Content = styled.div`
  padding: 16px 16px 20px 16px;
`;

export const CompanyInfo = styled.div`
  & > a {
    display: block;
  }
  
  svg.location_icon {
    height: 20px;
    width: 12px;
  } 
  
  svg.time_icon {
    height: 18px;
    width: 15px;
  } 
  svg.phone_icon {
    height: 18px;
    width: 18px;
  }
  
  & > div,
  & > a,
  & > button {
    margin: 0 0 6px 0;
  }

  & > *:last-child {
    margin: 0;
  }
`;

export const Schedule = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
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