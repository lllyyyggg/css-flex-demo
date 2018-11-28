import React, { Component } from 'react';

import './App.css';

class FlexDemo extends Component {
    render() {
      return (
        <div>
          <div id="p-box">
            <div id='box1'></div>
            <div id='box2'></div>
            <div id='box3'></div>
            <div id='box4'></div>
            <div id='box5'></div>
          </div>
          <div style={{height:'100px'}}></div>
          <div id="p-box-2">
            <div id='box6'></div>
            <div id='box7'></div>
            <div id='box8'></div>
            <div id='box9'></div>
            <div id='box10'></div>
           
          </div>
          <div style={{height:'100px'}}></div>
          <div id="p-box-3">
      
            <div id='box11'></div>
            <div id='box12'></div>
            <div id='box13'></div>
          </div>

          <div style={{height:'100px'}}></div>
          <div id="p-box-4">
      
            <div id='box14'></div>
            <div id='box15'></div>
            <div id='box16'></div>
            <div id='box17'></div>
          </div>
        </div>

        
      )
    }
}
class App extends Component {
  render() {
    return (
          <FlexDemo/>
    );
  }
}

export default App;
