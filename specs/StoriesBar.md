# StoriesBar

## Objetivo

Mostrar una fila horizontal de historias: avatar y username.

## Alcance

- Incluye: layout horizontal y anillo visto / no visto.
- Excluye: visor al tocar, FeedPost, crear historia, live.

## Restricciones

- Next.js + TypeScript + Tailwind. Sin librerías externas.
- Archivo: `src/components/StoriesBar.tsx`
- Recibe `stories: Story[]` por props.
- Usar `<img>`, no `next/image`.
- No implementar FeedPost ni FeedList.
- Sin navegación ni modal.

## Criterios de aceptación

- Dado un arreglo de 4 historias,
  cuando StoriesBar renderiza,
  entonces se ven 4 ítems, cada uno con avatar y username.

- Dado una historia con `seen === false`,
  cuando StoriesBar renderiza,
  entonces el avatar tiene un anillo destacado.

- Dado una historia con `seen === true`,
  cuando StoriesBar renderiza,
  entonces el avatar no tiene anillo destacado.

- Dado un arreglo vacío,
  cuando StoriesBar renderiza,
  entonces se muestra el texto "No hay historias".

- Dado que hay más historias de las que caben en el ancho,
  cuando StoriesBar renderiza,
  entonces la fila se desplaza en horizontal (no se apilan).

## Contexto

Datos en `src/data/stories.ts`.

Leer `specs/00-contexto.md`.
