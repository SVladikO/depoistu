const tls = require('node:tls');
const { Client } = require('pg');

const client = new Client({
    user: 'pizza_mobile_db_yjul_user',
    database: 'pizza_mobile_db_yjul',
    host: 'dpg-ceia2u2rrk07uhbp15fg-a.frankfurt-postgres.render.com',
    password: 'oA3OlpU9RIhBXnY1sSi36diIv53qGxTq',
    port: 5432,
    ssl: tls,
})

module.exports = client;