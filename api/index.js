const express = require('express')
const server = express()
server.get('/', function (req, res) {
    res.send('Hello World')
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;