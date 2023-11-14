import {LocalStorage} from "./localStorage";

export const checkAccess = (key) => {
    if (!key) {
        return;
    }
    const isExist = LocalStorage.get(key);

    if(isExist || window.location.host === 'localhost:3000') return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    LocalStorage.set(key, true);
}
