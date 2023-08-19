import styled, {css} from "styled-components";
import {BORDER_RADIUS, COLOR, SHADOW} from "../../utils/theme";
import {NOTIFICATION_STATUS} from "./Notification";

export const DefaultNotification = css`
  ${SHADOW};
  display: inline-flex;
  position: relative;
  align-items: ${p => p.status === NOTIFICATION_STATUS.LOADING ? 'center': 'start'};
  gap: 10px;
  width: 100%;
  padding: 10px 30px 10px 10px;
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
  margin: 0 0 15px;
  
  & > .closeSvg {
    fill: ${COLOR.ACCENT1};
    cursor: pointer;
    position: absolute;
    height: 13px;
    width: 13px;
    right: 10px;
    top: 10px;
    
  }
  & > .animated_svg {
    fill: ${COLOR.ACCENT1};
    cursor: pointer;
  }
`

export const NotificationInfo = styled.div`
  ${DefaultNotification};
  background: ${COLOR.INFO2};
  
  
`;
export const NotificationWarning = styled.div`
  ${DefaultNotification};
  background: ${COLOR.WARNING2};
  
`;
export const NotificationError = styled.div`
  ${DefaultNotification};
  background: ${COLOR.ERROR2};
  
`;
export const NotificationSuccess = styled.div`
  ${DefaultNotification};
  background: ${COLOR.SUCCESS2};
  
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;
