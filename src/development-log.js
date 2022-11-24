import packageInfo from '../package.json';
import {host, DEV_ROUTER_KEYS, DEV_ROUTER_MAP, ROUTER_MAP, ROUTER_KEYS} from "./config";

function getUrls(title, keys, map) {
    console.log('')
    console.log(title)
    keys.forEach(key => console.log(`${host}${map[key]}`))
}

export function showDevelopmentPageUrls() {
    console.log("Current version: ", packageInfo.version);
    getUrls('DEV urls:', DEV_ROUTER_KEYS, DEV_ROUTER_MAP)
    getUrls('App pages:', ROUTER_KEYS, ROUTER_MAP)

}