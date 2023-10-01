import { Button, Divider, Form, Input, Typography, message } from "antd";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { useSessionContext } from "../context/SessionContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { onLogin, onToggleSignIn, isSignedIn } = useSessionContext();
  const navigate = useNavigate();

  const onLoggingIn = (values) => {
    //message.success("Logged-in Successfully");
    if (isSignedIn) {
      onLogin(values);
      navigate(`/home`);
    } else {
      message.success("Please Sign in to proceed further!");
    }
  };
  return (
    <Form colon={false} className="loginForm" onFinish={onLoggingIn}>
      <div className="formTitle">
        <Typography.Title>Vired Gaming</Typography.Title>
      </div>
      <Form.Item
        name={"email"}
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter valid email!",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[
          {
            required: true,
            message: "Please enter password!",
          },
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Login
      </Button>
      <Button type="link" onClick={onToggleSignIn}>
        Click here to Sign up
      </Button>
      <Divider style={{ borderColor: "black" }}>or Login with</Divider>
      <div className="socialIconContainer">
        <GoogleOutlined className="socialIcon" />
        <FacebookFilled className="socialIcon" />
        <TwitterOutlined className="socialIcon" />
      </div>
    </Form>
  );
};
export default LoginForm;
