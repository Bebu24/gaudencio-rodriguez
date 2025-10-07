// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold">Bienvenido</h1>
        <p className="mt-4 text-slate-700">para leer, libros, cursos y opciones para contratarlo.</p>

        <div className="mt-8 flex gap-3">
          <Link href="/articulos" className="px-4 py-2 rounded bg-indigo-600 text-white">Ver artículos</Link>
          <Link href="/libros" className="px-4 py-2 rounded border">Ver libros</Link>
        </div>
      </section>
    </div>
  );
}


