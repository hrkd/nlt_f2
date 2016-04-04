var APP = {} || APP;

(function(APP){
'use strict';
var util = require('util');
var Super = require('../app');
var that;

var Class = function(s) {
  that = this;
  console.log('const class.');
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public method
p.publicMethod = function(){
};

//private method
function privateMethod(){
}

module.exports = (function() {
  return Class;
})();
})(APP);
