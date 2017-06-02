var express = require('express');
var router = express.Router();
//var politicians = require('../models/politicians');
var allMongo = require('./all-mongo');
var connrouter.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});
var connect = require('./connect');

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'CongressServer'});
});

router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/:id', function(request, response) {
    'use strict';
    response.status(200).send({result: request.params.id});
});

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'CongressServer'});
});

// here
router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/bar/:id', function(request, response) {
    'use strict';
    response.status(200).send({param: request.params.id});
});

module.exports = router;
