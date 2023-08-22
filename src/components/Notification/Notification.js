import {
    NotificationInfo,
    NotificationError,
    NotificationSuccess,
    NotificationWarning,
    NotificationLoadingWrapper,
    Text,
} from "./Notification.style";

import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {ReactComponent as LoadingIcon} from "../../assets/icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../assets/icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../assets/icons/error.svg";
import {ReactComponent as WarningIcon} from "../../assets/icons/warning.svg";
import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";

import {TRANSLATION, translate} from "../../utils/translation";

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
                <NotificationInfo>
                    <InfoIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationInfo>
            )
        }
        case NOTIFICATION_STATUS.ERROR: {
            return (
                <NotificationError>
                    <ErrorIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationError>
            )
        }

        case NOTIFICATION_STATUS.SUCCESS: {
            return (
                <NotificationSuccess>
                    <SuccessIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationSuccess>
            )
        }
        case NOTIFICATION_STATUS.WARNING: {
            return (
                <NotificationWarning>
                    <WarningIcon/>
                    <CloseIcon className="close" onClick={onClose}/>
                    {children}
                </NotificationWarning>
            )
        }
    }
};

export const NotificationLoading = () => (
    <NotificationLoadingWrapper>
        <LoadingIcon className="animated_svg"/>
        <Text>{translate(TRANSLATION.NOTIFICATION.LOADING)}</Text>
    </NotificationLoadingWrapper>
)
