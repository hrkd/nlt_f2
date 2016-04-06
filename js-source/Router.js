;(function(){
'use strict';
var util = require('util');
var Super = require('./app');

var ApiClient = require('./net/ApiClient');
var apiClient = new ApiClient();

var AppModel  = require('./model/AppModel');
var appModel  = new AppModel();

var AppView  = require('./view/AppView.jsx');
var appView  = new AppView();

var that;

var Class = function(s) {
  that = this;
  console.log('const Router class.');

  //APIからデータ取得、保存
  apiClient.get().done(function(data){
    appModel.replaceData(data);
  });

  //htmlを更新
  that.observer.on('render',function(){
    appView.refresh();
  });
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
})();
