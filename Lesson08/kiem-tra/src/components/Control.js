import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:""
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.keyword)
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <label htmlFor='keyword'>Nhập tên sản phẩm</label>
                <input onChange={(event)=>this.setState({keyword:event.target.value})} />
                <button onClick={this.handleSubmit}>Tìm</button>
            </div>
        </form>
      </div>
    )
  }
}
