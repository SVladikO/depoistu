import packageInfo from '../../package.json';
import {DEV_ROUTER, ROUTER} from "./config";

export const host = 'http://localhost:3000/';

function getUrls(title, map) {
    console.log('')
    console.log(title)
    Object.keys(map).forEach(key => console.log(`${host}${map[key]}`))
}

export function showDevelopmentPageUrls() {
    console.log("Current version: ", packageInfo.version);
    getUrls('DEV urls:', DEV_ROUTER)
    getUrls('App pages:', ROUTER)

}