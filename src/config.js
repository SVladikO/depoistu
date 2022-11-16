export const ROUTER_MAP = {
    COMPONENTS: 'components',
    PAGES: 'pages',
    REDUX: 'redux',
};

export const ROUTER_KEYS = Object.keys(ROUTER_MAP)

export const LINKS = ROUTER_KEYS.map(key => ({to: ROUTER_MAP[key], title: key}))

export const host = 'http://localhost:3000/';


