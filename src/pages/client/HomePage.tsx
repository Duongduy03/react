import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import { getAll } from "../../api/product";
// import "../../assets/css/slide.css";

const HomePage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getAll().then((data) => setProduct(data.docs));
  }, []);
  console.log(products);

  return (
    <div>
      <article>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/src/assets/images/img42.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/src/assets/images/img43.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/src/assets/images/img44.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/src/assets/images/img45.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </article>
      <main>
        <section className="designers">
          <div className="container">
            <div className="designer">
              <div className="designer-content">
                <h1 className="designer-title">Top Designer Pick</h1>
                <p className="designer-desc">
                  The pinnacle of versatility, our core the collection is
                  flattering on all body types, looks great layered or alone,
                  and is designed to span the seasons.
                </p>
                <Link to="#" className="designer-button">
                  Shop now
                </Link>
                <div className="designer-price">
                  <h1>50% Discount Till</h1>
                </div>
              </div>
              <div className="designer-image">
                <img
                  src="/src/assets/images/img1.png"
                  alt=""
                  className="designer-img1"
                />
                <img
                  src="/src/assets/images/img2.png"
                  alt=""
                  className="designer-img2"
                />
              </div>
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
        <section className="collection">
          <div className="container">
            <div className="collection-image">
              <img
                src="/src/assets/images/50.svg"
                alt=""
                className="collection-img"
              />
              <img
                src="/src/assets/images/Women's.svg"
                alt=""
                className="collection-img"
              />
              <img
                src="/src/assets/images/Men's.svg"
                alt=""
                className="collection-img"
              />
            </div>
          </div>
        </section>
        <section className="popular">
          <div className="container">
            <h1 className="heading">Popular Products</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices
            </p>
            <div className="products">
              {products.map((product: any) => {
                return (
                  <div className="product-item" key={product._id}>
                    <div className="product-image">
                      <img
                        src={product.image[0].url}
                        alt=""
                        className="product-img"
                      />
                      <div className="opacity">
                        <img
                          src={product.image[1]?.url}
                          alt=""
                          className="product-img1"
                        />
                        <Link to={`/products/${product._id}`}>
                          <button className="view-detail">View Detail</button>
                        </Link>
                        <Link to="/cart">
                          <button className="add-cart">Add to cart</button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="product-top">
                        <h4>Shirts</h4>
                        <img src="/src/assets/images/star.svg" alt="" />
                      </div>
                      <h3 className="product-name">{product.productName}</h3>
                      <div className="product-top">
                        <h3>$ {product.price}</h3>
                        <img src="/src/assets/images/circle.svg" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="container">
            <h1 className="heading">Featured Products</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices
            </p>
            <div className="featured-img">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1602810318660-d2c46b750f88?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1612874470096-d93a610de87b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb24lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
                  alt=""
                />
                <img src="/src/assets/images/img7.svg" alt="" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464"
                alt=""
                className="img-big"
              />
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
                <Link to="#" className="signup-btn">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
            alt=""
          />
        </section>
        <section className="lastests">
          <div className="container">
            <h1 className="heading">Lastest & Greatest</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices
            </p>
            <div className="lastest">
              <div className="lastest-item">
                <div className="lastest-content">
                  <h2>The best summer fashion</h2>
                  <h4>April 01 , 2022</h4>
                  <p>
                    One may not need charts and graphs at this point to know
                    that, in the past couple of years especially, the buying and
                    selling o...
                  </p>
                  <Link to="blogs.html">Read more</Link>
                </div>
                <img src="/src/assets/images/img8.png" alt="" />
              </div>
              <div className="lastest-item">
                <img src="/src/assets/images/img9.png" alt="" />
                <div className="lastest-content">
                  <h2>Sweater for winter</h2>
                  <h4>April 01 , 2022</h4>
                  <p>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The ear of sportswear
                    emerged a...
                  </p>
                  <Link to="blogs.html">Read more</Link>
                </div>
              </div>
              <div className="react">
                <img src="/src/assets/images/react.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
