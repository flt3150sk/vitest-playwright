import { PostType } from "@/types/PostType";

export const getPostDetail = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("APIエラーです");
  }

  const data: PostType = await res.json();
  return data;
};
