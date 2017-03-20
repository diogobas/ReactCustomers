var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var CustomerApp = require('CustomerApp');

//Load foundation
$(document).foundation();

//App class
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <CustomerApp/>,
  document.getElementById('app')
);
