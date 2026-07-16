import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
interface Story {
  id?: number;
  title: string;
  description: string;
  active: boolean;
}

function Lab5() {
    const mutation = useMutation({
  mutationFn: (values: Story) =>
    axios.post("http://localhost:3001/categories", values),
});
const onFinish = (values: Story) => {
  mutation.mutate(values);
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