/**
 * Created by bcuser on 6/1/17.
 */
var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'home': String,
    'city': String,
    'planet': String,
    'sector': String,
});

module.exports = mongoose.model('politician', politicianSchema);