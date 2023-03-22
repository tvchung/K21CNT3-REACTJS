import React, { Component } from "react";

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
     studentId: "", 
     studentName: "", 
     age: 0, 
     sex: true, 
     birthDate: "", 
     birthPlace: "", 
     address: "",
    }
  }

  componentWillMount() {
    let {renderActionName,renderStudent}=this.props;
    if(renderActionName === "Close" || renderActionName ==="Update" ){
      this.setState({
        studentId: renderStudent.studentId, 
        studentName: renderStudent.studentName, 
        age: renderStudent.age, 
        sex: renderStudent.sex, 
        birthDate: renderStudent.birthDate, 
        birthPlace: renderStudent.birthPlace, 
        address: renderStudent.address,
       });
    }
  }
  componentWillReceiveProps = (nextProps) =>{
    let {renderActionName,renderStudent}=nextProps;
    if(renderActionName === "Close" || renderActionName ==="Update" ){
      this.setState({
        studentId: renderStudent.studentId, 
        studentName: renderStudent.studentName, 
        age: renderStudent.age, 
        sex: renderStudent.sex, 
        birthDate: renderStudent.birthDate, 
        birthPlace: renderStudent.birthPlace, 
        address: renderStudent.address,
       });
    }
  }
  handleSubmit = (event)=>{
    this.props.onHandleSubmit(false)
    event.preventDefault();
  }
  render() {
    // Lấy thuộc tính renderActionName để hiển thị nút (submit)
    let {renderActionName,renderStudent}=this.props;
    console.log("actionName:",renderActionName);

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" 
                  value={this.state.studentId}
                  name="studentId"
                  
                  />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" 
                  value={this.state.studentName}
                  name="studentName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"
                  value={this.state.age}
                  name="age"
                  />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" 
                   value={this.state.sex}
                   name="sex"
                  >
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" 
                  value={this.state.birthDate}
                  name="birthDate"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" 
                     value={this.state.birthPlace}
                     name="birthPlace"
                  >
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" 
                 value={this.state.address}
                 name="address"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2"
              onClick={this.handleSubmit}>
              {renderActionName}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
