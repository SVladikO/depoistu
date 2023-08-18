import {IconWrapper, Text, Wrapper} from "./Notification.style";
import {useState} from 'react'
import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {ReactComponent as LoadingIcon} from "../../assets/icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../assets/icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../assets/icons/alert.svg";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {TRANSLATION, translate} from "../../utils/translation";
import {COLOR} from "../../utils/theme";

export const NOTIFICATION = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    LOADING: 'LOADING'
}

const Success = ({message, children}) => {
    return (
        <ContentContainer>
            <SuccessIcon/>
            <Text>{message}</Text>
            {children}
        </ContentContainer>
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
        <ContentContainer>
            <ErrorIcon/>
            <Text>{message}</Text>
            {children}
        </ContentContainer>
    );
};

const Notification = {
    Success,
    Loading,
    Error
}

export const StatusNotification = ({children, status}) => {
    const [isVisible, setIsVisible] = useState(true)

    if(!isVisible) {
        return null;
    }

    let Icon = null
    let backgroundColor = COLOR.ACCENT4
    let iconFill = COLOR.ACCENT1

    switch(status) {
        case NOTIFICATION.INFO: {
            backgroundColor = COLOR.INFO2
            iconFill = COLOR.INFO1
            Icon = <ErrorIcon />
            break
        }
        case NOTIFICATION.ERROR: {
            backgroundColor = COLOR.ERROR2
            iconFill = COLOR.ERROR1
            Icon = <ErrorIcon />
            break
        }
        case NOTIFICATION.SUCCESS: {
            backgroundColor = COLOR.SUCCESS2
            iconFill = COLOR.SUCCESS1
            Icon = <SuccessIcon />
            break
        }
        case NOTIFICATION.WARNING: {
            backgroundColor = COLOR.WARNING2
            iconFill = COLOR.WARNING1
            Icon = <ErrorIcon />
            break
        }
        case NOTIFICATION.LOADING: {
            backgroundColor = COLOR.ACCENT4
            iconFill = COLOR.ACCENT1
            Icon = <LoadingIcon className="animated_svg"/>
            break
        }
    }

    const onClickIcon = () => {
        setIsVisible(false)
    }

    return (
        <Wrapper backgroundColor={backgroundColor} status={status}>
            <IconWrapper iconFill={iconFill}>
                {Icon}
            </IconWrapper>
            {children}
            {status !== NOTIFICATION.LOADING
                ? <CloseIcon onClick={onClickIcon} className='closeSvg' />
                : null
            }
        </Wrapper>
    );
};

export default Notification;