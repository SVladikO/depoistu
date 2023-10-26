import styled, {css} from "styled-components";
import {BORDER_RADIUS, COLOR, FONT} from "utils/theme";
import {NOTIFICATION_STATUS} from "./Notification";

export const DefaultNotification = css`
  display: inline-flex;
  position: relative;
  align-items: ${p => p.status === NOTIFICATION_STATUS.LOADING ? 'center': 'start'};
  gap: 10px;
  width: 100%;
  padding: 10px 30px 10px 10px;
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
  margin: 0 0 15px;
  ${FONT.SIZE_18};
  
  & > svg:first-child {
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;
  }
  
  & > svg.close {
    fill: ${COLOR.ACCENT1};
    cursor: pointer;
    position: absolute;
    height: 13px ;
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
export const NotificationSuccessWrapper = styled.div`
  ${DefaultNotification};
  background: ${COLOR.SUCCESS2};
`;

export const NotificationLoadingWrapper = styled.div`
  ${DefaultNotification};
  background: ${COLOR.ACCENT2};
  padding: 10px 16px;
  
  & > svg:first-child {
    min-height: 24px;
    max-height: 24px;
    min-width: 24px;
    max-width: 24px;
  }
`;

export const Text = styled.div`
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_400};
  color: ${COLOR.ACCENT1};
`;
