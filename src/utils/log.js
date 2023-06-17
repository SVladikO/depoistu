import packageInfo from '../../package.json';
import {DEV_ROUTER, BE_DOMAIN, IS_MASTER_ENV} from "./config";
import {fetchData} from "./fetch";

function logDevelopmentPages() {
    console.log('')
    console.log('DEV urls:')
    Object.keys(DEV_ROUTER).forEach(key => console.log(`${window.location.origin}/${DEV_ROUTER[key]}`))
}

function logRemoteFEDomains() {
    console.log('FE remote domains:');
    console.log('https://pma-master.onrender.com/');
    console.log('https://pma-develop.onrender.com/');
    console.log('https://qa-1-pma.onrender.com');
    console.log('https://dev-1-pma.onrender.com');
}

export function showDevelopmentPageUrls() {
    fetchData(`${BE_DOMAIN}/db-mode`)
        .then(res => {
            console.log(`v${packageInfo.version}`);
            console.log('ENV: ', IS_MASTER_ENV ? "MASTER" : "DEVELOP");
            console.log('DB: ', res.body.mode.toUpperCase());
            console.log('BE_DOMAIN: ', BE_DOMAIN);

            logDevelopmentPages()
            console.log('')
            logRemoteFEDomains()
        })


}