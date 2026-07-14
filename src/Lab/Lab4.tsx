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
}

export default Lab4;