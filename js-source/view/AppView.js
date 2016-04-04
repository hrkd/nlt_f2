(function(){
'use strict';
var util = require('util');
var Super = require('../app');
var that;

var Class = function(s) {
  that = this;
  console.log('const AppView class.');
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public method
p.refresh = function(){
  console.log(that.APP.state.apiData.items[0].snippet);
};

//private method
function privateMethod(){
}

module.exports = (function() {
  return Class;
})();
})();
