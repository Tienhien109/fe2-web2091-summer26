import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

export default function Bai4() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>

      <Modal
        title="Thêm người dùng"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Họ tên">
            <Input />
          </Form.Item>

          <Form.Item label="Email">
            <Input />
          </Form.Item>

          <Form.Item label="Vai trò">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}