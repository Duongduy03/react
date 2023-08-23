import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { MessageContext } from "../../../store/message-context";
const UpdateCategory = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState<any>();
  const { message, setMessage } = useContext(MessageContext);
  useEffect(() => {
    const currentCategory = props.categories.find(
      (category: any) => category._id === id
    );

    setCategory(currentCategory);
  }, [props]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
      // products: category?.products,
    });
  };
  useEffect(() => {
    setFields();
  }, [category]);

  const onHandleUpdate = async (values: any) => {
    // console.log(values);

    await props.onUpdate(values);
    navigate("/admin/categories");
    // navigate("/admin/products");
    setMessage({
      type: "success",
      message: "Sửa danh mục thành công",
    });
  };
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
            <Form
              form={form}
              style={{ maxWidth: 600 }}
              onFinish={onHandleUpdate}
            >
              {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
              <Form.Item
                label=""
                name="_id"
                style={{ display: "none" }} // ẩn input này đi
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Category Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Tên danh mục không được để trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Update Category
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default UpdateCategory;
