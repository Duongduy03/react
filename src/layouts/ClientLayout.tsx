import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/js/main.js";

import { Link } from "react-router-dom";
import "../App.css";
import Header from "../components/client/Header.js";
import Footer from "../components/client/Footer.js";
const ClientLayout = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
