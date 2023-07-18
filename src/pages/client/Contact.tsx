import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/contact.css";
const Contact = () => {
  return (
    <div>
      <main>
        <section className="contact">
          <div className="container">
            <h1 className="big-title">Contact</h1>
            <div className="about-icons">
              <Link to="/">
                <i className="about-icon bx bxs-home"></i>
              </Link>
              <span> / Contact</span>
            </div>
          </div>
        </section>
        <section className="get">
          <div className="container">
            <div className="get-in">
              <img src="/src/assets/images/img40.png" alt="" />

              <div className="get-form">
                <div className="get-top">
                  <h1>Get in touch</h1>
                  <p>
                    Have an inquiry or some feedback for us? Fill out the form
                    below to contact our team.
                  </p>
                </div>
                <div className="get-form--name">
                  <div>
                    <label htmlFor="">First name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Last name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="get-form--email">
                  <label htmlFor="">Email address</label>
                  <input type="text" />
                </div>
                <div className="get-form--message">
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <Link to="#" className="get-form--btn">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="address">
          <div className="container">
            <div className="address-contact">
              <div className="address-item">
                <h4>CONTACT</h4>
                <p>Hotline: +00 (123) 456 789 0</p>
                <p>Working time: 8:00 - 21:00, Monday - Friday</p>
              </div>
              <div className="address-item">
                <h4>EMAIL</h4>
                <p>CSKH: info@duydeptrai.com</p>
                <p>The media: marketing@duydeptrai.com</p>
              </div>
            </div>
          </div>
        </section>
        <section className="stores">
          <div className="container">
            <h1 className="heading">Products are sold in stores</h1>
            <div className="store">
              <img src="/src/assets/images/img41.png" alt="" />
              <div className="store-location">
                <div className="store-location--item">
                  <h3>1. Duydeptrai Phú Diễn</h3>
                  <p>64, Phú Diễn, Bắc Từ Liêm, Hà Nội (+84) 909 991 042</p>
                </div>
                <div className="store-location--item">
                  <h3>2. Duydeptrai Hoàn Kiếm</h3>
                  <p>15, Bà Triệu, Hoàn Kiếm, Hà Nội (+84) 919 962 320</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
