import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/about.css";
const About = () => {
  return (
    <div>
      <main>
        <section className="about">
          <div className="container">
            <h1 className="big-title">About Us</h1>
            <div className="about-icons">
              <Link to="/">
                <i className="about-icon bx bxs-home"></i>
              </Link>
              <span> / About</span>
            </div>
            <div className="about-video">
              <img src="/src/assets/images/img10.png" alt="" />
              <img src="/src/assets/images/icon-play.svg" alt="" />
            </div>
            <div className="designer-strength">
              <div className="strength">
                <img src="/src/assets/images/ship.svg" alt="" />
                <div className="strength-content">
                  <h3 className="strength-title">FAST DELIVERY</h3>
                  <p className="strength-desc">
                    Delivery Within 24 hours In Any Place
                  </p>
                </div>
              </div>
              <div className="strength">
                <img src="/src/assets/images/bud.svg" alt="" />
                <div className="strength-content">
                  <h3 className="strength-title">24/7 SUPPORT</h3>
                  <p className="strength-desc">
                    Get Our Support Any Time At Any Hour
                  </p>
                </div>
              </div>
              <div className="strength">
                <img src="/src/assets/images/wall.svg" alt="" />
                <div className="strength-content">
                  <h3 className="strength-title">SECURE SHOPPING</h3>
                  <p className="strength-desc">
                    Highly Secured Online Payment Method
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <h1 className="heading">Experience</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices
            </p>
            <div className="experience-abouts">
              <div className="experience-about">
                <div className="experience-about--content">
                  <h2>Perfect powerful theme for corporate business</h2>
                  <p>
                    It is accompanied by a case that can contain up to three
                    different diffusers and can be used for dry storage of loose
                    tea. The perfect way to enjoy brewing tea on low hanging
                    fruit to identify. Lighting is a minimal residence located
                    in Tokyo, Japan, designed by Spozy. Large titles were
                    arranged on the counter top plate near the window of the
                    living room, they were connected to the kitchen counter
                    through the opening in the existing building wall.
                  </p>
                  <br />
                  <br />
                  <p>
                    It is accompanied by a case that can contain up to three
                    different diffusers and can be used for dry storage of loose
                    tea. The perfect way to enjoy brewing tea on low hanging
                    fruit to identify. Lighting is a minimal residence located
                    in Tokyo, Japan, designed by Spozy.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1485518882345-15568b007407?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                  alt=""
                />
              </div>
              <div className="experience-about">
                <img
                  src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                  alt=""
                />
                <div className="experience-about--content">
                  <h2>Our Mission</h2>
                  <p>
                    It is accompanied by a case that can contain up to three
                    different diffusers and can be used for dry storage of loose
                    tea. The perfect way to enjoy brewing tea on low hanging
                    fruit to identify.
                  </p>
                  <br />
                  <br />
                  <h2>Our Vision</h2>
                  <p>
                    It is accompanied by a case that can contain up to three
                    different diffusers and can be used for dry storage of loose
                    tea. The perfect way to enjoy brewing tea on low hanging
                    fruit to identify. Lighting is a minimal residence located
                    in Tokyo, Japan, designed by Spozy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="signup">
          <div className="signup-content">
            <div className="container">
              <h1 className="signup-title">SIGN UP FOR NEWS & GET 20% OFF</h1>
              <div className="signup-email">
                <input
                  type="text"
                  className="signup-input"
                  placeholder="Your email address"
                />
                <a href="#" className="signup-btn">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
            alt=""
          />
        </section>
        <section className="instagram">
          <div className="container">
            <h1 className="heading">Connect To Instagram</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices
            </p>
            <div className="instagram-btn">
              <a href="#">Join now</a>
            </div>
            <div className="instagram-image">
              <img src="/src/assets/images/img11.png" alt="" />
              <img src="/src/assets/images/img12.png" alt="" />
              <img src="/src/assets/images/img13.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
