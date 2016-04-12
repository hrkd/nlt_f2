;(function(){
'use strict';
var React = require('react');

var util = require('util');
var Super = require('../app');
var that = new Super();

var Component = React.createClass({
  componentDidMount: function(){},
  getInitialState: function(){
    return {
      currentStation: that.APP.state.currentStation,
      data:that.APP.state.stations
    };
  },
  onClick:function(e){
    var newStation = this.state.data.filter(function(ele,ind,ary){
      return ele.key === e.target.getAttribute('data-key');
    });
    that.APP.state.currentStation = newStation[0];
    this.setState({
      currentStation: newStation[0],
      data: this.state.data
    });
    that.observer.trigger('fetch');
  },
  render: function(){
    var that = this;
    return (
      <section>
        <div className="dropdown">
          <button
            aria-expanded="true"
            aria-haspopup="true"
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            id="dropdownMenu1"
            type="button"
          >
            {this.state.currentStation.name}<span className="caret"/>
          </button>
          <ul
            aria-labelledby="dropdownMenu1"
            className="dropdown-menu"
          >
          {this.state.data.map(function(result){
            return (
              <li
                key={result.key}
                onClick={that.onClick}
              >
                <a data-key={result.key} href="#">{result.name}</a>
              </li>
            );
          })}
          </ul>
        </div>
      </section>
    );
  }
});

module.exports = Component;
})();
