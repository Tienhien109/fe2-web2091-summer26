import { Table, Button, Input } from "antd";
import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

// import { getStories, deleteStory } from "../services/storyService";

interface Story {
  id: number;
  title: string;
  image: string;
  createdAt: string;
}

const API = "http://localhost:3000/stories";

const getStories = async (): Promise<Story[]> => {
  const res = await axios.get(API);
  return res.data;
};

const deleteStory = async (id: number): Promise<void> => {
  await axios.delete(`${API}/${id}`);
};

function Lab4() {
  const [keyword, setKeyword] = useState("");

  const queryClient = useQueryClient();

  // Lấy danh sách truyện
  const { data = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: getStories,
  });

  // Xóa truyện
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

  const filteredData = data.filter((item: Story) =>
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
      render: (text: string) =>
        new Date(text).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  if (isLoading) return <h2>Loading...</h2>;

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