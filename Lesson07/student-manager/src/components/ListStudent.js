import React, { Component } from "react";
import Student from "./Student";

class ListStudent extends Component {

  handleView = (toggle,actionName,student)=>{
    this.props.onHandleView(toggle,actionName,student);
  }
  handleEdit = (toggle,actionName,student)=>{
    this.props.onHandleEdit(toggle,actionName,student);
  }
  render() {
    // lấy dữ liệu từ props (được truyển từ App xuống)
    let { renderListStudent } = this.props;
    // render data to component (Student)
    let elementStudent = renderListStudent.map((student, index) => {
      return <Student key={index} stt={index + 1} 
              renderStudent={student} 
              onHandleView = {this.handleView}
              onHandleEdit = {this.handleEdit}/>;
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* Student  */}
              {/* <Student />
             <Student />
             <Student /> */}
              {elementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
