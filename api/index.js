const express = require('express')
const tls = require('node:tls');
const server = express()
// const client = require('./db/connection')
const { Client } = require('pg');

const client = new Client({
    user: 'pizza_mobile_db_yjul_user',
    database: 'pizza_mobile_db_yjul',
    host: 'dpg-ceia2u2rrk07uhbp15fg-a.frankfurt-postgres.render.com',
    port: 5432,
    password: 'oA3OlpU9RIhBXnY1sSi36diIv53qGxTq',
    ssl: tls,
})


server.get('/', function (req, res) {
    const query = {
        // give the query a unique name
        name: 'fetch-menu-items',
        text: 'SELECT * FROM root.menu_item',
    }

    client
        .connect((err) => {
            if (err) {
                console.error('connection error', err.stack)
            } else {
                console.log('connected')
            }
        })
        client
        .query(query.text)
        .then(responce => {
            console.log(1111111111)
            console.log(responce.rows)
            client.end()
            res.send(responce.rows)
        })
        .catch(e => {
            console.error(e.stack)
            res.send(e.stack)
            client.end()
        })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;