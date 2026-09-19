import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-8">
      <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-2xl font-bold text-zinc-900">Contacto</h1>
        <ContactForm />
      </section>
    </main>
  );
}
