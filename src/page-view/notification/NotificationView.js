import {useEffect, useState} from "react";

import {Wrapper, CloseAll} from './NotificationView.style';

import {NotificationFactory, FixedWrapper} from "components";

import {EVENT_TYPE} from "utils/event";
import {getRandom} from "utils/utils";
import {TRANSLATION,translate} from "../../utils/translation";

const NotificationView = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        document.addEventListener(EVENT_TYPE.NOTIFICATION, e => {
            const {type, message} = e.detail;
            setNotifications(prevState => [...prevState, {key: getRandom(), type, message}])
        })
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
                {notifications && <CloseAll onClick={closeAllNotifications}>{translate(TRANSLATION.NOTIFICATION.CLOSE_ALL_NOTIFICATIONS_BUTTON)}</CloseAll>}
            </Wrapper>
        </FixedWrapper>
    )
}

export default NotificationView;