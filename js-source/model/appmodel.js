(function(){
'use strict';
var util = require('util');
var Super = require('../app');
var that;

//shortcut
var Class = function(s) {
  that = this;
  console.log('const AppModel class.');

  //データが取得されたら実行
  that.observer.on('replaceData',function(){
    that.observer.trigger('render');
  });
};
util.inherits(Class,Super);

//shortcut
var p = Class.prototype;

//public method
p.replaceData = function(data){
  that.APP.state.apiData = data;
  that.observer.trigger('replaceData');
};


//private method
function privateMethod(){
}

module.exports = (function() {
  return Class;
})();
})();
