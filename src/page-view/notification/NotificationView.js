import {useEffect, useState} from "react";

import {Wrapper, CloseAll} from './NotificationView.style';

import {NotificationFactory, FixedWrapper} from "components";

import {EVENT_TYPE} from "utils/event";
import {getRandom} from "utils/utils";

const NotificationView = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        document.addEventListener(EVENT_TYPE.NOTIFICATION, e => {
            const {type, message} = e.detail;
            console.log({key: getRandom(), type, message})
            setNotifications(prevState => [...prevState, {key: getRandom(), type, message}])
        })

        // return () => document.removeEventListener(EVENT_TYPE.NOTIFICATION)
    }, [])

    if (!notifications.length) {
        return;
    }

    function closeAllNotifications(){
        setNotifications([]);
    }

    const deleteNotification = key => () => {
        setNotifications(notifications.filter(n => n.key !== key))
    }

    return (
        <FixedWrapper fixTop>

            <Wrapper>
                {notifications.map(n => (
                    <NotificationFactory key={n.key} type={n.type}
                                         onClose={deleteNotification(n.key)}>{n.message}</NotificationFactory>
                ))
                }
            <CloseAll onClick={closeAllNotifications}>Close All</CloseAll>
            </Wrapper>
        </FixedWrapper>
    )
}
//
// const AutoCloseNotification = () => {
//     const [time, setTime] = useState(3)
//
//     useEffect(() => {
//             setInterval(() => {
//                 setTime(time - 1)
//             }, 1000)
//     })
//
//     return (
//         <NotificationFactory key={key} type={n.type} time={time}>{n.message}</NotificationFactory>
//     )
// }

export default NotificationView;