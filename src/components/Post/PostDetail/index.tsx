import { getPostDetail } from "./getPostDetail";

type PostDetailProps = {
  id: number;
};

export const PostDetail = async ({ id }: PostDetailProps) => {
  const post = await getPostDetail(id);

  return (
    <section className="rounded border border-white p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </section>
  );
};
