import React, { useContext, useReducer, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MessageContext } from "../../../store/message-context";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { addCate } from "../../../api/category";
import { useNavigate } from "react-router-dom";
// type FormDataType = {
//   name: string;

//   description: string;
// };
// const intialFormData = {
//   name: "",
//   description: "",
// };

// const reducerFormData = (
//   state: FormDataType,
//   action: { type: string; payload: string }
// ) => {
//   // complex logic
//   switch (action.type) {
//     case "UPDATE_NAME":
//       return { ...state, name: action.payload };
//     case "UPDATE_DESCRIPTION":
//       return { ...state, description: action.payload };

//     default:
//       return state;
//   }
// };

// type FormValidType = {
//   isValidName: boolean;
//   isValidDescription: boolean;
// };

// const intialFormValid = {
//   isValidName: true,
//   isValidDescription: true,
// };

// const reducerFormValid = (
//   state: FormValidType,
//   action: { type: string; payload: FormDataType }
// ) => {
//   let isValid: boolean;
//   switch (action.type) {
//     case "VALIDATE_NAME":
//       isValid = action.payload.name.length > 0;
//       return { ...state, isValidName: isValid };
//     case "VALIDATE_DESCRIPTION":
//       isValid = action.payload.description.length > 0;
//       return { ...state, isValidDescription: isValid };

//     default:
//       return state;
//   }
// };
const AddProduct = (props: any) => {
  const navigate = useNavigate();
  const { message, setMessage } = useContext(MessageContext);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    setCategory(props.categories);
  }, [props]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onHandleAdd = async (values: any) => {
    // values.name = values.name.trim();
    // values.price = values.price.trim();
    // values.image = values.image.trim();
    // values.description = values.description.trim();

    // await props.handleAdd(values);
    console.log(values);
    // navigate("/admin/products");
    setMessage({
      type: "success",
      message: "Thêm mới sản phẩm thành công",
    });
  };
  // const [categories, setCategory] = useState<any>([]);
  // useEffect(() => {
  //   setCategory(props.categories);
  // }, [props]);
  // const navigate = useNavigate();
  // const [formData, dispatchFormData] = useReducer(
  //   reducerFormData,
  //   intialFormData
  // );
  // console.log(formData);

  // const [formValid, dispatchFormValid] = useReducer(
  //   reducerFormValid,
  //   intialFormValid
  // );
  // const { message, setMessage } = useContext(MessageContext);
  // // console.log(formData);
  // console.log(message);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (formValid.isValidName) {
  //     try {
  //       await props.handleAdd(formData);
  //       // setMessageContent({
  //       //     message: "Thêm mới thành công",
  //       //     type: "success"
  //       // })
  //       // setCategory(categories);
  //       navigate("/admin/products");
  //       setMessage({
  //         type: "success",
  //         message: "Thêm mới sản phẩm thành công",
  //       });
  //     } catch (err: any) {
  //       // setMessageContent({
  //       //     message: err.message,
  //       //     type: "error"
  //       // })
  //     }
  //   }
  // };
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
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onHandleAdd}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              encType="multipart/form-data"
            >
              <Form.Item
                label="Product Name"
                name="name"
                rules={[
                  { required: true, message: "Bạn chưa nhập tên sản phẩm!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Price"
                name="price"
                rules={[
                  { required: true, message: "Bạn chưa nhập giá!" },
                  { pattern: /^(?:\d*)$/, message: "Giá bạn nhập phải là số" },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Original Price"
                name="originalPrice"
                rules={[
                  { required: true, message: "Bạn chưa nhập giá!" },
                  { pattern: /^(?:\d*)$/, message: "Giá bạn nhập phải là số" },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Image"
                name="image"
                rules={[
                  { required: true, message: "Link ảnh không được để trống !" },
                ]}
              >
                <Input type="file" multiple />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Bạn chưa nhập mô tả!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Color"
                name="color"
                rules={[{ required: true, message: "Bạn chưa nhập màu sắc!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Size"
                name="size"
                rules={[{ required: true, message: "Bạn chưa nhập size!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Select"
                name="categoryId"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa chọn danh mục sản phẩm!",
                  },
                ]}
              >
                <Select>
                  {categories.map((cate: any) => {
                    return (
                      <Select.Option key={cate._id} value={cate._id}>
                        {cate.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AddProduct;
