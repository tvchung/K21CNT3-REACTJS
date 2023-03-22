/*
    Xây dựng class component 
    - trình bày phần banner của website
        + Hỉnh ảnh
        + nội dung mô tả
    => tham khảo: http://cutuananh.devmaster.vn/
    15'
*/

// 1. import đối tượng react
import React, { Component } from "react";

// 2. Tạo class kế thừa từ Component
// input: props
// output: render react element => view
class ClassCompBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"K21CNT3 - ReactJS",
            course:"ReactJS"
        }
    }
    render(){
        return(
            <div className="banner">
              <img src="images/banner.jpg" alt="Banner" />
              <div className="content">
                  <h2>THẾ GIỚI NỘI THẤT SỐ 1 VIỆT NAMHOÀNG HOAN</h2>
                  <p>Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.</p>
                  <button>liên hệ ngay</button>
                  <p>Name:{this.state.name}</p>
                  <p>Course:{this.state.course}</p>
              </div>
            </div>
        );
    }
}

// 3. export => dùng trong ứng dụng
export default ClassCompBanner;