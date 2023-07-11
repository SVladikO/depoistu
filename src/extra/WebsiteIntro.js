import React, {useState} from "react";
import {Popup} from '../components/index'
import {LOCAL_STORAGE_KEY, LocalStorage} from "../utils/localStorage";

const WebsiteIntro = () => {
    const [hideIntro, setHideIntro] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.HIDE_INTRO))

    const closePopup = () => {
        setHideIntro(true)
        LocalStorage.set(LOCAL_STORAGE_KEY.HIDE_INTRO, true)
    }

    if (hideIntro) {
        return;
    }

    return (
        <Popup.InfoText onClose={closePopup}>
            Меню всіх кафе та ресторанів України має бути в одному місці.
            Знайдіть заклад своєї мрії та допоможи іншим.
            Розкажи адміністраторам своїх улюблених закладів про наш сайт.
        </Popup.InfoText>
    )
}
export default WebsiteIntro;

