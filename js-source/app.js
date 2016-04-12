;(function(APP){
'use strict';
var Observer = require('./util/Observer');
var Class = function(s) {
};

//shortcut
var p = Class.prototype;
p.APP = {
  state: {
    currentStation: {
      name: "J-WAVE",
      key: 'jwave'
    },
    stations: [{
      name: "J-WAVE",
      key: 'jwave'
    },{
      name: "TokyoFM",
      key: 'tfm'
    }]
  },
  NAME : 'this app name'
};
p.observer = new Observer();

module.exports = (function() {
  return Class;
})();
})();
