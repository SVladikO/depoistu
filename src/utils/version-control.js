import packageJson from '../../package.json';
import {getCurrentLanguage, DEFAULT_LANGUAGE} from './translation';
import {LocalStorage, LOCAL_STORAGE_KEY} from "./localStorage";

checkUpdates()

/**
 * When new script run on client browser we check is project up to date ?
 */
function checkUpdates() {
    const versionFromLocalStorage = LocalStorage.get(LOCAL_STORAGE_KEY.PROJECT_VERSION);
    if (packageJson.version !== versionFromLocalStorage) {
        updateProjectVersionLocalStorage()
    }
}

/**
 * Logic which clean old local storage.
 */
function updateProjectVersionLocalStorage() {
    const siteLanguage = getCurrentLanguage() || DEFAULT_LANGUAGE;
    const isShowIntro = LocalStorage.get(LOCAL_STORAGE_KEY.SHOW_INTRO);

    localStorage.clear();

    LocalStorage.set(LOCAL_STORAGE_KEY.PROJECT_VERSION, packageJson.version);
    LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, {language: {siteLanguage}})
    LocalStorage.set(LOCAL_STORAGE_KEY.SHOW_INTRO, isShowIntro === undefined ? true : isShowIntro);
}
