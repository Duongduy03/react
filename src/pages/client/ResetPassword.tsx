import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/css/login.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, message } from "antd";
import {
  forgotPassword,
  login,
  registerUser,
  resetPassword,
} from "../../api/auth";
import type { FormInstance } from "antd/es/form";
import { authenticate } from "../../utils/localStorage";
// import { isAuthenticate } from "../../utils/localStorage";

const ResetPassword = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const formRef = React.useRef<FormInstance>(null);
  const setFields = () => {
    form.setFieldsValue({
      token: id,
    });
  };
  //   console.log(setFields());

  useEffect(() => {
    setFields();
  }, []);

  const navigate = useNavigate();

  console.log(id);

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
          const res = await resetPassword(values);
          if (res) {
            message.success(" Thay đổi mật khẩu thành công", 2);
            navigate("/login");
          }
        }
        console.log(values);
      } catch (error: any) {
        message.error(error.response.data.messages, 5);
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
                      form={form}
                      ref={formRef}
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
                        Thay đổi mật khẩu
                      </h1>
                      <Form.Item
                        hidden
                        className="text-black font-bold"
                        name="token"
                        label="Token"
                        rules={[
                          {
                            message: "Vui lòng nhập email!",
                            required: true,
                          },
                        ]}
                      >
                        <Input className="font-mono border border-indigo-600 h-10" />
                      </Form.Item>
                      <Form.Item
                        className="text-black font-bold"
                        name="password"
                        label="Mật khẩu"
                        rules={[
                          {
                            message: "Vui lòng nhập password!",
                            required: true,
                          },
                          {
                            message: "Password phải trên 6 kí tự!",
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

export default ResetPassword;
