import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authSlice";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { Button, Checkbox, Form, Input, message } from "antd";
import { registerUser } from "../../api/auth";
type RegisterForm = {
  name: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  num_phone: string;
};
const Register = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log(user);
  if (user !== null || user) {
    // navigate("/");
    window.location.href = "/";
    return false;
  }
  const onFinish = async (values: any) => {
    if (values) {
      try {
        const loading = await message.loading({
          content: "loading...",
          duration: 2,
        });
        if (loading) {
          const res: any = await registerUser(values);
          if (res) {
            message.success("Tạo thành công", 3);
            navigate("/login");
          }
        }
      } catch (error: any) {
        message.error(error.response.data.message, 5);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <section className="vh-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 align-items-center">
                    <Form
                      // style={{ maxWidth: 6000 }}
                      className="mt-3 px-3 py-5 w-[400px] mx-[auto]"
                      name="form_item_path"
                      layout="vertical"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <h1
                        tabIndex={0}
                        role="heading"
                        aria-label="Login to your account"
                        className="text-2xl font-extrabold leading-6 text-gray-800 mb-8"
                      >
                        Đăng ký
                      </h1>
                      <Form.Item
                        className="text-black font-bold"
                        rules={[
                          {
                            message: "Vui lòng nhập name!",
                            required: true,
                          },
                          {
                            validator: (_: any, value: string) =>
                              value && value.trim() == ""
                                ? Promise.reject(
                                    new Error(
                                      "Tên người dùng không được bỏ trống"
                                    )
                                  )
                                : Promise.resolve(),
                          },
                        ]}
                        name="name"
                        label="Name"
                      >
                        <Input
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập name"
                        />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        rules={[
                          {
                            message: "Vui lòng nhập địa chỉ!",
                            required: true,
                          },
                          {
                            validator: (_: any, value: string) =>
                              value && value.trim() == ""
                                ? Promise.reject(
                                    new Error("Địa chỉ không được bỏ trống")
                                  )
                                : Promise.resolve(),
                          },
                        ]}
                        name="address"
                        label="Address"
                      >
                        <Input
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập địa chỉ"
                        />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        rules={[
                          {
                            message: "Vui lòng nhập số điện thoại!",
                            required: true,
                          },
                          {
                            pattern: /^(?:\d*)$/,
                            message: "Số điện thoại bạn nhập phải là số",
                          },
                          {
                            validator: (_: any, value: string) =>
                              value && value.trim() == ""
                                ? Promise.reject(
                                    new Error(
                                      "Số điện thoại không được bỏ trống"
                                    )
                                  )
                                : Promise.resolve(),
                          },
                        ]}
                        name="num_phone"
                        label="Phone Number"
                      >
                        <Input
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập số điện thoại"
                        />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        name="email"
                        label="Email"
                        rules={[
                          {
                            message: "Vui lòng nhập email!",
                            required: true,
                            type: "email",
                          },
                        ]}
                      >
                        <Input
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập email"
                        />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        name="password"
                        label="Mật khẩu"
                        rules={[
                          {
                            message: "Vui lòng nhập password!",
                            required: true,
                            min: 6,
                          },
                          {
                            validator: (_: any, value: string) =>
                              value && value.trim() == ""
                                ? Promise.reject(
                                    new Error("Mật khẩu không được bỏ trống")
                                  )
                                : Promise.resolve(),
                          },
                        ]}
                      >
                        <Input.Password
                          type="password"
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        name="confirmPassword"
                        label="Nhập lại mật khẩu"
                        rules={[
                          {
                            message: "Vui lòng nhập lại password!",
                            required: true,
                            min: 6,
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The new password that you entered do not match!"
                                )
                              );
                            },
                          }),
                          {
                            validator: (_: any, value: string) =>
                              value && value.trim() == ""
                                ? Promise.reject(
                                    new Error("Mật khẩu không được bỏ trống")
                                  )
                                : Promise.resolve(),
                          },
                        ]}
                      >
                        <Input.Password
                          type="password"
                          className="font-mono border border-indigo-600 h-10"
                          placeholder="Nhập password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>

                      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Ban đã có tài khoản?{" "}
                        <span
                          tabIndex={0}
                          role="link"
                          aria-label="Sign up here"
                          className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                        >
                          {" "}
                          <Link to="/login">Đăng nhập tại đây</Link>
                        </span>
                      </p>

                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
