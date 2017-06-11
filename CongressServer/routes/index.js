let express = require('express');
let router = express.Router();
//var politicians = require('../models/politicians');
let allMongo = require('./all-mongo');
let connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res) {
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

function checkConnection() {
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}

router.get('/all-data', function(request, response) {
    'use strict';
    console.log('AllData route invoked.');
    checkConnection();
    allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    checkConnection();
    allMongo.empty(response);
});

router.get('/insertValidCollection', function(request, response) {
    'use strict';
    console.log('Insert Valid Collection Called.');
    response.status(200).send({result: 'Insert valid Collection'});
    //checkConnection();
    //allMongo.readDataAndInsert(response);
});

router.get('/update', function(request, response) {
    'use strict';
    checkConnection();
    console.log('request query', request.query);
    allMongo.update(request.query, response);
});

module.exports = router;
