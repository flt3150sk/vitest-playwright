import { getCommentsByPost } from "./getCommentByPost";

type CommentProps = {
  postId: number;
};

export const CommentList = async ({ postId }: CommentProps) => {
  const comments = await getCommentsByPost(postId);

  return (
    <ul className="space-y-2">
      {comments.map((comment) => (
        <li key={comment.id} className="p-2 rounded border border-blue-600">
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};
