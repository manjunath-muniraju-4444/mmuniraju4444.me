/*let object_helper = require('../helpers/object/object_helpers');*/
let db_helper = require('./database_helper');

exports.getConnection = function (conn_type) {
    let db_info = db_helper.getDatabase(conn_type);

    let client =  require(`./${db_info.database_name}`)
    return client.getClient(db_info.db_conn);
};
/*
let c = exports.getConnection();

c.query('SHOW DATABASES', null, { useArray: true }, function(err, rows) {
    if (err)
        throw err;
    console.dir(rows);
});

c.end();*/
