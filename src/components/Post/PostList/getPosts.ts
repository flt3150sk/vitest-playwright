import { PostType } from "@/types/PostType";

export const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("APIエラーです");
  }

  const data: PostType[] = await res.json();
  return data;
};
