// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#4F6572]">
      {/* Hero principal */}
      <section className="bg-[#6D8B91] text-white text-center py-28 px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          “Abrázame, no me pegues”
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Coadyuvar en el cuidado y buen trato de los niños y adolescentes para su pleno desarrollo.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/cursos"
            className="px-6 py-3 rounded-full bg-[#4F6572] text-white font-semibold hover:bg-[#F9F9F9] hover:text-[#4F6572] transition"
          >
            Ver cursos
          </Link>
          <Link
            href="/libros"
            className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-[#6D8B91] transition"
          >
            Ver libros
          </Link>
        </div>
      </section>

      {/* Presentación */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Gaudencio Rodríguez</h2>
        <p className="text-lg text-[#6D8B91] leading-relaxed max-w-3xl mx-auto">
          Psicólogo, escritor y formador comprometido con el bienestar infantil. 
          Su enfoque combina ciencia, empatía y años de colaboración con instituciones como UNICEF 
          para ofrecer herramientas que transforman la educación y la crianza.
        </p>
      </section>

      {/* Sección de contenido destacado */}
      <section className="bg-[#4F6572] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-center">
          <div className="bg-[#6D8B91] rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Cursos y talleres</h3>
            <p className="mb-6">
              Aprende sobre educación emocional, límites y crianza con calidez y ciencia.
            </p>
            <Link
              href="/cursos"
              className="inline-block px-6 py-3 rounded-full bg-[#4F6572] text-white font-semibold hover:bg-white hover:text-[#4F6572] transition"
            >
              Ver más
            </Link>
          </div>

          <div className="bg-[#6D8B91] rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Libros</h3>
            <p className="mb-6">
              Obras que inspiran una crianza respetuosa y reflexiva, con base en la psicología infantil.
            </p>
            <Link
              href="/libros"
              className="inline-block px-6 py-3 rounded-full bg-[#4F6572] text-white font-semibold hover:bg-white hover:text-[#4F6572] transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="text-center py-20 bg-[#6D8B91] text-white">
        <h3 className="text-2xl font-bold mb-4">Cambia el modo de educar</h3>
        <p className="mb-8">Explora, aprende y transforma el mundo de tus hijos desde el respeto.</p>
        <Link
          href="/cursos"
          className="px-6 py-3 rounded-full bg-[#4F6572] text-white font-semibold hover:bg-white hover:text-[#4F6572] transition"
        >
          Comenzar ahora
        </Link>
      </section>
    </div>
  );
}
