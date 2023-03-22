/*
    Tạo function component header:
    
    1. Tên: FuncCompHeader
        input:props
        output: react element
            -> hiển thị thông tin đầu trang web bao gồm
                + Logo
                + Tên công ty
                + liên hệ
    2. Tên: FuncCompMenu
        input:props
        output: react element
            -> Hiển thị menu điều hướng
            bao gồm:
                Trang chủ | Sản phẩm | Dịch vụ | Liên hệ | Hỗ trợ
    15'
*/
import React from "react";

export const FuncCompHeader = (props) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="images/logo.jpg" alt="Logo" />
        </div>
        <div>
          <h2>CÔNG TY CỔ PHẦN SAO THÁI DƯƠNG</h2>
        </div>
        <div>
          <a href="tel:0978611889">0978611889</a>
        </div>
      </div>
    </div>
  );
};

export const FuncCompMenu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
