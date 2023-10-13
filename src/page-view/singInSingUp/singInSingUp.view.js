import React from "react";
import {Link} from "react-router-dom";

import {NotificationTDB, PrimaryButton, RowSplitter} from "../../components";
import {EditBar} from "../../page/setting/Setting.style";

import {URL} from "../../utils/config";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {useSelector} from "react-redux";

const SingInSingUpView = () => {
    const customer = useSelector(state => state.customer.value);

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