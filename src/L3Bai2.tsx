import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
} from "antd";

function Bai4() {
  const [data, setData] = useState<any>();

  const onFinish = (values: any) => {
    setData(values);
  };

  return (
    <div style={{ width: 600, margin: "30px auto" }}>
      <h2>Thêm bài viết</h2>

      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Title"
          name="title"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
        >
          <Select
            options={[
              {
                label: "Tin tức",
                value: "Tin tức",
              },
              {
                label: "Công nghệ",
                value: "Công nghệ",
              },
              {
                label: "Giải trí",
                value: "Giải trí",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image"
        >
          <Input />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>

      {data && (
        <Card style={{ marginTop: 20 }}>
          <p><b>Title:</b> {data.title}</p>
          <p><b>Category:</b> {data.category}</p>
          <p><b>Slug:</b> {data.slug}</p>
          <p><b>Content:</b> {data.content}</p>
          <p><b>Image:</b> {data.image}</p>
        </Card>
      )}
    </div>
  );
}

export default Bai4;