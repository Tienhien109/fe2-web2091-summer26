import { Form, Input, Button } from "antd";

function Lab3() {
  return (
    <div style={{ width: 400, margin: "30px auto" }}>
      <h2>Đăng nhập</h2>

      <Form layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Lab3;
