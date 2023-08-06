import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/product.css";
const ProductList = (props: any) => {
  console.log(props.products);

  return (
    <div>
      <section className="contact">
        <div className="container">
          <h1 className="big-title">Products</h1>
          <div className="about-icons">
            <Link to="/">
              <i className="about-icon bx bxs-home"></i>
            </Link>
            <span> / Shop</span>
          </div>
        </div>
      </section>
      <section className="sales">
        <div className="container">
          <div className="sale">
            <div className="sale-left">
              <h1>Top Designer Pick</h1>
              <p>
                The pinnacle of versatility, our core collection is flattering
                on all body types, looks great layered or alone, and is designed
                to span the seasons 90’ s sustainable photo booth
              </p>
            </div>
            <h1 className="sale-off">50% OFF</h1>
          </div>
        </div>
        <img src="/src/assets/images/img14.png" alt="" className="img-w100" />
        <img
          src="/src/assets/images/img29.png"
          alt=""
          className="img-special img-w100"
        />
      </section>
      <section className="shops">
        <div className="container">
          <div className="shop">
            <div className="shop-item">
              <div className="shop-title">
                <h1>Collection</h1>
                <img src="/src/assets/images/line.svg" alt="" />
              </div>
              <div className="collection">
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
            </div>
            <div className="shop-item">
              <div className="shop-title">
                <h1>Top Sellers</h1>
                <img src="/src/assets/images/line.svg" alt="" />
              </div>
              <div className="products">
                {props.products.map((product: any) => {
                  return (
                    <div className="product-item" key={product._id}>
                      <div className="product-image">
                        <img
                          src={product.image[0]?.url}
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
                  );
                })}
              </div>
            </div>
            <div className="shop-item">
              <div className="shop-title">
                <h1>New Arrivals</h1>
                <img src="/src/assets/images/line.svg" alt="" />
              </div>
              <div className="products">
                {props.products.map((product: any) => {
                  return (
                    <div className="product-item" key={product._id}>
                      <div className="product-image">
                        <img
                          src={product.image[0]?.url}
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="user">
        <div className="container">
          <div className="shops">
            <div className="shop">
              <div className="shop-item">
                <div className="shop-title">
                  <h1>Featured</h1>
                  <img src="/src/assets/images/line.svg" alt="" />
                </div>
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
            </div>
          </div>
          <div className="user-talk">
            <img
              src="/src/assets/images/star.svg"
              alt=""
              className="user-icon"
            />
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ex, provident dolorum repudiandae eum ducimus, iure eaque
              architecto corporis suscipit enim, commodi magni ut atque iste
              quis natus illo sit. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Laboriosam esse, ullam non reiciendis voluptatem
              alias, enim facilis amet atque placeat similique necessitatibus"
            </p>
            <div className="user-author">
              <img src="/src/assets/images/anh_duy.jpg" alt="" />
              <div className="user-name">Duong Van Duy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
