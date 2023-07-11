import React, {useState} from "react";
import {Popup} from '../components/index'
import {LOCAL_STORAGE_KEY, LocalStorage} from "../utils/localStorage";
import LanguagePopup from "../page-view/language-popup/LanguagePopup";
import {useLocalStorage} from "../utils/hook";

const WebsiteIntro = () => {
    const [currentLanguage, setCurrentLanguage] = useLocalStorage(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE);
    const [isShowLanguagePopup, setIsShowLanguagePopup] = useState(!currentLanguage);
    const closeLanguagePopup = () => setIsShowLanguagePopup(false);

    const [hideIntro, setHideIntro] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.HIDE_INTRO))

    const closePopup = () => {
        setHideIntro(true)
        LocalStorage.set(LOCAL_STORAGE_KEY.HIDE_INTRO, true)
    }

    return (
        <div>
            {isShowLanguagePopup &&
                <LanguagePopup
                    onClose={closeLanguagePopup}
                    setCurrentLanguage={setCurrentLanguage}
                    showCloseButton={false}
                />
            }
            {!hideIntro && !isShowLanguagePopup && (
                <Popup.InfoText onClose={closePopup}>
                    Меню всіх кафе та ресторанів України має бути в одному місці.
                    Знайдіть заклад своєї мрії та допоможи іншим.
                    Розкажи адміністраторам своїх улюблених закладів про наш сайт.
                </Popup.InfoText>)
            }
        </div>
    )
}
export default WebsiteIntro;

