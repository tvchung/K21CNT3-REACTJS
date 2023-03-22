// 1. import đối tượng react
import React, { Component } from "react";

// 2. Tạo class kế thừa từ Component
// input: props
// output: render react element => view
class ClassCompDemo extends Component {

    render(){
        return(
            <div>
                <h1>Đây là class component</h1>
                <p>Hiển thị dữ liệu từ props </p>
                <p>Xin chào, {this.props.name}</p>
                <p>Công ty: {this.props.company}</p>
            </div>
        );
    }
}

// 3. export => dùng trong ứng dụng
export default ClassCompDemo;