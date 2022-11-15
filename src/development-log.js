import packageInfo from '../package.json';
import {host, ROUTER_MAP} from "./config";

export function showDevelopmentPageUrls() {
    console.log("Current version: ", packageInfo.version);
    console.log(`${host}${ROUTER_MAP.REDUX}`);
    console.log(`${host}${ROUTER_MAP.COMPONENTS}`);
    console.log(`${host}${ROUTER_MAP.PAGES}`);
}