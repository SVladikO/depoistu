import packageInfo from "../../package.json";
import {checkAccess} from "./security";
import {checkUpdates} from "./utils";


const devManagement = () => {
    localStorage.setItem('LAST_UPDATE_DATE', `${packageInfo.version}`);
    console.log(`v${packageInfo.version}`);
    checkAccess();
    checkUpdates();
}

export default devManagement;