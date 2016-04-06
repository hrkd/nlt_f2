(function(){
'use strict';
var util = require('util');
var Super = require('../app');
var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./HelloWorld.jsx');
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
  var data = that.APP.state.apiData.items;
  ReactDOM.render(
    <HelloWorld data={data}></HelloWorld>,
    document.getElementById('container')
  );
};

//private method
function privateMethod(){
}

module.exports = (function() {
  return Class;
})();
})();
