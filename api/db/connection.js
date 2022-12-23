const { Client } = require('pg');

const client = new Client({
    user: 'pizza_mobile_db_yjul_user',
    database: 'pizza_mobile_db_yjul',
    host: 'dpg-ceia2u2rrk07uhbp15fg-a.frankfurt-postgres.render.com',
    port: 5432,
    password: 'oA3OlpU9RIhBXnY1sSi36diIv53qGxTq',
})

module.exports = client;

// const { Client } = require('pg')
// const client = new Client()
// client.connect()
// client
//     .query('SELECT $1::text as name', ['brianc'])
//     .then((result) => console.log(result))
//     .catch((e) => console.error(e.stack))
//     .then(() => client.end())