import React, { Component } from 'react'

export default class EventForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            course:"CSS3"
        }
    }
    handleChange = (e)=>{
        this.setState({
            course:e.target.value,
        })
    }
    handleSubmit =(event)=>{
        alert("Khóa học:" + this.state.course);
        event.preventDefault();
    }
  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Course:</label>
                <select value={this.state.course}
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
