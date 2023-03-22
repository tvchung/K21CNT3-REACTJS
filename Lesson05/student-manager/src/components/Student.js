import React, { Component } from "react";

class Student extends Component {

  handleView = (student)=>{
    this.props.onHandleView(true,"Close",student)
  }
  handleEdit = ()=>{
    this.props.onHandleEdit(true,"Update")
  }
  render() {
    // Lây dữ liệu từ props để hiển thị lên component (view)
    let { renderStudent, stt } = this.props;
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{renderStudent.sex === true ? "Nam" : "Nữ"}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text"
                onClick={()=>this.handleView(renderStudent)}>
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
                onClick={this.handleEdit}>
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
export default Student;
