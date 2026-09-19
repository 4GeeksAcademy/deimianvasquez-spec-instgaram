import FeedList from "@/components/FeedList";
import { posts } from "@/data/posts";
import { stories } from "@/data/stories";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground">
      <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <FeedList posts={posts} stories={stories} />
      </section>
    </main>
  );
}
