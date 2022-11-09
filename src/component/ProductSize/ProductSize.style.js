import styled from 'styled-components';
import {THEME} from "../../theme";


export const Wrapper = styled.div`
  display: flex;
  font-family: "LatoBold";
`;
export const Label = styled.span`
  font-size: 16px;
  color: ${THEME.COLOR.PRIMARY};
  line-height: 19px;
`;

export const SizeBlock = styled.div.attrs((props) => ({
    borderColor: props.active ? `${THEME.COLOR.PRIMARY}` : `${THEME.COLOR.ACCENT1}`,
}))`
  background: ${(props) => (props.active ? `linear-gradient(${THEME.GRADIENT.FROM}, ${THEME.GRADIENT.TO});` : `${THEME.COLOR.ACCENT4}`)};
  width: 19px;
  height: 19px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  margin: 0 10px 9px 4px;
  color: ${(props) => (props.active ? `${THEME.COLOR.ACCENT4}` : `${THEME.COLOR.ACCENT1}`)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.borderColor};
`;

