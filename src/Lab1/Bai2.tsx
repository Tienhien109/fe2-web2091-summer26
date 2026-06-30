import { Button, Form, Input, Card } from "antd";

export default function Bai2() {
  return (
    <Card
      title="Đăng ký tài khoản"
      style={{
        width: 420,
        margin: "40px auto",
      }}
    >
      <Form layout="vertical">
        <Form.Item label="Họ và tên">
          <Input />
        </Form.Item>

        <Form.Item label="Email">
          <Input />
        </Form.Item>

        <Form.Item label="Mật khẩu">
          <Input.Password />
        </Form.Item>

        <Button type="primary" block>
          Đăng ký
        </Button>
      </Form>
    </Card>
  );
}