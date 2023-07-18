import React from "react";
import { Link } from "react-router-dom";
const UpdateCategory = () => {
  return (
    <div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Update Category</h1>
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
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active">Update</a>
                </li>
              </ul>
            </div>
            <Link to="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </Link>
          </div>
          <hr />
          <div className="form">
            <form>
              <div className="d-flex align-items-center mb-3 pb-1">
                <i className="fas fa-cubes fa-2x me-3"></i>
              </div>

              <h1 className="fw-normal mb-3 pb-3 h1 fw-bold mb-0">
                Form Update
              </h1>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example17">
                  Product Name
                </label>
                <input
                  type="text"
                  id="form2Example17"
                  className="form-control form-control-lg"
                  name="name"
                />
              </div>

              <div className="pt-1 mb-4">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default UpdateCategory;