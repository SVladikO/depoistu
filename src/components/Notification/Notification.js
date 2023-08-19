import {
    NotificationInfo,
    NotificationError,
    NotificationSuccess,
    Text, NotificationWarning
} from "./Notification.style";

import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {ReactComponent as LoadingIcon} from "../../assets/icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../assets/icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../assets/icons/error.svg";
import {ReactComponent as WarningIcon} from "../../assets/icons/warning.svg";
import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";


import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {TRANSLATION, translate} from "../../utils/translation";

export const NOTIFICATION_STATUS = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    LOADING: 'LOADING'
}

export const NotificationFactory = ({type, children}) => {
    switch (type) {
        case NOTIFICATION_STATUS.INFO: {
            return (
                <NotificationInfo>
                    <InfoIcon/>
                    <CloseIcon className="closeSvg"/>
                    {children}
                </NotificationInfo>
            )
        }
        case NOTIFICATION_STATUS.ERROR: {
            return (
                <NotificationError>
                    <ErrorIcon/>
                    <CloseIcon className="closeSvg"/>
                    {children}
                </NotificationError>
            )
        }

        case NOTIFICATION_STATUS.SUCCESS: {
            return (
                <NotificationSuccess>
                    <SuccessIcon/>
                    <CloseIcon className="closeSvg"/>
                    {children}
                </NotificationSuccess>
            )
        }
        case NOTIFICATION_STATUS.WARNING: {
            return (
                <NotificationWarning>
                    <WarningIcon/>
                    <CloseIcon className="closeSvg"/>
                    {children}
                </NotificationWarning>
            )
        }
    }

};

const Success = ({message, children}) => {
    return (
        <NotificationSuccess>
            <SuccessIcon/>
            <CloseIcon className="closeSvg"/>
            {message}
            {children}
        </NotificationSuccess>
    )
}

const Loading = () => {
    return (
        <ContentContainer>
            <LoadingIcon className="animated_svg"/>
            <Text>{translate(TRANSLATION.NOTIFICATION.LOADING)}</Text>
        </ContentContainer>
    )
};

const Error = ({message, children}) => {
    return (
        <NotificationError>
            <ErrorIcon/>
            <CloseIcon className="closeSvg"/>
            {message}
            {children}
        </NotificationError>
    );
};

export default {
    Success,
    Loading,
    Error
}