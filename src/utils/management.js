import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import packageInfo from "../../package.json";
import {DEFAULT_LANGUAGE, getCurrentLanguage} from "./translation";

const checkUpdates = () => {
    const lastUpdateDate = LocalStorage.get(LOCAL_STORAGE_KEY.LAST_UPDATE_DATE);

    if (packageInfo.lastUpdateDate !== lastUpdateDate) {
        const siteLanguage = getCurrentLanguage() || DEFAULT_LANGUAGE;
        const isShowIntro = LocalStorage.get(LOCAL_STORAGE_KEY.SHOW_INTRO);

        localStorage.clear();

        LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, {language: {siteLanguage}})
        LocalStorage.set(LOCAL_STORAGE_KEY.LAST_UPDATE_DATE, packageInfo.lastUpdateDate);
        LocalStorage.set(LOCAL_STORAGE_KEY.SHOW_INTRO, isShowIntro === undefined ? true : isShowIntro);
    }
}

checkUpdates();

