(function(){
'use strict';
var React = require('react');
var Component = React.createClass({
  render: function(){
    console.log(this.props.data);
    var data = this.props.data;
    return (
      <div>
        <h1>
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          React
        </h1>
        <ul>
          {data.map(function(result){
            return (
              <li key={result.etag}>
                <div>{result.snippet.title}</div>
                <img src={result.snippet.thumbnails.high.url} width="240" height="180" alt=""/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Component;
})();
