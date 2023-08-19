import {useEffect, useState} from "react";

import {Wrapper} from './NotificationView.style';

import {EVENT_TYPE} from "../../utils/event";
import {NotificationFactory} from "../../components";


const NotificationView = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        document.addEventListener(EVENT_TYPE.NOTIFICATION, e => {
            const {type, message} = e.detail;
            setNotifications(prevState => [...prevState, {type, message}])
        })

        // return () => document.removeEventListener(EVENT_TYPE.NOTIFICATION)
    }, [])

    if (!notifications.length) {
        return;
    }

    return (
        <Wrapper>
            {notifications.map(notif => (
                <NotificationFactory type={notif.type}>{notif.message}</NotificationFactory>
            ))
            }
        </Wrapper>
    )

}

export default NotificationView;