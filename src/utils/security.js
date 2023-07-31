import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";

export const checkAccess = () => {
    const isTrustedCustomer = LocalStorage.get(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER);

    if(isTrustedCustomer) return;

    const secretKey = "2222";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    LocalStorage.set(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER, true);
}
