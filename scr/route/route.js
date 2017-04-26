var express = require('express');
var router = express.Router();

// Loading Route Files
var homeRoute = require('./home');
var setupRoute = require('./setup');

router.use('/',homeRoute);
router.use('/setup',setupRoute);

router.get('/favicon.ico', function(req, res) {
    res.send(204);
});

module.exports = router;