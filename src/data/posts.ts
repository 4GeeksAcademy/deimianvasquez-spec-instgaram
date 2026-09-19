export type Post = {
  id: string;
  imageUrl: string | null;
  username: string;
  avatarUrl: string;
  caption: string;
  likes: number;
};

export const posts: Post[] = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/id/1015/600/600",
    username: "deimian",
    avatarUrl: "https://picsum.photos/id/64/80/80",
    caption: "Atardecer en la montaña.",
    likes: 12,
  },
  {
    id: "2",
    imageUrl: null,
    username: "ana.codes",
    avatarUrl: "https://picsum.photos/id/65/80/80",
    caption: "Hoy tocó debuggear sin café.",
    likes: 0,
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/id/1025/600/600",
    username: "lina.dev",
    avatarUrl: "https://picsum.photos/id/91/80/80",
    caption: "Mi perro aprobó el code review.",
    likes: 1,
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/id/1035/600/600",
    username: "kai.ux",
    avatarUrl: "https://picsum.photos/id/177/80/80",
    caption: "Un paseo para despejar la mente.",
    likes: 8,
  },
  {
    id: "5",
    imageUrl: null,
    username: "sofia.creates",
    avatarUrl: "https://picsum.photos/id/237/80/80",
    caption: "Compartiendo ideas nuevas.",
    likes: 0,
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/id/1043/600/600",
    username: "mateo.photo",
    avatarUrl: "https://picsum.photos/id/338/80/80",
    caption: "Luz, sombra y un poco de paciencia.",
    likes: 23,
  },
  {
    id: "7",
    imageUrl: "https://picsum.photos/id/106/600/600",
    username: "valen.travel",
    avatarUrl: "https://picsum.photos/id/349/80/80",
    caption: "Nuevos lugares, nuevas historias.",
    likes: 15,
  },
  {
    id: "8",
    imageUrl: null,
    username: "nico.music",
    avatarUrl: "https://picsum.photos/id/433/80/80",
    caption: "Día de ensayo y mucha música.",
    likes: 3,
  },
  {
    id: "9",
    imageUrl: "https://picsum.photos/id/1074/600/600",
    username: "emma.design",
    avatarUrl: "https://picsum.photos/id/451/80/80",
    caption: "Pequeños detalles que hacen la diferencia.",
    likes: 6,
  },
];