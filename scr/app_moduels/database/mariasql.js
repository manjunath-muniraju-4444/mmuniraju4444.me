var Client = require('mariasql');
var conn = require('./connection');
exports.getClient = function (db_info) {
    var c =  new Client({
        host: db_info.host,
        user: db_info.username,
        password: db_info.password,
        db: db_info.database
    });
    return c;
};
