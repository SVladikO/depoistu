import {LOCAL_STORAGE_KEY, LocalStorage} from "./localStorage";

export const checkAccess = () => {
    const isTrustedCustomer = LocalStorage.get(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER);

    if(isTrustedCustomer || window.location.host === 'localhost:3000') return;

    const secretKey = "****";
    let test = prompt("Entry secret key");

    if (test !== secretKey) {
        return checkAccess();
    }
    LocalStorage.set(LOCAL_STORAGE_KEY.IS_TRUSTED_CUSTOMER, true);


}
