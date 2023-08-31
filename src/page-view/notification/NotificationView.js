import {useEffect, useState} from "react";

import {Wrapper} from './NotificationView.style';

import {NotificationFactory, FixedWrapper} from "../../components";

import {EVENT_TYPE} from "../../utils/event";
import {getRandom} from "../../utils/utils";
import {translate, TRANSLATION} from "../../utils/translation";

const NotificationView = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        document.addEventListener(EVENT_TYPE.NOTIFICATION, e => {
            let {type, message} = e.detail;
            if (message === 'Unable to make request.') {
                message = translate(TRANSLATION.NOTIFICATION.UNABLE_TO_MAKE_REQUEST);
            }else if(message === 'Invalid Token'){
                message = translate(TRANSLATION.NOTIFICATION.WRONG_TOKEN);
            }
            console.log({key: getRandom(), type, message})
            setNotifications(prevState => [...prevState, {key: getRandom(), type, message}])
        })

        // return () => document.removeEventListener(EVENT_TYPE.NOTIFICATION)
    }, [])

    if (!notifications.length) {
        return;
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