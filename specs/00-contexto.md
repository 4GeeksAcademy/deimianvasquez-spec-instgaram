# Contexto compartido

Este archivo no se implementa. Las specs de cada pieza van al lado de su `.tsx`.

## Qué es este proyecto

Mini feed tipo Instagram: lista vertical de publicaciones e historias.

También incluye una vista de contacto en `/contact`.

No es un perfil, no es un chat y no es Instagram completo.

## Dónde está cada spec

La spec vive al lado del componente.

- `specs/FeedPost.md` → `src/components/FeedPost.tsx`
- `specs/StoriesBar.md` → `src/components/StoriesBar.tsx`
- `specs/FeedList.md` → `src/components/FeedList.tsx`
- `specs/ContactForm.md` → `src/components/ContactForm.tsx` y `src/app/contact/page.tsx`

`src/app/page.tsx` solo monta las piezas. No tiene spec.


## Stack

- Next.js (App Router) con carpeta `src/`
- TypeScript
- React con componentes funcionales y hooks
- Tailwind CSS (el que trae `create-next-app`, no CDN)
- La página vive en `src/app/page.tsx`
- Los componentes viven en `src/components/`


## Lo que no se debe hacer

- No instalar librerías nuevas
- No usar JavaScript suelto (`.js` / `.jsx`) para componentes ni páginas
- No usar componentes de clase
- No usar `next/image` (usar `<img>`)
- No agregar rutas ni páginas extra sin una spec específica que las autorice
- No reescribir las specs
- No implementar una spec vecina
- No construir perfil, chat, reels, explorar ni login


## Forma de los datos

Publicación (`Post`):

```ts
type Post = {
  id: string;
  imageUrl: string | null;
  username: string;
  avatarUrl: string;
  caption: string;
  likes: number;
};
```

Historia (`Story`):

```ts
type Story = {
  id: string;
  username: string;
  avatarUrl: string;
  seen: boolean;
};
```

Datos de prueba: `src/data/posts.ts` y `src/data/stories.ts`.

## Cómo se verifica

Criterios Dado–Cuando–Entonces, en el navegador (`npm run dev` → `http://localhost:3000`).
