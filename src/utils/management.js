import packageInfo from "../../package.json";
import {checkAccess} from "./security";
import {showDevelopmentPageUrls} from "./log";


const devManagement = () => {
    console.log(`v${packageInfo.version}`);
    checkAccess();
    showDevelopmentPageUrls();

    // localStorage.clear()
}

export default devManagement;