import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 15px 15px 15px 12px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  background-color: ${COLOR.ACCENT4};
  display: flex;
`;
export const Content = styled.div`
  padding-left: 15px;
  width: calc(100% - 15%);
`;

export const Row =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &:last-child {
    margin-top: 9px;
  }
`;
export const Status = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.PRIMARY};
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${COLOR.ACCENT1};
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${COLOR.ACCENT1};
`;
export const Size = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.ACCENT1};
  display: inline-flex;
  align-self: start;
`;
export const ColoredSize = styled.span`
  color: ${COLOR.PRIMARY};
  margin-left: 11px;
`;
export const Factor = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-right: 2px;
  color: ${COLOR.ACCENT1};
`;
export const PriceWrapper = styled.div`
  display: inline-flex;
  align-self: end;
  margin-top: 2px;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.PRIMARY};
`;