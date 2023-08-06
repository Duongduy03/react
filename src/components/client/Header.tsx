import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log(user);

  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="header-logo">
            <Link to="#" className="logo">
              DuyDepTrai
            </Link>
          </div>

          <i className="toogle bx bx-menu"></i>
          <div className="header-menu">
            <ul className="menu" id="menu">
              <li className="menu-item">
                <Link to="/" className="menu-link is-active">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="menu-link">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/products" className="menu-link">
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/blog" className="menu-link">
                  Blogs
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact" className="menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-icons">
            <Link to="#">
              <i className="header-icon bx bx-search"></i>
            </Link>
            {user ? (
              <Link to="/customer">
                <i className=" header-icon bx bxs-user"></i>
              </Link>
            ) : (
              <Link to="/login">
                <i className=" header-icon bx bxs-user"></i>
              </Link>
            )}

            <Link to="#">
              <i className="header-icon bx bxs-shopping-bag"></i>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
