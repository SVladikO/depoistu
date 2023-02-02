import styled from 'styled-components';
import {COLOR, BORDER_RADIUS} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
`
export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Avatar = styled.img`
  display: block;
  width: 127px;
  height: 127px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 0 auto;
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.PRIMARY};
  margin: 0 0 11px 0;
`;
export const Phone = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8A8A8F;
`;
export const Anchor = styled.div`
    & > svg {
      fill: ${hexToRgbA('#000', 0.25)};
    }
`;
