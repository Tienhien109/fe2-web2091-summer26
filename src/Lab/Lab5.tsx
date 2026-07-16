import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

interface Category {
  id: number;
  title: string;
}

interface Story {
  title: string;
  description: string;
  categoryId: number;
}

function Lab5() {
  // Lấy danh sách category
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/categories");
      return res.data;
    },
  });

  // Thêm story
  const mutation = useMutation({
    mutationFn: (values: Story) =>
      axios.post("http://localhost:3001/stories", values),
  });

  const onFinish = (values: Story) => {
    mutation.mutate(values);
    alert("Thêm thành công!");
  };

  return (
    <div style={{ width: 500, margin: "30px auto" }}>
      <h2>Thêm truyện</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Nhập tiêu đề!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Chọn danh mục!" }]}
        >
          <Select
            options={categories.map((item: Category) => ({
              value: item.id,
              label: item.title,
            }))}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={mutation.isPending}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Lab5;