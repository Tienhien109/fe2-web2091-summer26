import { Table, Tag } from "antd";

const columns = [
  {
    title: "Họ tên",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    render: (role: string) => <Tag color="blue">{role}</Tag>,
  },
];

const data = [
  {
    key: "1",
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    role: "Admin",
  },
  {
    key: "2",
    name: "Trần Thị B",
    email: "b@gmail.com",
    role: "User",
  },
  {
    key: "3",
    name: "Lê Văn C",
    email: "c@gmail.com",
    role: "User",
  },
];

export default function Bai3() {
  return (
    <div style={{ padding: 30 }}>
      <h2>Danh sách người dùng</h2>

      <Table columns={columns} dataSource={data} />
    </div>
  );
}