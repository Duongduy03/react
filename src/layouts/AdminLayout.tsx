import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/css/admin/dashboard.css";
import MessageProvider from "../store/message-context";

const AdminLayout = () => {
  return (
    <MessageProvider>
      <div>
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
              <a className="logout">
                <i className="bx bxs-log-out-circle"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </section>

        <section id="content">
          <nav>
            <i className="bx bx-menu"></i>
            <Link to="#" className="nav-link">
              Categories
            </Link>
            <form action="#">
              <div className="form-input">
                <input type="search" placeholder="Search..." />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <Link to="#" className="notification">
              <i className="bx bxs-bell"></i>
              <span className="num">8</span>
            </Link>
            <Link to="#" className="profile">
              <img src="/src/assets/images/people.png" />
            </Link>
          </nav>
        </section>
        <Outlet />
      </div>
    </MessageProvider>
  );
};

export default AdminLayout;
