import { PostDetail } from "@/components/Post/PostDetail";
import { CommentList } from "@/components/Comment";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main className="min-h-screen p-24 space-y-8">
      <PostDetail id={params.id} />
      <section className="space-y-4">
        <h2 className="font-bold text-xl">Comment</h2>
        <CommentList postId={params.id} />
      </section>
    </main>
  );
}
