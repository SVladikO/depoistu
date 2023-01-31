import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const Wrapper = styled.div`
  min-width: 46px;
  height: 16px;
  display: flex;
  align-items: start;
  padding: 0;
  margin: 0;
`;
export const WideWrapper = styled(Wrapper)`
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

export const Counter = styled.div`
  color: ${COLOR.ACCENT1};
  font-weight: 700;
  font-size: 8px;
  padding: 4px;
`;
export const Space = styled.div`
  width: 10px;
  opacity: 0;
`;