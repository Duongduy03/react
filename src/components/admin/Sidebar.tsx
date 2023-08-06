import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input, message } from "antd";
const Sidebar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    localStorage.clear();
    await message.loading({
      content: "loading...",
      duration: 2,
    });
    message.success("Đăng xuất thành công");
    navigate("/");
  };
  return (
    <section id="sidebar">
      <Link to="/admin" className="brand">
        <span className="text">Admin</span>
      </Link>
      <ul className="side-menu top" id="menu">
        <li className="active">
          <Link to="/admin" className="menu-link is-active">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="menu-link">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">Products</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/categories" className="menu-link">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Categories</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/comments" className="menu-link">
            <i className="bx bxs-message-dots"></i>
            <span className="text">Comments</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="menu-link">
            <i className="bx bxs-group"></i>
            <span className="text">User</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <a className="logout" onClick={() => logout()}>
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
