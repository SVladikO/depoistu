import styled from 'styled-components';
import {COLOR} from "../../theme";
import {hexToRgbA} from "../../utils";

export const Wrapper = styled.div`
  min-width: 46px;
  height: 16px;
  display: flex;
  align-items: center;
`;
export const ButtonIncrement = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${COLOR.PRIMARY};
  font-size: 8px;
  font-weight: 700;
  color: ${COLOR.ACCENT4};
  line-height: 10px;
  margin-left: 4px;
  display: block;
`;
export const ButtonDecrement = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${hexToRgbA(COLOR.ACCENT3, 0.1)};
  color: ${COLOR.PRIMARY};
  font-size: 8px;
  font-weight: 700;
  line-height: 10px;
  margin-right: 4px;
`;
export const Counter = styled.div`
  color: ${COLOR.ACCENT1};
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
`;