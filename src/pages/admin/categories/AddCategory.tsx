import React, { useContext, useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageContext } from "../../../store/message-context";
import { addCate } from "../../../api/category";
import { useNavigate } from "react-router-dom";
type FormDataType = {
  name: string;
};
const intialFormData = {
  name: "",
};

const reducerFormData = (
  state: FormDataType,
  action: { type: string; payload: string }
) => {
  // complex logic
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

type FormValidType = {
  isValidName: boolean;
};

const intialFormValid = {
  isValidName: true,
};

const reducerFormValid = (
  state: FormValidType,
  action: { type: string; payload: FormDataType }
) => {
  let isValid: boolean;
  switch (action.type) {
    case "VALIDATE_NAME":
      isValid = action.payload.name.length > 0;
      return { ...state, isValidName: isValid };

    default:
      return state;
  }
};
const AddCategory = (props: any) => {
  const [categories, setCategory] = useState<any>([]);
  useEffect(() => {
    setCategory(props.categories);
  }, [props]);
  const navigate = useNavigate();
  const [formData, dispatchFormData] = useReducer(
    reducerFormData,
    intialFormData
  );
  const [formValid, dispatchFormValid] = useReducer(
    reducerFormValid,
    intialFormValid
  );
  const { message, setMessage } = useContext(MessageContext);
  // console.log(formData);
  // console.log(message);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formValid.isValidName) {
      try {
        await props.handleAdd(formData);
        // setMessageContent({
        //     message: "Thêm mới thành công",
        //     type: "success"
        // })
        // setCategory(categories);
        navigate("/admin/categories");
        setMessage({
          type: "success",
          message: "Thêm mới danh mục thành công",
        });
      } catch (err: any) {
        // setMessageContent({
        //     message: err.message,
        //     type: "error"
        // })
      }
    }
  };
  return (
    <div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Add Category</h1>
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
                  <a className="active">Add</a>
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
            <form onSubmit={handleSubmit}>
              <div className="d-flex align-items-center mb-3 pb-1">
                <i className="fas fa-cubes fa-2x me-3"></i>
              </div>

              <h1 className="fw-normal mb-3 pb-3 h1 fw-bold mb-0">Form Add</h1>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example17">
                  Product Name
                </label>
                <input
                  type="text"
                  id="form2Example17"
                  className="form-control form-control-lg"
                  name="name"
                  onChange={(e) => {
                    dispatchFormData({
                      type: "UPDATE_NAME",
                      payload: e.target.value,
                    });
                    dispatchFormValid({
                      type: "VALIDATE_NAME",
                      payload: formData,
                    });
                  }}
                  onBlur={() =>
                    dispatchFormValid({
                      type: "VALIDATE_NAME",
                      payload: formData,
                    })
                  }
                />
                <div className="text" style={{ color: "red" }}>
                  {!formValid.isValidName ? "Không được để trống" : ""}
                </div>
              </div>

              <div className="pt-1 mb-4">
                <button className="btn btn-primary" type="submit">
                  Add new category
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AddCategory;
