import React, { Component } from 'react';
import {render} from 'react-dom';
import './demo.scss'

const App = React.createClass({

  getInitialState: function() {
      return {count: 0};
  },

  componentDidMount: function() {
    setTimeout(function() { this.setState({count: this.state.count + 1}) }.bind(this), 1000);

  },

  render: function() {

    return (
      <div><h1>Hello React!</h1>  {this.state.count }</div>
    );
  }
});

render(<App />, document.getElementById('app'));