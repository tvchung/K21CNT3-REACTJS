import React, { Component } from 'react'

export default class EventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Chung chung",
            age:123,
            course:"CSS3"
        }
    }
    handleChange = (e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState({
            [name]:value,
        })
    }
    handleSubmit =(event)=>{

        alert("Khóa học:" + this.state.course 
            + "\n Tên:" + this.state.studentName 
            + "\n Tuổi:" + this.state.age);


        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>StudentName:</label>
                <input type="text" 
                    name="studentName"
                    value={this.state.studentName} 
                    onChange={this.handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" 
                    name="age"
                    value={this.state.age} 
                    onChange={this.handleChange} />
            </div>
            <div>
                <label>Course:</label>
                <select 
                    name='course'
                    value={this.state.course}
                    onChange={this.handleChange}>
                    <option value="HTML5">HTML5</option>
                    <option value="CSS3">CSS3</option>
                    <option value="Js">Js</option>
                    <option value="ReactJS">ReactJS</option>
                </select>
            </div>
            <input type="submit" value={'Submit'} />
        </form>
      </div>
    )
  }
}
