var object_helper = require('../helpers/object/object_helpers');
var db_settings = require('../../config/database/database');

exports.getDatabase = function (db_name) {
    //get database connection name
    var database_name = object_helper.isEmpty(db_name) ? db_settings.connection.database_name : db_name;

    if (db_settings.hasOwnProperty(database_name)) {
        return {'database_name' : database_name, "db_conn" : db_settings[database_name] };
    } else {
        throw "connection data not found under config/database/database.js"
    }
};