const express = require('express')
const server = express()
const dbConfig = require('./db/config')
const {Pool} = require('pg');

const pool = new Pool(dbConfig);

server.get('/', function (req, res) {
    const query = {
        // give the query a unique name
        name: 'fetch-menu-items',
        text: 'SELECT * FROM root.menu_item',
    }

    pool
        .connect((err) => {
            if (err) {
                console.error('connection error', err.stack)
            } else {
                console.log('connected')
            }
        })

    pool
        .query(query.text)
        .then(responce => {
            console.log(1111111111)
            console.log(responce.rows)
            res.send(responce.rows)
        })
        .catch(e => {
            console.error(e.stack)
            res.send(e.stack)
        })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;