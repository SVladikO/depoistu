import packageInfo from "../../package.json";
import {checkAccess} from "./security";
import {checkUpdates} from "./utils";


const devManagement = () => {
    console.log(`v${packageInfo.version}`);
    checkAccess();
    checkUpdates();
}

export default devManagement;