import React, { useState, useCallback, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";

import { Form, Icon, Input, Button, message } from "antd";

import { UPDATE_USER_INFO } from "@/store/actions/actionTypes";

import "./Login.scss";

const formItemLayout = {
  // labelCol: {
  //   xs: { span: 24 },
  //   sm: { span: 6 },
  // },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};

function Login(props) {
  let history = useHistory();
  let state = useMappedState(useCallback(state => state["User"]));

  const dispatch = useDispatch();
  const { getFieldDecorator, validateFields } = props.form; //用来验证错误

  console.log("props", props);

  useEffect(() => {
    if (state.islogIn) {
      history.push("/home");
    }
  }, [state.islogIn]);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        // if (
        //   values.username == state.username &&
        //   values.password == state.password
        // ) {
        dispatch({ type: UPDATE_USER_INFO, value: { islogIn: true } });
        // } else {
        //   message.error("用户名或者密码不匹配！");
        // }
      }
    });
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const LoginWrapper = Form.create({ name: "login" })(Login);

export default LoginWrapper;
