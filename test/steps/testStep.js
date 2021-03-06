/**
 * Created by u0145690 on 8/26/2014.
 */

var assert = require('assert');
var English = require('yadda').localisation.English;
var Wall = require('../../lib/wall'); // The library that you wish to test

module.exports = (function() {
    return English.library()
        .given("$NUM green bottles are standing on the wall", function(number, next) {
            wall = new Wall(number);
            next();
        })
        .when("$NUM green bottle accidentally falls", function(number, next) {
            wall.fall(number);
            next();
        })
        .then("there are $NUM green bottles standing on the wall", function(number, next) {
            assert.equal(number, wall.bottles);
            next();
        });
})();