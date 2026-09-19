import type { Post } from "@/data/posts";
import type { Story } from "@/data/stories";
import FeedPost from "@/components/FeedPost";
import StoriesBar from "@/components/StoriesBar";

type FeedListProps = {
  posts: Post[];
  stories: Story[];
};

export default function FeedList({ posts, stories }: FeedListProps) {
  return (
    <section className="flex w-full flex-col gap-6">
      <StoriesBar stories={stories} />

      {posts.length === 0 ? (
        <p className="rounded-xl border border-zinc-200 bg-white p-6 text-center text-zinc-500">
          Todavía no hay publicaciones
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
