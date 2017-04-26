let express = require('express');
let connection = require('../app_moduels/database/connection');
let router = express.Router();


//home page
router.get('/:id', function (req, res) {
    let id =req.params.id;
    let conn = connection.getConnection();
    let user_query = `SELECT * FROM users where id = ${id}`;
    console.log(req.params.id);
    conn.query(user_query,function(err,user){
        if(err)
            throw err;
        let profile_query = `SELECT * FROM profile where id = ${user[0].id}`;
        conn.query(profile_query,function(err,profile){
            if(err)
                throw err;
            res.render('home/index', { user_name: profile[0].name});
        });
    });
});

module.exports = router ;