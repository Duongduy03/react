import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { Button, Checkbox, Form, Input, message } from "antd";
import { forgotPassword, login, registerUser } from "../../api/auth";
import { authenticate } from "../../utils/localStorage";
// import { isAuthenticate } from "../../utils/localStorage";
type RegisterForm = {
  name: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  num_phone: string;
};
const ForgotPassWord = () => {
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
          const res = await forgotPassword(values);
          if (res) {
            message.success("Chúng tôi đã gửi mail về cho bạn", 2);
          }
        }
        console.log(values);
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
                        Nhập email để lấy lại mật khẩu
                      </h1>

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

export default ForgotPassWord;
