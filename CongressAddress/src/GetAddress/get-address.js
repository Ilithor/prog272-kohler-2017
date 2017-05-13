/**
 * Created by bcuser on 5/6/17.
 */
let fs = require('fs');
let debug = require('debug')('get-address');

debug('Testing debug');

function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) - 1);
}

function getZip(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char));
}

function getCity(value, char, len) {
    'use strict';
    let start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    let comma = noComma ? '"' : '",';
    console.log('/t' + label, '"' + value + comma);
}

readFile('address.json').then(function(text) {
    debug(text);
    let json = JSON.parse(text.result);
    debug('/n/nSTRINGIFY/n/n', JSON.stringify(json));
    let gitUser = [];
    const unknown = 'unknown';
    for (let i = 0; i < json.objects.length; i++) {
        console.log('{');
        writeIt('firstName:', json.objects[i].person.firstname);
        writeIt('lastName:', json.objects[i].person.lastname);
        writeIt('street:', getAddress(json.objects[i].extra.address, 'W'));
        writeIt('city:', getCity(json.objects[i].extra.address, '2'));
        writeIt('state:', json.objects[i].state);
        writeIt('zip: ', getZip(json.objects[i].extra.address));
        writeIt('phone: ', json.objects[i].phone);
        writeIt('website: ', json.objects[i].website);
        writeIt('email:', '');
        writeIt('contact:', json.objects[i].extra.contact_form || '', true);
        console.log('},');
    }
    //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});
