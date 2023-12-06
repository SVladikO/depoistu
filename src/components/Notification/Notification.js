import {
    NotificationInfoWrapper,
    NotificationErrorWrapper,
    NotificationSuccessWrapper,
    NotificationWarningWrapper,
    NotificationLoadingWrapper,
    Text,
} from "./Notification.style";

import {ReactComponent as CloseIcon} from "assets/icons/close.svg";
import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "assets/icons/success.svg";
import {ReactComponent as ErrorIcon} from "assets/icons/error.svg";
import {ReactComponent as WarningIcon} from "assets/icons/warning.svg";
import {ReactComponent as InfoIcon} from "assets/icons/info.svg";

import {TRANSLATION, translate} from "utils/translation";

export const NOTIFICATION_STATUS = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    LOADING: 'LOADING'
}

export const NotificationFactory = ({type, children, onClose}) => {
    switch (type) {
        case NOTIFICATION_STATUS.INFO: {
            return (
                <NotificationInfoWrapper>
                    <InfoIcon/>
                    {onClose && <CloseIcon className="close" onClick={onClose}/>}
                    {children}
                </NotificationInfoWrapper>
            )
        }
        case NOTIFICATION_STATUS.ERROR: {
            return (
                <NotificationErrorWrapper>
                    <ErrorIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationErrorWrapper>
            )
        }

        case NOTIFICATION_STATUS.SUCCESS: {
            return (
                <NotificationSuccessWrapper>
                    <SuccessIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationSuccessWrapper>
            )
        }
        case NOTIFICATION_STATUS.WARNING: {
            return (
                <NotificationWarningWrapper>
                    <WarningIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationWarningWrapper>
            )
        }
    }
};

export const NotificationSuccess = ({children, onClose}) => (
    <NotificationSuccessWrapper>
        <SuccessIcon/>
        <CloseIcon className="close" onClick={onClose}/>
        {children}
    </NotificationSuccessWrapper>
)

export const NotificationInfo = ({children, onClose}) => (
    <NotificationFactory type={NOTIFICATION_STATUS.INFO} onClose={onClose}>
        {children}
    </NotificationFactory>
)

export const NotificationLoading = ({children}) => (
    <NotificationLoadingWrapper>
        <LoadingIcon className="animated_svg"/>
        <Text>
            {children || translate(TRANSLATION.NOTIFICATION.LOADING)}
        </Text>
    </NotificationLoadingWrapper>
)
