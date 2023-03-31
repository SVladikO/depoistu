import packageInfo from '../../package.json';
import {DEV_ROUTER, BE_DOMAIN} from "./config";

export const host = 'http://localhost:3000/';

function getUrls(title, map) {
    console.log('')
    console.log(title)
    Object.keys(map).forEach(key => console.log(`${host}${map[key]}`))
    console.log('BE API: ', BE_DOMAIN)
    console.log(' ');
    console.log(' ');
    console.log('FE Enviroments:');
    console.log('https://master-pma.onrender.com', '             master');
    console.log('https://develop-pma.onrender.com', '            develop');
    console.log('https://qa-1-pma.onrender.com', '               qa1');
    console.log('https://qa-2-pma.onrender.com', '               qa2');
    console.log('https://dev-1-pma.onrender.com', '              dev1');
    console.log('https://dev-2-pma.onrender.com', '              dev1');
}

export function showDevelopmentPageUrls() {
    console.log("Current version: ", packageInfo.version);
    getUrls('DEV urls:', DEV_ROUTER)
}