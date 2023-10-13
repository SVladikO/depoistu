import React from "react";
import {Link} from "react-router-dom";

import {NotificationTDB, PrimaryButton, RowSplitter} from "../../components";
import {EditBar} from "../../page/setting/Setting.style";

import {URL} from "../../utils/config";
import {useLocalStorage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";

const SingInSingUpView = () => {
    const [customer] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER);

    const singInSingUpNotification = (
        <NotificationTDB
            title={translate(TR.PAGE.SETTINGS.NOTIFICATION.TITLE)}
            description={translate(TR.PAGE.SETTINGS.NOTIFICATION.DESCRIPTION)}
        >
            <EditBar>
                <Link to={URL.SING_UP}>
                    <PrimaryButton isWide minWidth="120px">{translate(TR.PAGE.SETTINGS.BUTTONS.SING_UP)}</PrimaryButton>
                </Link>
                <Link to={URL.SING_IN}>
                    <PrimaryButton isWide minWidth="120px">{translate(TR.PAGE.SETTINGS.BUTTONS.SING_IN)}</PrimaryButton>
                </Link>
            </EditBar>
        </NotificationTDB>
    );

    if (!customer) {
        return (

            <>
                {singInSingUpNotification}
                <RowSplitter height="10px"/>
            </>
        )
    }

    return;
}

export default SingInSingUpView;