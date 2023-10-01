import { Button, Form, Input, Radio, Typography } from "antd";
import { useSessionContext } from "../context/SessionContext";

const options = [
  {
    label: "PC",
    value: "PC",
  },
  {
    label: "Mobile",
    value: "Mobile",
  },
];

const SignUpForm = () => {
  const { onSignin, onToggleSignIn } = useSessionContext();

  const onSigningIn = (values) => {
    console.log(values);
    onSignin(values);
    onToggleSignIn();
  };
  const onDeviceTypeChange = ({ target: { value } }) => {
    console.log("radio3 checked", value);
  };
  return (
    <Form colon={false} className="loginForm" onFinish={onSigningIn}>
      <div className="formTitle">
        <Typography.Title>Sign Up</Typography.Title>
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
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item
        name={"confirmPassword"}
        rules={[
          {
            required: true,
            message: "Please confirm password!",
          },
        ]}
      >
        <Input.Password placeholder="Confirm password" />
      </Form.Item>
      <Form.Item
        name={"deviceType"}
        label="Choose your device type"
        rules={[
          {
            required: true,
            message: "Please select your device type!",
          },
        ]}
      >
        <Radio.Group
          options={options}
          onChange={onDeviceTypeChange}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Sign Up
      </Button>
    </Form>
  );
};
export default SignUpForm;
