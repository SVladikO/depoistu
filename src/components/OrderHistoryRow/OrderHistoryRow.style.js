import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from '../../utils/theme';
import {hexToRgbA} from '../../utils/utils'
export const Wrapper = styled.div`
  padding: 10px 10px 10px 8px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  background-color: ${COLOR.ACCENT4};
  display: flex;
  min-width: 325px;
  svg:first-child{
    width: 90px;
    height: 90px;
  }
`;
export const Content = styled.div`
  padding-left: 9px;
  width: calc(100% - 15%);
`;
export const Row =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const RowLeftSide = styled(Row)`
  justify-content: flex-end;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.status ? COLOR.ACCENT1 : COLOR.PRIMARY};
  margin-bottom: 2px;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 0 60px 0 0;
  color: ${COLOR.ACCENT1};
  text-align: left;
`;
export const Factor = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  margin-right: 2px;
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

export const Image = styled.img`
  width: 90px;  
  height: 90px;
  border: solid 1px ${COLOR.ACCENT4};
`;
export const Status = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${COLOR.PRIMARY};
`;
export const ButtonWrapper = styled.div`
  margin: 9px 0 0;
  display: flex;
  width: 100%;
  height: 35px;
`;
export const Button = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => p.increment ? COLOR.PRIMARY : `${hexToRgbA(COLOR.ACCENT3, 0.1)}` };
  font-size: 8px;
  font-weight: 700;
  color: ${p => p.increment ? COLOR.ACCENT4 : COLOR.PRIMARY };
  line-height: 10px;
  display: block;
`;
export const WideButton = styled(Button)`
  width: 50%;
  height: 35px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.PRIMARY};
`;
export const Space = styled.div`
  width: 10px;
  opacity: 0;
`;