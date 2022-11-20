import styled from 'styled-components';
import {BorderRadius, COLOR, GRADIENT} from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  font-weight: 700;
`;
export const Label = styled.span`
  color: ${COLOR.PRIMARY};
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
  
  border-radius: ${BorderRadius.CIRCLE};
  ${p => !p.active && `border: 1px solid ${COLOR.ACCENT1}`};
  color:       ${p => p.active ? COLOR.ACCENT4 : COLOR.ACCENT1};
  background:  ${p => p.active ? `linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO})` : COLOR.ACCENT4};
`;

