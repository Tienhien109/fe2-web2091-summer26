import { Table, Tag, Button, Divider } from "antd";

export default function Lab2() {
  // =========================
  // Bài 1
  // =========================
  const studentColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  const studentData = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van A",
      age: 20,
      major: "CNTT",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van B",
      age: 21,
      major: "Marketing",
    },
    {
      key: 3,
      id: 3,
      name: "Le Thi C",
      age: 22,
      major: "Thiết kế",
    },
  ];

  // =========================
  // Bài 2
  // =========================
  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  const productData = [
    { key: 1, id: 1, name: "Laptop", price: "20000000", category: "Điện tử" },
    { key: 2, id: 2, name: "Phone", price: "10000000", category: "Điện tử" },
    { key: 3, id: 3, name: "Tablet", price: "8000000", category: "Điện tử" },
    { key: 4, id: 4, name: "Mouse", price: "300000", category: "Phụ kiện" },
    { key: 5, id: 5, name: "Keyboard", price: "500000", category: "Phụ kiện" },
    { key: 6, id: 6, name: "Monitor", price: "3500000", category: "Màn hình" },
  ];

  // =========================
  // Bài 3
  // =========================
  const userColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "active" ? (
          <Tag color="green">active</Tag>
        ) : (
          <Tag color="red">inactive</Tag>
        ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <Button type="primary" size="small">
            Edit
          </Button>

          <Button danger size="small" style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const userData = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van B",
      email: "b@gmail.com",
      status: "inactive",
    },
    {
      key: 3,
      id: 3,
      name: "Le Thi C",
      email: "c@gmail.com",
      status: "active",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 1 - Danh sách sinh viên</h2>

      <Table
        columns={studentColumns}
        dataSource={studentData}
        pagination={false}
      />

      <Divider />

      <h2>Bài 2 - Danh sách sản phẩm</h2>

      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      />

      <Divider />

      <h2>Bài 3 - Danh sách User</h2>

      <Table
        columns={userColumns}
        dataSource={userData}
        pagination={false}
      />
    </div>
  );
}