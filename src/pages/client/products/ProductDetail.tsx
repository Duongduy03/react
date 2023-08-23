import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../../assets/css/detail.css";
import "../../../assets/js/main.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { get } from "../../../api/product";
import { Button, Checkbox, Form, Input, Modal, message } from "antd";
import { addCart } from "../../../api/cart.js";
type FormValues = {
  user_id: string;
  items: [
    {
      product_id: string;
      name: string;
      price: number;
      size: string;
      color: string;
      description: string;
      quantity: number;
      subtotal: number;
    }
  ];
};
const ProductDetail = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log(user);

  // console.log(id);
  const [product, setProduct] = useState<any>([]);
  const getProduct = async () => {
    const { data } = await get(String(id));
    return data;
  };
  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data.data);
    });
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = async (data: any) => {
    console.log(data);

    const data1 = {
      user_id: user._id,
      items: {
        quantity: +data.items[0].quantity,
        size: data.items[0].size,
        color: data.items[0].color,
        name: product.productName,
        product_id: product._id,
        price: product.price,
        description: product.description,
        subtotal: +data.items[0].quantity * product.price,
      },
    };
    console.log(data1);

    try {
      const loading = await message.loading({
        content: "loading!",
        duration: 2,
      });
      if (loading) {
        const response: any = await addCart(data1);

        if (response) message.success("successfully add cart", 3);
        navigate("/cart");
      }
    } catch (error: any) {
      message.error(error.response.data.message, 5);
    }
  };

  return (
    <div>
      <main>
        <section className="contact">
          <div className="container">
            <h1 className="big-title">Products Detail</h1>
            <div className="about-icons">
              <Link to="/">
                <i className="about-icon bx bxs-home"></i>
              </Link>
              <span> / Product / Detail</span>
            </div>
          </div>
        </section>
        <section className="blogs">
          <div className="container">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-box">
                <div className="left">
                  <div className="big-img">
                    <img src={product?.image?.[0].url} className="big-img1" />
                  </div>
                  <div className="images">
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img12.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img13.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img16.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img15.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="pname"></div>
                  <div className="pname">
                    <p hidden> {product._id}</p>
                  </div>
                  <div className="pname">
                    <h3>{product.productName}</h3>
                  </div>

                  <div className="price">
                    Price:
                    <span>$ {product.price}</span>
                  </div>
                  <div className="size">
                    <div className="form-group">
                      <label htmlFor="">Size</label>

                      <select
                        id=""
                        className="form-control"
                        {...register("items.0.size")}
                      >
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                  </div>

                  <div className="quantity">
                    <p>Quantity :</p>
                    <input
                      type="number"
                      min={1}
                      step={1}
                      max={5}
                      defaultValue={1}
                      {...register("items.0.quantity")}
                    />
                  </div>
                  <div className="quantity">
                    <div className="form-group">
                      <label htmlFor="">Color</label>
                      <select
                        id=""
                        className="form-control"
                        {...register("items.0.color")}
                      >
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                      </select>
                    </div>
                  </div>
                  <div className="description">
                    <p>Descripiton: {product.description}</p>
                  </div>

                  <div className="btn-box">
                    <button className="cart-btn" type="submit">
                      Add to Cart
                    </button>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
