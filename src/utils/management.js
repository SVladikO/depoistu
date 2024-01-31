import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";
import {DEFAULT_LANGUAGE, getCurrentLanguage} from "./translation";
import packageJson from "../../package.json";
import {URL} from "./config";

/**
 * Logic which clean old local storage.
 */
export const updateProjectVersionLocalStorage = () => {
    const siteLanguage = getCurrentLanguage() || DEFAULT_LANGUAGE;
    const isShowIntro = LocalStorage.get(LOCAL_STORAGE_KEY.SHOW_INTRO);

    localStorage.clear();

    LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, {language: {siteLanguage}})
    LocalStorage.set(LOCAL_STORAGE_KEY.PROJECT_VERSION, packageJson.version);
    LocalStorage.set(LOCAL_STORAGE_KEY.SHOW_INTRO, isShowIntro === undefined ? true : isShowIntro);
}

/**
 * When new script run on client browser we check is project up to date ?
 */
export const checkUpdates = () => {
    const versionFromLocalStorage = LocalStorage.get(LOCAL_STORAGE_KEY.PROJECT_VERSION);
    if (packageJson.version !== versionFromLocalStorage) {
        updateProjectVersionLocalStorage()
    }
}

export const resetSettings = () => {
    localStorage.clear()
    window.location.href = window.location.origin
}

export const resetProjectVersion = () => {
    localStorage.clear()
    window.location.href = window.location.origin + URL.PROJECT_UPDATED;
}



