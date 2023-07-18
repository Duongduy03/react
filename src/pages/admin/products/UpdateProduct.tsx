import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/login.css";
import { Button, Form, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { FormInstance } from "antd/es/form";
import { MessageContext } from "../../../store/message-context";
const UpdateProduct = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { Option } = Select;
  const [product, setProduct] = useState<any>([]);
  const [category, setCategory] = useState([]);
  const formRef = React.useRef<FormInstance>(null);
  const { message, setMessage } = useContext(MessageContext);
  console.log(props);

  useEffect(() => {
    const currentProduct = props.products.find(
      (product: any) => product._id == id
    );

    setProduct(currentProduct);

    setCategory(props.categories);
  }, [props]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      description: product?.description,
      image: product?.image,
      image1: product?.image1,
      categoryId: product?.categoryId,
    });
  };
  useEffect(() => {
    setFields();
  }, [product]);
  const onHandleUpdate = async (values: any) => {
    // console.log(values);
    // values.name = values.name.trim();
    // // values.price = values.price.trim();
    // values.price = values.price.trim();
    // values.image = values.image.trim();
    // values.description = values.description.trim();

    await props.onUpdate(values);
    navigate("/admin/products");
    setMessage({
      type: "success",
      message: "Update sản phẩm thành công",
    });
  };
  return (
    <div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Add Product</h1>
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
              ref={formRef}
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
                label="Product Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Tên sản phẩm không được để trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product Price"
                name="price"
                rules={[
                  { required: true, message: "Giá không được để trống!" },
                  { pattern: /^(?:\d*)$/, message: "Giá bạn nhập phải là số" },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Mô tả không được để trống!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Image"
                name="image"
                rules={[
                  { required: true, message: "Link ảnh không được để trống !" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Image1"
                name="image1"
                rules={[
                  { required: true, message: "Ảnh không được để trống!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="categoryId"
                label="Danh mục"
                rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
              >
                <Select placeholder="Chọn danh mục" allowClear>
                  {category.map((category: any) => {
                    return category._id === product?.categoryId ? (
                      <Option key={category._id} value={category._id} selected>
                        {category.name}
                      </Option>
                    ) : (
                      <Option key={category._id} value={category._id}>
                        {category.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Update Product
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default UpdateProduct;
