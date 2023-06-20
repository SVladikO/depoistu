import styled from "styled-components";
import {COLOR, BORDER_RADIUS, SHADOW} from "../../utils/theme";

export const Wrapper = styled.div`
  ${SHADOW};
  border-radius: ${BORDER_RADIUS.SECOND};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  margin: 0 0 10px 0;
  
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
  padding: 10px;
`;
export const CompanyInfo = styled.div`
  & > button {
    margin: 0 0 10px 0;
  }
`;

export const Schedule = styled.div`
  display: flex;
  height: 19px;
  margin: 0 0 10px 0;
`;

export const OpenStatus = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  display: inline-block;
  margin: 0 15px 0 0;
`;
export const CloseStatus = styled.span`
  color: ${COLOR.ACCENT1};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const Closes = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT5};
  position: relative;
  display: inline-block;

  & > span {
    display: inline-block;
    margin: 0 0 0 10px;
  }

  &:before {
    content: ".";
    position: absolute;
    display: block;
    top: -25%;
    left: -8.5px;
  }
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLOR.ACCENT1};
`;

export const LocationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: ${BORDER_RADIUS.FOURTH};
  border: ${props => props.withAdditionalStyles ? `1px solid ${COLOR.ACCENT5}` : 'none'};
  padding: ${props => props.withAdditionalStyles ? '2px 10px 4px 10px' : '0'};
  margin: 0 0 10px 0;
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
  svg {
    width: 10px;
    height: 16px;
    display: block;
    margin: 0 10px 0 0;
  }
`;