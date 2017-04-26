let connection = require('../app_moduels/database/connection');
let file_helper = require('../app_moduels/helpers/file/file_helper');

let tableName =  file_helper.getFileName(__filename);

exports.select = function(condition,columns){
    let columns = object_helper.isEmpty(columns) ? '*' : columns;
    let condition = object_helper.isEmpty(condition) ? '1' : condition;
    let conn = connection.getConnection();
    let query = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;

    return conn.query(query,null, { useArray: true }, function(err, rows) {
        if (err)
            throw err;
        console.dir(rows);
    });
};