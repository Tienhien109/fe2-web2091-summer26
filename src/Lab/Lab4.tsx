import { Table, Button, Input } from "antd";
import { useState } from "react";

function Lab4() {
  const [keyword, setKeyword] = useState("");

  const [data, setData] = useState([
    {
      key: 1,
      title: "Naruto",
      image: "image",
      createdAt: "2026-07-10",
    },
    {
      key: 2,
      title: "One Piece",
      image: "image",
      createdAt: "2026-07-12",
    },
    {
      key: 3,
      title: "Dragon Ball",
      image: "image",
      createdAt: "2026-07-13",
    },
    
    {
      key: 4,
      title: "Doraemon",
      image: "image",
      createdAt: "2026-07-14",
    },
    {
      key: 5,
      title: "Conan",
      image: "image",
      createdAt: "2026-07-15",
    },
    {
      key: 6,
      title: "Bleach",
      image: "image",
      createdAt: "2026-07-16",
    },
  ]);
  const handleDelete = (key: number) => {
    setData(data.filter((item) => item.key !== key));
  };
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button danger onClick={() => handleDelete(record.key)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách truyện</h2>

      <Input
        placeholder="Tìm kiếm truyện..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: 300, marginBottom: 20 }}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export default Lab4;