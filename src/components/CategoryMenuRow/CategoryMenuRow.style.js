import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const TopCategoryWrapper = styled.div`
  display: flex;
  &:after {
    border-bottom: solid 2px ${COLOR.ACCENT5};
  }
`;

export const TopCategoryItem = styled.div`
  color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT5};
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-bottom: solid 2px ${p => p.isSelected ? COLOR.ACCENT3 : ''};;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .swiper {
    display: flex;
    width: 100%;
    padding: 2px;
  }

  & > a {
    margin: 15px 0 0;
  }

  & > a:first-child,
  & > a:nth-child(2) {
    margin: 0;
  }
`;
