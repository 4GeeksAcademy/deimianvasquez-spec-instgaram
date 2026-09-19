---
description: Spec-driven — un contrato por pieza, un prompt por archivo
alwaysApply: true
---

# Spec-driven

Antes de escribir código, lee `specs/00-contexto.md` y la spec de ESA pieza.

## Dónde está cada spec

Cada pieza tiene una spec en `specs/`, con el mismo nombre que el componente.

- `specs/FeedPost.md` → `src/components/FeedPost.tsx`
- `specs/StoriesBar.md` → `src/components/StoriesBar.tsx`
- `specs/FeedList.md` → `src/components/FeedList.tsx`
- `specs/ContactForm.md` → `src/components/ContactForm.tsx` y `src/app/contact/page.tsx`

Usa las specs de `specs/`. No las dupliques ni las mezcles con los componentes.

## Qué hacer

- Implementa SOLO el archivo de la spec que te pidieron.
- Tipa con `Post` y `Story`. Usa TypeScript (`.tsx` / `.ts`).
- Usa Tailwind del proyecto, no CDN.
- Usa `<img>`, no `next/image`.
- `src/app/page.tsx` solo monta piezas. No absorbe el diseño de un componente.
- Si algo falla, cumple el criterio Dado/Cuando/Entonces. No reescribas la spec.

## Qué no hacer

- No implementes una spec vecina “para que quede completo”.
- No instales librerías.
- No crees rutas sin una spec específica que las autorice.
- Las rutas no autorizadas incluyen `/perfil`, `/reels` y `/login`.
- No construyas chat, reels, explorar ni perfil.
- No inventes features que no estén en la spec (títulos “Feed”, likes clickeables, etc.).
