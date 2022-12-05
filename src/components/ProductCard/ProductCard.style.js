import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection || 'row'};
  justify-content: ${p => p.justifyContent || 'norman'};
  ${p => p.margin ? `margin: ${p.margin}` : ''};
`;

export const FoodImage = styled.img`
  width: 85px;
  height: 85px;
  background: ${COLOR.ACCENT1};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 10px auto;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 12px 10px 20px;
  width: 155px;
  height: 230px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
`