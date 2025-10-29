// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2F2F2F]">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-[#8C3B0D]">
          Bienvenido
        </h1>
        <p className="mt-4 text-lg text-[#2F2F2F]">
          Explora los artículos, libros, cursos y opciones para contratarlo.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/articulos"
            className="px-6 py-3 rounded-full bg-[#B66E41] text-white font-semibold shadow-md hover:bg-[#8C3B0D] transition"
          >
            Ver artículos
          </Link>
          <Link
            href="/libros"
            className="px-6 py-3 rounded-full border-2 border-[#B66E41] text-[#B66E41] font-semibold hover:bg-[#E7CBA9] transition"
          >
            Ver libros
          </Link>
        </div>
      </section>
    </div>
  );
}


