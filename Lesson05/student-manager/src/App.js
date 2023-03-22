import React, { Component } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Đối tượng dữ liệu student
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studefalsentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 20, sex: false, birthDate: "2023-07-07", birthPlace: "HCM", address: "123, Lý Tự Trọng" }
      ],
      isToggle:false,
      actionName:"LaLaLaLALa",

    }
  }
  // xử lý với form
  handleToggle = (toggle, actionName)=>{
    // console.log("handleToggle:",toggle);
    this.setState({
      isToggle:toggle,
      actionName:actionName,
    })
  }
  render() {
    // render form theo isToggle 
    // console.log("actionName - App:",this.state.actionName);
    let elementForm = this.state.isToggle === true ? 
      <Form renderActionName={this.state.actionName} /> : "";

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control component  */}
              <Control onHandleToggle={this.handleToggle} />
              {/* Danh sách sinh viên  */}
              <ListStudent  renderListStudent={this.state.students} />
            </div>
          </div>
          <div className="col-5 grid-margin">
           {/* Form thong tin sinh vien  */}
           {/* <Form /> */}
           {elementForm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
