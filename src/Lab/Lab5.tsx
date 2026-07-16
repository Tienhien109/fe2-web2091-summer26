import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

interface Story {
  id?: number;
  title: string;
  description: string;
  active: boolean;
}

function Lab5() {
  const onFinish = async (values: Story) => {
    try {
      await axios.post("http://localhost:3001/categories", values);

      alert("Thêm thành công!");
    } catch (error) {
      console.log(error);
      alert("Thêm thất bại!");
    }
  };

  return (
    <div style={{ width: 500, margin: "30px auto" }}>
      <h2>Thêm Category</h2>

      <Form layout="vertical" onFinish={onFinish}>
        {/* Title */}
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        {/* Active */}
        <Form.Item
          name="active"
          valuePropName="checked"
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Lab5;