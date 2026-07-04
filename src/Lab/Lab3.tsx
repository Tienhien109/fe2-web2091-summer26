import { useState } from "react";
import { Form, Input, Button, Select, Divider, Card } from "antd";
function Lab3() {
      const [post, setPost] = useState<any>(null);

  const onFinish = (values: any) => {
    setPost(values);
  };
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
      <Divider />

<h2>Đăng ký người dùng</h2>

<Form layout="vertical">
  ...
</Form>

<Divider />

<h2>Thêm sản phẩm</h2>

<Form layout="vertical">
  ...
</Form>

<Divider />

<h2>Thêm bài viết</h2>

<Form
  layout="vertical"
  onFinish={onFinish}
>
  <Form.Item
    label="Title"
    name="title"
    rules={[
      {
        required: true,
        message: "Vui lòng nhập tiêu đề",
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Content"
    name="content"
    rules={[
      {
        required: true,
        message: "Vui lòng nhập nội dung",
      },
    ]}
  ><Form.Item
  label="Image URL"
  name="image"
  rules={[
    {
      required: true,
      message: "Nhập Image URL",
    },
  ]}
>
  <Input />
</Form.Item>
    <Input.TextArea rows={4} />
  </Form.Item>

  <Button type="primary" htmlType="submit">
    Thêm bài viết
  </Button>
</Form>

{post && (
  <Card style={{ marginTop: 20 }}>
    <p><b>Title:</b> {post.title}</p>
    <p><b>Category:</b> {post.category}</p>
    <p><b>Slug:</b> {post.slug}</p>
    <p><b>Content:</b> {post.content}</p>
    <p><b>Image:</b> {post.image}</p>
  </Card>
)}

    </div>
  );
}

export default Lab3;
