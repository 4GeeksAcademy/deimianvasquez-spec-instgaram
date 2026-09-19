# FeedList

## Objetivo

Armar el feed: historias arriba y una lista vertical de publicaciones debajo.

## Alcance

- Incluye: layout del feed y un `FeedPost` por cada post.
- Excluye: diseño interno de la publicación, anillo de cada historia, infinite scroll, likes, comentarios, perfil.

## Restricciones

- Next.js + TypeScript + Tailwind. Sin librerías externas.
- Archivo: `src/components/FeedList.tsx`
- Recibe `posts: Post[]` y `stories: Story[]` por props.
- Usa `StoriesBar` y `FeedPost`. No duplica su markup.
- No implementar FeedPost ni StoriesBar.

## Criterios de aceptación

- Dado un arreglo de 3 posts,
  cuando el feed renderiza,
  entonces hay 3 publicaciones, una debajo de la otra (no en cuadrícula).

- Dado un arreglo de stories,
  cuando el feed renderiza,
  entonces StoriesBar queda arriba de la lista.

- Dado un arreglo vacío de posts,
  cuando el feed renderiza,
  entonces se muestra el texto "Todavía no hay publicaciones".

## Contexto

Datos en `src/data/posts.ts` y `src/data/stories.ts`.

Leer `specs/00-contexto.md`, `specs/FeedPost.md` y `specs/StoriesBar.md`.
