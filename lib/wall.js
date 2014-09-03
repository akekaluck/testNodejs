/**
 * Created by u0145690 on 8/26/2014.
 */
module.exports = function(bottles) {
    this.bottles = bottles;
    this.fall = function(n) {
        this.bottles = this.bottles/10;
        this.bottles -= n;

    }
};

module.exports.PrintName = function() {
   console.log("Print")
};