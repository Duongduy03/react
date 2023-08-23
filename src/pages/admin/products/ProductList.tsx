import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { remove } from "../../../api/product";
import Message from "../../../components/message";
import { MessageContext } from "../../../store/message-context";
const ListProduct = (props: any) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setProduct(props.products);
  }, [props]);
  // console.log(products);

  // console.log(props.products);
  const removeProduct = (id: number | string) => {
    const conf = window.confirm("Bạn có chắc muốn xóa không ?");
    const newPro = products.filter((product: any) => product._id !== id);

    if (conf) {
      remove(String(id))
        .then(() => setProduct(newPro))
        .then(() => alert("Xóa thành công"));
    }
  };
  return (
    <div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>List Products</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">Admin</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active">Products</a>
                </li>
              </ul>
            </div>
            <Link to="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </Link>
          </div>
          <Link to="/admin/products/add">
            <button className="btn btn-primary">Add</button>
          </Link>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="keyword"
            />
          </form>

          <div className="table">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: any, index: number) => {
                  return (
                    <tr key={product._id}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.color}</td>
                      <td>{product.size}</td>
                      <td>
                        <img
                          style={{ width: 100 }}
                          src={product.image[0].url}
                          alt=""
                        />
                      </td>
                      <td>{product.description}</td>
                      <td>
                        <Link to={`/admin/products/update/${product._id}`}>
                          <i className="bx bx-edit-alt"></i>
                        </Link>

                        <i
                          className="bx bxs-trash"
                          onClick={() => removeProduct(product._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ListProduct;
