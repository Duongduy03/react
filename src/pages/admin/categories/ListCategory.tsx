import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { removeCate } from "../../../api/category";
const ListCategory = (props: any) => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    setCategory(props.categories);
  }, [props]);
  // console.log(categories);

  // console.log(props.products);
  const removeCategory = (id: number | string) => {
    props.handleRemove(id);
  };
  return (
    <div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>List Category</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">Admin</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active">Categories</a>
                </li>
              </ul>
            </div>
            <Link to="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </Link>
          </div>
          <Link to="/admin/categories/add">
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

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((category: any, index) => {
                  return (
                    <tr key={category._id}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>

                      <td>
                        <Link to={`/admin/categories/update/${category._id}`}>
                          <i className="bx bx-edit-alt"></i>
                        </Link>

                        <i
                          className="bx bxs-trash"
                          onClick={() => removeCategory(category._id)}
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

export default ListCategory;
