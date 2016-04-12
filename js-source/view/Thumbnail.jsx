;(function(){
'use strict';
var React = require('react');
var Utils = require('../util/Utils');
var utils = new Utils();

var Component = React.createClass({
  adjustState: function(data){
    var d = data[0];
    this.setState({
      data: d,
      thumbs: d.snippet.thumbnails,
    });
  },
  componentWillMount: function(){
    this.adjustState(this.props.data);
  },
  componentWillReceiveProps: function(nextProps){
    this.adjustState(nextProps.data);
  },
  getVideoUrl : function(){
    return utils.getVideoUrl(this.state.data);
  },
  handleClick: function(){
    location.href = this.getVideoUrl();
  },
  render: function(){
    return (
      <div className="thumb">
        <div className="thumb__first">
          <img
            className="thumb__image"
            src={this.state.thumbs.high.url}
            onClick={this.handleClick}
          />
          <div className="thumb__description">
            <p className="thumb__title">
              {this.state.data.snippet.title}
            </p>
            <span className="thumb__body">
              {this.state.data.snippet.description}
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Component;
})();
