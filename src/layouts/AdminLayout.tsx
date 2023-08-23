import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../assets/css/admin/dashboard.css";
import MessageProvider from "../store/message-context";
import Sidebar from "../components/admin/Sidebar";
import HeaderAdmin from "../components/admin/HeaderAdmin";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user: any = JSON.parse(localStorage.getItem("user") as string);
  console.log(user);

  if (user == null) {
    window.location.href = "/login";
    return false;
  }
  if (user.role !== "admin") {
    // navigate("/login");
    window.location.href = "/";
    return false;
  }

  return (
    <MessageProvider>
      <div>
        <Sidebar />
        <HeaderAdmin />
        <Outlet />
      </div>
    </MessageProvider>
  );
};

export default AdminLayout;
