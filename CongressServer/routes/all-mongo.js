/**
 * Created by bcuser on 6/1/17.
 */

//var express = require('express');
const connect = require('./connect');
const Politicians = require('../models/politicians');
const fs = require('fs');
let totalPoliticiansSaved = 0;

function allMongo() {
    'use strict';
}

allMongo.numberOfPoliticians = 0;

function insertPoliticians(politician, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    const newPolitician = new Politicians({
        'firstName': politician.firstName,
        'lastName': politician.lastName,
        'home': politician.home,
        'city': politician.city,
        'planet': politician.planet,
        'sector': politician.sector,
    });

    console.log('inserting', newPolitician.lastName);

    newPolitician.save(function(err) {
        if (err) {
            throw new Error(err);
        }
        totalPoliticiansSaved++;
        console.log('saved: ', newPolitician.lastName, allMongo.numberOfPoliticians, totalPoliticiansSaved);

        if (totalPoliticiansSaved === allMongo.numberOfPoliticians) {
            response.status(200).send({
                result: 'Success Saving Politicians',
                totalSaved: totalPoliticiansSaved
            });
        }
    });
}

allMongo.getAllData = function(response) {
    console.log('About to find politicians.');
    Politicians.find({}, function(err, allData) {
        if (err) {
            throw new Error(err);
        }
        console.log(allData.length);
        console.log(allData[0]);

        allMongo.writeData('politicians.json', allData);

        response.status(200).send({
            result: 'Success',
            allData: allData
        });
    });
};

allMongo.writeData = function(fileName, data) {
    'use strict';
    const dataAsString = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, dataAsString, function(err, result) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};

allMongo.readDataAndInsert = function(response) {
    'use strict';
    fs.readFile('public/address-list.json', function(err, politiciansText) {
        if (err) {
            //throw (err);
            response.status(404).send({'results': err});
            return;
        }
        politiciansText = JSON.parse(politiciansText);
        totalPoliticiansSaved = 0;
        allMongo.numberOfPoliticians = politiciansText.length;
        for (let i = 0; i < politiciansText.length; i++) {
            insertPoliticians(politiciansText[i], response);
        }
    });
};

allMongo.empty = function(response) {
    Politicans.remove({}, function(err) {
        if (err) {
            response.status(500).send({
                result: 'err',
                err: err
            });
        } else {
            response.status(200).send({
                result: 'collection removed'
            });
        }
    });
};

allMongo.update = function(requestQuery, response) {
    console.log('All Mongo', requestQuery._id);
    Politicians.findOne({
        _id: requestQuery._id
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.status(404).send({
                result: err
            });
        } else {
            if (doc === null) {
                insertPoliticians(requestQuery, response);
            } else {
                doc.firstName = requestQuery.firstName;
                doc.save();
                response.status(200).send({
                    result: 'success',
                    query: requestQuery.body
                });
            }
        }
    });
};

module.exports = allMongo;