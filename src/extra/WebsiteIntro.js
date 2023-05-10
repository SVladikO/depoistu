import React, {useState} from "react";
import {Popup} from '../components/index'
import {LOCAL_STORAGE_KEY, LocalStorage} from "../utils/utils";
import styled from "styled-components";

const Text = styled.div`
  line-height: 26px;
  font-size: 22px;
  text-align: left;
`;

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
        <Popup.Info onClose={closePopup}>
            <div>
                <Text>Меню всіх кафе та ресторанів України має бути в одному місці.</Text>
                <Text>Знайдіть заклад своєї мрії та допоможи іншим.</Text>
                <Text>Розкажи адміністраторам своїх улюблених закладів про наш сайт.</Text>
            </div>

        </Popup.Info>
    )
}
export default WebsiteIntro;

