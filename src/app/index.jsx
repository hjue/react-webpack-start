import React, { Component } from 'react';
import {render} from 'react-dom';
import './demo.scss'
import data from './data.json'


const Profile = ()=>{
  return <h1>Profile</h1>
}

const App = React.createClass({

  getInitialState: function() {
      return {count: this.props.elapsed};
  },

  render: function() {

    return (
      <div><h1>Hello React!</h1>
      <Profile />
      {this.props.elapsed }</div>
    );
  }
});

var start = new Date().getTime();
setInterval(function() {
  render( React.createElement(App,{elapsed: new Date().getTime() - start}), document.getElementById('app'));
},3000);
