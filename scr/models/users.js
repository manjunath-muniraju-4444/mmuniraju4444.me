let connection = require('../app_moduels/database/connection');
let file_helper = require('../app_moduels/helpers/file/file_helper');

let tableName =  file_helper.getFileName(__filename);

exports.select = function(condition,columns){
    columns = columns == null ? '*' : columns;
    condition = condition == null ? '1' : condition;
    let conn = connection.getConnection();
    let query = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;
    let output =
        conn.query(query, null, { useArray: true });
    conn.end();
    output.on('result', function (res) {
        // `res` is a streams2+ Readable object stream
        res.on('data', function (row) {
            console.dir(row);
        })
    });
    return output;
};
