import Link from "next/link";
import { getPosts } from "./getPosts";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">Post List</h1>
      {posts.map((post) => (
        <section key={post.id} className="rounded border border-white p-6">
          <h1 className="text-xl font-bold">
            <Link href={`posts/${post.id}` as string}>{post.title}</Link>
          </h1>
          <p>{post.body}</p>
        </section>
      ))}
    </section>
  );
};
