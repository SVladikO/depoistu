import styled from 'styled-components';
import {COLOR} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";

export const Wrapper = styled.div`
  min-width: 46px;
  height: 16px;
  display: flex;
  align-items: center;
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

export const Counter = styled.div`
  color: ${COLOR.ACCENT1};
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  padding: 4px;
`;