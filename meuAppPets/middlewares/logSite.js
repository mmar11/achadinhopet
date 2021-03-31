const fs = require('fs')

function logSite(req, res, next) {
    fs.appendFileSync('log.txt', "usuario acessou" + req.url)
    next();
}

module.exports = logSite