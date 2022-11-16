export const DEV_ROUTER_MAP = {
    COMPONENTS: 'components',
    PAGES: 'pages',
    REDUX: 'redux',
};
export const DEV_ROUTER_KEYS = Object.keys(DEV_ROUTER_MAP)
export const DEV_LINKS = DEV_ROUTER_KEYS.map(key => ({to: DEV_ROUTER_MAP[key], title: key}))

export const ROUTER_MAP = {
    LOADING: 'loading',
    SING_IN: 'sign-in',
};
export const ROUTER_KEYS = Object.keys(ROUTER_MAP)


export const host = 'http://localhost:3000/';
