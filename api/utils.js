const QUERY = require("./db/query");

function dbRequest(pool, dbRequest, responceCallback) {
    console.log('!!!! NEW DB REQUEST !!!!')

    pool.connect((err) => {
        if (err) {
            console.error('connection error', err.stack)
        } else {
            console.log('connected')
        }
    })

    pool.query(dbRequest)
        .then(r => {
            console.log('DB request: ', dbRequest)
            console.log('DB response: ', r.rows)
            responceCallback(r.rows)
        })
        .catch(e => {
            console.error('DB error: ', e.stack)
            responceCallback('DB error: ' + e.stack)
        })
}

module.exports = dbRequest;