import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/blog.css";
const Blogs = () => {
  return (
    <div>
      <main>
        <section className="lastest">
          <div className="container">
            <h1 className="big-title">Latest & Greatest</h1>
            <div className="about-icons">
              <Link to="">
                <i className="about-icon bx bxs-home"></i>
              </Link>
              <span> / Blog Details</span>
            </div>
          </div>
        </section>
        <section className="blogs">
          <div className="container">
            <div className="blogs-lastest">
              <div className="blogs-sidebar">
                <div className="blogs-search">
                  <input
                    type="text"
                    className="blogs-input"
                    placeholder="Search"
                  />
                  <Link to="#" className="blogs-btn">
                    <i className="bx bx-search"></i>
                  </Link>
                </div>
                <div className="blogs-categories">
                  <h2>Categories</h2>
                  <div className="categories-item is-focus">
                    <span>Furniture</span>
                    <span>(06)</span>
                  </div>
                  <div className="categories-item">
                    <span>Fashion</span>
                    <span>(09)</span>
                  </div>
                  <div className="categories-item">
                    <span>Life style</span>
                    <span>(02)</span>
                  </div>
                  <div className="categories-item">
                    <span>Toy</span>
                    <span>(07)</span>
                  </div>
                  <div className="categories-item">
                    <span>Photography</span>
                    <span>(05)</span>
                  </div>
                </div>
                <div className="blogs-recent">
                  <h2>Recent Posts</h2>
                  <div className="recent-item">
                    <img src="/src/assets/images/img36.png" alt="" />
                    <div>
                      <h3>Sweater For Winter</h3>
                      <span>April 01 , 2022</span>
                    </div>
                  </div>
                  <div className="recent-item">
                    <img src="/src/assets/images/img37.png" alt="" />
                    <div>
                      <h3>Summer Fashion</h3>
                      <span>April 01 , 2022</span>
                    </div>
                  </div>
                  <div className="recent-item">
                    <img src="/src/assets/images/img38.png" alt="" />
                    <div>
                      <h3>Best Beach Outfits</h3>
                      <span>April 01 , 2022</span>
                    </div>
                  </div>
                  <div className="recent-item">
                    <img src="/src/assets/images/img39.png" alt="" />
                    <div>
                      <h3>Sweater For Winter</h3>
                      <span>April 01 , 2022</span>
                    </div>
                  </div>
                </div>
                <div className="blogs-newsletter">
                  <h2>Newsletter</h2>
                  <div className="blogs-newsletter--search">
                    <input
                      type="text"
                      className="blogs-newsletter--input"
                      placeholder="Enter your email"
                    />
                    <Link to="#" className="blogs-newsletter--btn">
                      Subscribe
                    </Link>
                  </div>
                </div>
                <div className="blogs-tags">
                  <h2>Tags</h2>
                </div>
              </div>
              <div className="blog">
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img30.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">Sweater For Winter</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The ear of ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img31.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">Best Beach Outfits</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The ear of ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img32.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">Sweater For Winter</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The ear of ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="blog">
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img33.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">The best summer ...</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    One may not need charts and graphs at this point to know
                    that, in the past couple of years especially, the ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img34.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">Sweater For Winter</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    One may not need charts and graphs at this point to know
                    that, in the past couple of years especially, the ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
                <div className="blog-item">
                  <img
                    src="/src/assets/images/img35.png"
                    alt=""
                    className="blog-img"
                  />
                  <h2 className="blog-title">Best Beach Outfits</h2>
                  <span className="blog-time">April 01 , 2022</span>
                  <p className="blog-desc">
                    One may not need charts and graphs at this point to know
                    that, in the past couple of years especially, the ...
                  </p>
                  <Link to="#" className="blog-btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;
