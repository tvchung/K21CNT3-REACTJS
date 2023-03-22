import React, { Component } from 'react'

export default class EventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Chung Chung"
        }
    }

    handleChange = (e)=>{
        this.setState({
            studentName:e.target.value,
        })
    }

    handleSubmit =(event)=>{
        alert("Tên sinh viên:" + this.state.studentName);
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>StudentName:</label>
                <input type="text" 
                    value={this.state.studentName} 
                    onChange={this.handleChange} />
            </div>
            <input type="submit" value={'Submit'} />
        </form>
      </div>
    )
  }
}
