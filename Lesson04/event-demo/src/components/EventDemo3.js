import React, { Component } from 'react'

export default class EventDemo3 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Chuung Chung"
        }
    }
    handleClick5 =()=>{
        alert(this.props.name);
    }
    handleClick6 =()=>{
        alert(this.state.name);
        this.setState({
            name:"New new name",
        })
        alert(this.state.name);
    }
  render() {
    return (
      <div>
         <button onClick={this.handleClick5}>Button 05</button>
         <button onClick={this.handleClick6}>Button 06</button>
      </div>
    )
  }
}
