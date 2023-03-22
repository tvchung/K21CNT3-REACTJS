import React, { Component } from 'react'

export default class EventDemo2 extends Component {
    handleClick3 =(content) =>{
        alert(content);
    }
    handleClick4 = (content)=>{
        alert(content);
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick3("Đây là Button3")}>Button 03</button>
        <button onClick={()=>this.handleClick4("Đây là Button4")}>Button 04</button>
      </div>
    )
  }
}
