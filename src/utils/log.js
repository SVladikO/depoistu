import packageInfo from '../../package.json';
import {DEV_ROUTER, BE_DOMAIN, AVAILABLE_DOMAINS, SELECTED_BE_DOMAIN} from "./config";
import {fetchData} from "./fetch";

function logDevelopmentPages() {
    console.log('')
    console.log('DEV urls:')
    Object.keys(DEV_ROUTER).forEach(key => console.log(`${window.location.origin}/${DEV_ROUTER[key]}`))
}

function logRemoteFEDomains() {
    console.log('FE remote domains:');
    console.log('https://depoistu-develop.onrender.com/');
    console.log('https://depoistu-stage.onrender.com');
    console.log('https://depoistu.com/');
    console.log('');
    console.log('BE remote domains:');
    console.log(AVAILABLE_DOMAINS[1].name.toUpperCase(), AVAILABLE_DOMAINS[1].url);
    console.log(AVAILABLE_DOMAINS[2].name.toUpperCase(), AVAILABLE_DOMAINS[2].url);
    console.log(AVAILABLE_DOMAINS[3].name.toUpperCase(), AVAILABLE_DOMAINS[3].url);
}

export function showDevelopmentPageUrls() {
    fetchData(`${BE_DOMAIN}/db-mode`)
        .then(res => {
            console.log(`v${packageInfo.version}`);
            console.log('ENV: ', SELECTED_BE_DOMAIN.name.toUpperCase());
            console.log('DB: ', res.body.mode.toUpperCase());
            console.log('BE_DOMAIN: ', SELECTED_BE_DOMAIN.url);

            logDevelopmentPages()
            console.log('')
            logRemoteFEDomains()
        })


}