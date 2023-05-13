import styled from "styled-components";
import {COLOR,BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`

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
  .swiper-pagination-bullet-active{
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
  & > * {
    width: 50%;
  }
  display: flex;
  justify-content: space-between;
`;
export const CompanyInfo = styled.div`
  margin: 10px auto 10px 10px;
  text-align: left;
  justify-self: start;
`;

export const ScheduleWrapper = styled.div`
  color: ${COLOR.ACCENT1};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  flex-wrap: nowrap;
  color: ${COLOR.ACCENT5};
`;
export const EditBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 27px;
  margin: 0 auto 10px auto;
  padding: 0 10px;
  & > * {
    display: flex;
    flex: 1;
  }
  & button {
    flex: 1;
  }
`;

export const Schedule = styled.div`
  display: flex;
  height: 19px;
`;

export const Open = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT3};
  display: inline-block;
  margin: 0 15px 0 0;
`;

export const Closes = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT5};
  position: relative;
  display: inline-block;
  & > span {
    padding: 0 10px 0 0;
  }
  &:before {
    content: ".";
    position: absolute;
    display: block;
    top: -16%;
    left: -8.5px;
  }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
`;

export const ScheduleContainer = styled.div`
 & > * {
   min-width: 50px;
 }  
`;
export const Address = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT5};
`;
