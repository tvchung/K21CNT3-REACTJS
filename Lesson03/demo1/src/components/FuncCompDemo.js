//1. import đối tượng React từ react
import React from 'react'
//2. Tạo function component (normal function / arrow function)
// input:props
// output: react element => hiển thị trên UI (view)
function FuncCompDemo(props){
    return(
        <div>
            <h2>Đây là Function Component</h2>
            <p>Hiển thị nội dung từ props</p>
            <p>Welcome to, <b>{props.name}</b> </p>
            <address>Địa chỉ: {props.address}</address>
        </div>
    );
}

//3. export default .... => để dùng ở đâu đó trong dự án
export default FuncCompDemo;
