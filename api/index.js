const express = require('express')
const server = express()
const dbConfig = require('./db/config')
const QUERY = require('./db/query')
const {Pool} = require('pg');

const pool = new Pool(dbConfig);

server.get('/', function (req, res) {
    pool.connect((err) => {
        if (err) {
            console.error('connection error', err.stack)
        } else {
            console.log('connected')
        }
    })

    pool.query(QUERY.MENU_ITEM.SELECT_ALL)
        .then(r => {
            console.log('DB request: ', QUERY.MENU_ITEM.SELECT_ALL)
            console.log('DB response: ', r.rows)
            res.send(r.rows)
        })
        .catch(e => {
            console.error('DB error: ', e.stack)
            res.send('DB error: ' + e.stack)
        })
})





const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;