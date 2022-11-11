import styled from 'styled-components';
import {THEME} from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  font-weight: 700;
`;
export const Label = styled.span`
  color: ${THEME.COLOR.PRIMARY};
  font-size: 16px;
  line-height: 19px;
  margin: 0 9px 0 0;
`;

export const SizeBlock = styled.div`
  width: 19px;
  height: 19px;
  margin: 0 10px 0 0;
  
  font-size: 12px;
  line-height: 14px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 50%;
  border: 1px solid ${p => p.active ? THEME.COLOR.PRIMARY : THEME.COLOR.ACCENT1};
  color:       ${p => p.active ? THEME.COLOR.ACCENT4 : THEME.COLOR.ACCENT1};
  background:  ${p => p.active ? `linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO})` : THEME.COLOR.ACCENT4};
`;

