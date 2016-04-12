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

var Class = function(s) {
  console.log('const Router class.');

  //APIからデータ取得、保存
  p.observer.on('fetch',function(){
    apiClient.get().done(function(data){
      appModel.replaceData(data);
    });
  });

  //データが取得されたら実行
  p.observer.on('replaceData',function(){
    p.observer.trigger('render');
  });

  //htmlを更新
  p.observer.on('render',function(){
    appView.refresh();
  });

  p.observer.trigger('fetch');
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

module.exports = Class;
})();
