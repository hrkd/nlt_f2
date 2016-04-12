;(function(){
'use strict';
var React = require('react');
var Utils = require('../util/Utils');
var utils = new Utils();

var Component = React.createClass({
  getInitialState: function(){
    return {};
  },
  getVideoUrl : function(){
    return utils.getVideoUrl(this.props.videoData.items[0]);
  },
  adjustState: function(data){
    var d = data[0];
    this.setState({
      data: d,
      comment: "#NowListening "+d.snippet.title+" "+this.getVideoUrl()
    });
  },
  componentWillMount: function(){
    this.adjustState(this.props.videoData.items);
  },
  componentWillReceiveProps: function(nextProps){
    this.adjustState(nextProps.videoData.items);
  },
  render: function(){
    return (
      <section>
        <div className="tweet">
          {/*<textarea 
            className="form-control tweet__textarea"
            rows="4"
            defaultValue={this.state.comment}
          />*/}
          <a
            className="btn btn-default btn-lg tweet__submit"
            href={"https://twitter.com/share?text="+encodeURIComponent(this.state.comment)}
            target= "_blank"
          >
            TWEET
          </a>
        </div>
      </section>
    );
  }
});

module.exports = Component;
})();
