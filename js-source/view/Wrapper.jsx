;(function(){
'use strict';
var util = require('util');
var Super = require('../app');

var React = require('react');
var Stations = require('./Stations.jsx');
var Thumbnail = require('./Thumbnail.jsx');
var TextArea = require('./TextArea.jsx');

var Component = React.createClass({
  componentWillMount: function(){
    this.setState(this.props.data);
  },
  componentWillReceiveProps: function(nextProps){
    this.setState(nextProps.data);
  },
  render: function(){
    return (
      <div className="react_wrapper">
        <Stations />
        <Thumbnail data={this.state.apiData.items}/>
        <TextArea videoData={this.state.apiData} />
      </div>
    );
  }
});

module.exports = Component;
})();
