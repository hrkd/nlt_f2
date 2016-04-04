;(function(){
'use strict';

var $ = require('jquery');

var Class = function(s) {
  console.log('const ApiClient class.');
};

//shortcut
var p = Class.prototype;

//public method
p.publicMethod = function(){
};

p.get= function(){
  return get('http://api.nowlistening.tokyo/jwave',{},true)
    .then(function(data){
      return getYoutubeInfo(data);
    });
};

//private method
function getYoutubeInfo(data) {
  var APIKEY = 'AIzaSyD5VdH4vZuheJMLDjwqr8Y0CaR4RQzorAc',
      searchUrl = 'https://www.googleapis.com/youtube/v3/search',
      watchUrl = 'http://youtube.com/watch';

  return get(searchUrl,{
    q :    data.title+" "+ data.artist,
    key:   APIKEY,
    part : "snippet",
    alt:   "json"
  },false);
}

function get(url,data,jsonp) {
  var option = {
    url:      url,
    data:     data,
    type:     'GET',
    dataType: 'json'
  };
  if(jsonp){
    option.dataType = 'jsonp';
    option.jsonp    = 'callback';
  }
  return $.ajax(option);
}


module.exports = (function() {
  return Class;
})();
})();
