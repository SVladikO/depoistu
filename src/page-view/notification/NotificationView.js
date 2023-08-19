import {useEffect} from "react";

import {Wrapper} from './NotificationView.style';

import {useNotification} from "../../utils/hook";
import {EVENT_TYPE} from "../../utils/event";


const NotificationView = () => {
    const [notifications, setNotifications] = useNotification();

    useEffect(() => {
        document.addEventListener(EVENT_TYPE.NOTIFICATION, e => {
            const {type, message} = e.detail;
            setNotifications(type, message)
            console.log(111111, e.detail.message)
        })

        // setTimeout(() => {
        //     publishNotificationEvent.success('success')
        // }, 2000);

        // return () => document.removeEventListener(EVENT_TYPE.NOTIFICATION)
    }, [])

    if (!notifications.length) {
        return;
    }

    return (
        <Wrapper>
            {notifications}
        </Wrapper>
    )

}

export default NotificationView;