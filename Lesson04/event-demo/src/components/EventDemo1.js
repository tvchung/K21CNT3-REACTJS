import React, { Component } from "react";

export default class EventDemo1 extends Component {

    handleClick1(){
        alert("Button 01");
    }
    handleClick2(){
        alert('Button 02');
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>Button 01</button>
        <button onClick={this.handleClick2}>Button 02</button>
      </div>
    );
  }
}
