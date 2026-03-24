// app/page.tsx
import Image from "next/image";
import Link from "next/link";



export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row-reverse h-screen pt-20">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          {/* Capa azul */}
          <div className="absolute inset-0 bg-[#F8F9FA]/60 mix-blend-multiply" />
          {/* Capa blanca encima */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        </div>

        {/* Texto principal */}
        <div className="relative z-10 flex flex-col justify-center items-start text-[#1F3A5F] md:w-1/2 p-10 md:p-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Parentalidad, ternura y buenos tratos
          </h1>
          
          <p className="text-lg md:text-xl mb-8">
            Coadyuvamos en el cuidado y buen trato de los niños y adolescentes
            para su pleno desarrollo.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/cursos"
              className="px-6 py-3 rounded-full bg-[#E85D2A] text-white font-semibold shadow-md hover:bg-[#C94F24] transition"
            >
              Ver cursos
            </Link>
            <Link
              href="/libros"
              className="px-6 py-3 rounded-full border-2 border-[#E85D2A] text-[#E85D2A] font-semibold hover:bg-[#6D8B91]/10 transition"
            >
              Ver libros
            </Link>
          </div>
        </div>

        {/* Imagen lateral derecha */}
        <div className="relative md:w-1/2 h-64 md:h-auto md:p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/2022. 4. RMCAN 4 (1).jpg"
              alt="Gaudencio Rodríguez en conferencia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
