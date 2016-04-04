;(function(APP){
'use strict';
var Observer = require('./util/Observer');
var Class = function(s) {
};

//shortcut
var p = Class.prototype;
p.APP = {
  state: {},
  NAME : 'this app name'
};
p.observer = new Observer();

module.exports = (function() {
  return Class;
})();
})();
