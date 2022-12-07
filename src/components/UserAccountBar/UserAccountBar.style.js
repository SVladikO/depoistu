import styled from 'styled-components';
import {COLOR, BORDER_RADIUS} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-radius: ${BORDER_RADIUS.SECOND};
  padding: 15px 20px;
`
export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Picture = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14.76px;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${COLOR.ACCENT1};
  margin-bottom: 3px;
`;
export const Status = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #8A8A8F;
`;
export const Anchor = styled.div`
    & > svg {
      fill: ${hexToRgbA('#000', 0.25)};
    }
`;
