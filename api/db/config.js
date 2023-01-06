const { tls } = require('node-tls');

const config =  {
    user: 'pizza_mobile_db_state_user',
    database: 'pizza_mobile_db_state',
    host: 'dpg-ces09den6mphf4veq0ag-a.frankfurt-postgres.render.com',
    password: 'SkdNvQAPZPW0lLky2w24W3wXIzaHCoxo',
    port: 5432,
    ssl: tls,
}
module.exports = config;