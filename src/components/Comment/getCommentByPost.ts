import { CommentType } from "@/types/CommentType";

export const getCommentsByPost = async (id: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!res.ok) {
    throw new Error("APIエラーです");
  }

  const data: CommentType[] = await res.json();
  return data;
};
