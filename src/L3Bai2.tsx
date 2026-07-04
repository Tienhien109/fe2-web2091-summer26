import { Form, Input, Button } from "antd";

function Bai2() {
  return (
    <div style={{ width: 450, margin: "30px auto" }}>
      <h2>Đăng ký</h2>

      <Form layout="vertical">
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Email không đúng định dạng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              min: 6,
              message: "Ít nhất 6 ký tự",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={["password"]}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue("password") === value
                ) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Mật khẩu không trùng")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Bai2;