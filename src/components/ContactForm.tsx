"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedName) {
      nextErrors.name = "El nombre es obligatorio.";
    } else if (trimmedName.length < 4 || trimmedName.length > 10) {
      nextErrors.name = "El nombre debe tener entre 4 y 10 caracteres.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Ingresa un correo válido.";
    }

    if (!trimmedMessage) {
      nextErrors.message = "El mensaje es obligatorio.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setValues(initialValues);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-xl space-y-5 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1">
        <label htmlFor="contact-name" className="block font-semibold text-zinc-900">
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-email" className="block font-semibold text-zinc-900">
          Correo electrónico
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-message" className="block font-semibold text-zinc-900">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="max-h-40 min-h-32 w-full resize-y overflow-y-auto rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-zinc-900 px-5 py-2 font-semibold text-white transition-colors hover:bg-zinc-700"
      >
        Enviar
      </button>

      {submitted && (
        <p role="status" className="font-semibold text-green-700">
          Mensaje enviado correctamente
        </p>
      )}
    </form>
  );
}
