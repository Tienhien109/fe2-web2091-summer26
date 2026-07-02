import { useState } from "react";
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Table,
  Modal,
} from "antd";

const { Header, Sider, Content } = Layout;

function App() {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState([
    {
      key: 1,
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "Trần Văn B",
      email: "b@gmail.com",
      role: "User",
    },
  ]);

  const [form] = Form.useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  const onAddUser = (values: any) => {
    setUsers([
      ...users,
      {
        key: users.length + 1,
        ...values,
      },
    ]);

    form.resetFields();
    setOpen(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        Dashboard
      </Header>

      <Layout>
        {/* Sidebar */}
        <Sider width={200}>
          <Menu
            mode="inline"
            style={{ height: "100%" }}
            items={[
              {
                key: "1",
                label: "Home",
              },
              {
                key: "2",
                label: "User",
              },
              {
                key: "3",
                label: "Setting",
              },
            ]}
          />
        </Sider>

        {/* Content */}
        <Content style={{ padding: 20 }}>
          {/* Bài 2 */}
          <h2>Đăng ký tài khoản</h2>

          <Form
            layout="vertical"
            style={{
              width: 500,
              marginBottom: 30,
            }}
          >
            <Form.Item label="Name">
              <Input />
            </Form.Item>

            <Form.Item label="Email">
              <Input />
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password />
            </Form.Item>

            <Button type="primary">
              Submit
            </Button>
          </Form>

          {/* Bài 4 */}
          <Button
            type="primary"
            onClick={() => setOpen(true)}
            style={{ marginBottom: 20 }}
          >
            Add User
          </Button>

          {/* Bài 3 */}
          <Table
            columns={columns}
            dataSource={users}
            pagination={false}
          />

          {/* Modal */}
          <Modal
            open={open}
            title="Add User"
            footer={null}
            onCancel={() => setOpen(false)}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onAddUser}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;