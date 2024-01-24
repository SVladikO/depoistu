import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";

export const checkAccessForDevEnv = () => {
    const hosts = [
        'depoistu-stage.onrender.com',
        'depoistu-develop.onrender.com'
    ]

    const isDevEnv = hosts.includes(window.location.host)
    isDevEnv && checkAccess(LOCAL_STORAGE_KEY.IS_DEV_ENV_HOST)
}

export const checkAccess = (key) => {
    if (!key) {
        return;
    }

    const isExist = LocalStorage.get(key);

    if (isExist || window.location.host === 'localhost:3000') return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }

    LocalStorage.set(key, true);
}
