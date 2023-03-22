import React, { Component } from 'react'

export default class StateDemo extends Component {
    // constructor
    constructor(props){
        super(props);
        // tổ chức dữ liệu trong đối tượng state 
        this.state={
            name:"Chung Chung",
            age:123
        }

    }
    // thay đổi dữ liệu trong state
    handleChange =()=>{
        this.setState({
            name:"Nguyễn Trãi University",
            age:15
        })
    }
  render() {
    return (
      <div>
        <h1>Hiển thị dữ liệu trong state</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <hr/>
        <h2>Hiển thị dữ liệu từ props</h2>
        <p>Company:{this.props.company}</p>
        <address>Địa chỉ: {this.props.address}</address>

        <hr/>
        <button onClick={this.handleChange}> Change data in state</button>
      </div>
    )
  }
}
