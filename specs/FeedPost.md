# FeedPost

## Objetivo

Renderizar una publicación del feed: avatar, username, imagen, caption y likes.

## Alcance

- Incluye: autor (avatar + username), imagen o placeholder, caption y texto de likes.
- Excluye: botón de like, comentarios, compartir, stories, FeedList, perfil.

## Restricciones

- Next.js + TypeScript + Tailwind. Sin librerías externas.
- Archivo: `src/components/FeedPost.tsx`
- Recibe `post: Post` por props. No hace fetch.
- Usar `<img>`, no `next/image`.
- No implementar StoriesBar ni FeedList.
- Sin interacción (click, like, modal).

## Criterios de aceptación

- Dado una publicación con `imageUrl`, `avatarUrl`, `username`, `caption` y `likes` mayor que 1,
  cuando se renderiza FeedPost,
  entonces se ven el avatar, el username, la imagen, el caption y el texto "{n} likes".

- Dado una publicación con `imageUrl` nulo o vacío,
  cuando se renderiza FeedPost,
  entonces se muestra un placeholder visible con el texto "Sin imagen".

- Dado `likes === 1`,
  cuando se renderiza FeedPost,
  entonces el texto es "1 like".

- Dado `likes === 0`,
  cuando se renderiza FeedPost,
  entonces el texto es "0 likes".

- Dado un `caption` con texto,
  cuando se renderiza FeedPost,
  entonces el caption aparece debajo de la imagen o del placeholder, junto al username.


## Contexto

Forma de `Post`:

```ts
type Post = {
  imageUrl: string | null;
  username: string;
  avatarUrl: string;
  caption: string;
  likes: number;
};
```

Leer `specs/00-contexto.md`.
