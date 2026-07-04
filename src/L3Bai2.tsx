import { Form, Input, Button } from "antd";

function Bai3() {

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ width: 500, margin: "30px auto" }}>
      <h2>Thêm sản phẩm</h2>

      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Bai3;