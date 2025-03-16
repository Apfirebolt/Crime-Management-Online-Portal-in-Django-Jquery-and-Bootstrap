import { Form, Input, Button } from "antd";
import useAuthStore from "../stores/authStore";

const Register = () => {
  const { register } = useAuthStore();
  const onFinish = (values) => {
    console.log("Success:", values);
    let userData = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    register(userData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", padding: "50px" }}>
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
