import type { Story } from "@/data/stories";

type StoriesBarProps = {
  stories: Story[];
};

export default function StoriesBar({ stories }: StoriesBarProps) {
  if (stories.length === 0) {
    return (
      <section className="rounded-xl border border-zinc-200 bg-white p-4 text-center text-sm text-zinc-500">
        No hay historias
      </section>
    );
  }

  return (
    <section
      aria-label="Historias"
      className="w-full overflow-x-auto rounded-xl border border-zinc-200 bg-white p-4"
    >
      <div className="flex min-w-max gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex w-16 shrink-0 flex-col items-center gap-2"
          >
            <div
              className={`rounded-full p-0.5 ${
                story.seen ? "" : "bg-gradient-to-tr from-yellow-400 to-fuchsia-600"
              }`}
            >
              <div className="rounded-full bg-white p-0.5">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={story.avatarUrl}
                  alt={`Avatar de ${story.username}`}
                />
              </div>
            </div>
            <span className="w-full truncate text-center text-xs text-zinc-700">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
