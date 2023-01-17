import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from '../../utils/theme';

export const Wrapper = styled.div`
  padding: 15px 15px 15px 12px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  background-color: ${COLOR.ACCENT4};
  display: flex;
  min-width: 325px;
`;
export const Content = styled.div`
  padding-left: 15px;
  width: calc(100% - 15%);
`;
export const Row =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  &:last-child {
    margin-top: 9px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${p => p.status ? COLOR.ACCENT1 : COLOR.PRIMARY};
  margin-bottom: 2px;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.ACCENT1};
`;
export const Factor = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.ACCENT1};
  margin-right: 2px;
`;

export const ColoredSize = styled.span`
  color: ${COLOR.PRIMARY};
  margin-left: 11px;
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
export const Size = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.ACCENT1};
  display: inline-flex;
  align-self: start;
`;
export const Status = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.PRIMARY};
`;