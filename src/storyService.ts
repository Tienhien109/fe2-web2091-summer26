import axios from "axios";

const API = "http://localhost:3000/stories";

export const getStories = async () => {
  const { data } = await axios.get(API);
  return data;
};

export const deleteStory = async (id: number) => {
  await axios.delete(`${API}/${id}`);
};