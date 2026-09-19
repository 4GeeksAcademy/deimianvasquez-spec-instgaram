# ContactForm

## Objetivo

Mostrar una vista con un formulario de contacto para que una persona pueda enviar su nombre, correo electrónico y mensaje.

La vista se encuentra en `/contact` y monta `ContactForm` sin duplicar la lógica del formulario.

## Alcance

- Incluye:
  - Campo de nombre, debe ser minimo de 4 caracteres máximo de 10, el campo es requerido.
  - Campo de correo electrónico, debe validar que sa un correo y es requerido .
  - Campo de mensaje.
  - Botón para enviar.
  - Validación básica de campos obligatorios.
  - Mensaje de confirmación después del envío.
- Excluye:
  - Envío real a un servidor.
  - Integración con correo electrónico.
  - Base de datos.
  - Login.
  - Captcha.
  - Chat.

## Restricciones

- Next.js + TypeScript + Tailwind.
- Sin librerías externas.
- El componente vivirá en:
  `src/components/ContactForm.tsx`
- La vista vivirá en:
  `src/app/contact/page.tsx`
- Usar un componente funcional.
- Tipar las props si se agregan.
- No hacer fetch.
- La ruta `/contact` está autorizada por esta spec.
- El formulario no debe recargar la página al enviarse.

## Campos

- Nombre:
  - Tipo: `text`
  - Obligatorio.
- Correo electrónico:
  - Tipo: `email`
  - Obligatorio.
- Mensaje:
  - Tipo: `textarea`
  - Obligatorio.

## Criterios de aceptación

- Dado que se renderiza el formulario,
  cuando la vista carga,
  entonces se ven los campos de nombre, correo electrónico, mensaje y el botón "Enviar".

- Dado que el usuario intenta enviar el formulario con campos vacíos,
  cuando hace clic en "Enviar",
  entonces se muestran mensajes de validación y no se muestra confirmación de envío.

- Dado que el usuario escribe un correo inválido,
  cuando intenta enviar el formulario,
  entonces se muestra un mensaje indicando que el correo no es válido.

- Dado que el usuario completa correctamente todos los campos,
  cuando hace clic en "Enviar",
  entonces se muestra el mensaje "Mensaje enviado correctamente".

- Dado que el formulario fue enviado correctamente,
  cuando aparece la confirmación,
  entonces los campos quedan limpios.

- Dado que el usuario escribe un mensaje largo,
  cuando usa el campo de mensaje,
  entonces el texto permanece dentro del área visible y puede desplazarse dentro del campo.

## Datos

El formulario utiliza estado local. No recibe datos externos ni hace fetch.

## Verificación

Ejecutar:

```bash
npm run dev