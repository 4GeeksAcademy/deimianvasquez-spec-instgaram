import type { Post } from "@/data/posts";

type FeedPostProps = {
  post: Post;
};

export default function FeedPost({ post }: FeedPostProps) {
  const likesLabel = post.likes === 1 ? "1 like" : `${post.likes} likes`;

  return (
    <article className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <header className="flex items-center gap-3 px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={post.avatarUrl}
          alt={`Avatar de ${post.username}`}
        />
        <span className="font-semibold text-zinc-900">{post.username}</span>
      </header>

      {post.imageUrl ? (
        <img
          className="aspect-square w-full object-cover"
          src={post.imageUrl}
          alt={`Publicación de ${post.username}`}
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-zinc-100 text-zinc-500">
          <span>Sin imagen</span>
        </div>
      )}

      <div className="space-y-2 px-4 py-3">
        <p className="font-semibold text-zinc-900">{likesLabel}</p>
        {post.caption && (
          <p className="text-zinc-800">
            <span className="font-semibold">{post.username}</span>{" "}
            {post.caption}
          </p>
        )}
      </div>
    </article>
  );
}
