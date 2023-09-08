import {NOTIFICATION_STATUS} from "components";

export const EVENT_TYPE = {
    NOTIFICATION: 'notification_event',
    // INFO: 'notification_info_event',
    // ERROR: 'notification_error_event',
    // WARNING: 'notification_warning_event',
    // SUCCESS: 'notification_success_event',
}

export const publishEventDefault = (type, detail) => {
    const customEvent = new CustomEvent(type, {detail})
    // console.log(type, details)
    document.dispatchEvent(customEvent)
}

export const publishNotificationEvent = {
    info: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.INFO}),
    error: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.ERROR}),
    warning: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.WARNING}),
    success: message => publishEventDefault(EVENT_TYPE.NOTIFICATION, {message, type: NOTIFICATION_STATUS.SUCCESS}),
}

export const subscribeNotificationEvent = (type, callaback) => {
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.INFO, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.ERROR, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.WARNING, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.SUCCESS, callaback)
}


export const removeNotificationEvent = (type, callaback) => {
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.INFO, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.ERROR, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.WARNING, callaback)
    // document.addEventListener(NOTIFICATION_EVENT_TYPES.SUCCESS, callaback)
}

