import styled, {css} from "styled-components";
import {BORDER_RADIUS, COLOR, SHADOW} from "../../utils/theme";
import {NOTIFICATION} from "./Notification";

export const Wrapper = styled.div`
  ${SHADOW};
  display: inline-flex;
  position: relative;
  align-items: ${p => p.status === NOTIFICATION.LOADING ? 'center': 'start'};
  gap: 10px;
  width: 100%;
  background: ${p => p.backgroundColor};
  padding: 10px 30px 10px 10px;
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
  margin: 0 0 15px;
  
  & > .closeSvg {
    fill: ${COLOR.ACCENT1};
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    
  }
  & > .animated_svg {
    fill: ${COLOR.ACCENT1};
    cursor: pointer;
  }
`

export const IconWrapper = styled.div`
  width: 40px;

  & > svg {
    fill: ${p => p.svgFill};
  }
`

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;
