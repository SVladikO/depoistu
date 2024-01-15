import {NOTIFICATION_STATUS} from "components";

export const EVENT_TYPE = {
    NOTIFICATION: 'notification_event',
}

export const publishEventDefault = (type, detail) => {
    const customEvent = new CustomEvent(type, {detail})
    document.dispatchEvent(customEvent)
}

export const publishNotificationEvent = {
    info: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.INFO}),
    error: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.ERROR}),
    warning: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.WARNING}),
    success: message => {
        debugger
        return publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.SUCCESS})
    },
}


