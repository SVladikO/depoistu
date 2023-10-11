import packageInfo from "../../package.json";
import {checkAccess} from "./security";


const devManagement = () => {
    console.log(`v${packageInfo.version}`);
    checkAccess();
}

export default devManagement;