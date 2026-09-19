export type Story = {
  id: string;
  username: string;
  avatarUrl: string;
  seen: boolean;
};

export const stories: Story[] = [
  {
    id: "s1",
    username: "deimian",
    avatarUrl: "https://picsum.photos/id/64/80/80",
    seen: false,
  },
  {
    id: "s2",
    username: "ana.codes",
    avatarUrl: "https://picsum.photos/id/65/80/80",
    seen: false,
  },
  {
    id: "s3",
    username: "lina.dev",
    avatarUrl: "https://picsum.photos/id/91/80/80",
    seen: true,
  },
  {
    id: "s4",
    username: "kai.ux",
    avatarUrl: "https://picsum.photos/id/177/80/80",
    seen: true,
  },
];