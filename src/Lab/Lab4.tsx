import { Table, Button, Input } from "antd";
import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getStories, deleteStory } from "../storyService";

interface Story {
  id: number;
  title: string;
  image: string;
  createdAt: string;
}

function Lab4() {
  const [keyword, setKeyword] = useState("");

  const queryClient = useQueryClient();

  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Story[]>({
    queryKey: ["stories"],
    queryFn: getStories,
  });

  const mutation = useMutation({
    mutationFn: deleteStory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
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
      render: (_: any, record: Story) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Lỗi tải dữ liệu!</h2>;

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
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default Lab4;