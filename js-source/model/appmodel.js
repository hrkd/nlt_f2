;(function(){
'use strict';
var util = require('util');
var Super = require('../app');

//shortcut
var Class = function(s) {
  console.log('const AppModel class.');
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public method
p.replaceData = function(data){
  p.APP.state.apiData = data;
  p.observer.trigger('replaceData');
};


//private method
function privateMethod(){
}

module.exports = Class;
})();
