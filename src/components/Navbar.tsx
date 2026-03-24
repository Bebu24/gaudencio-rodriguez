"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F3A5F]/95 backdrop-blur-sm z-40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex gap-8 items-center">
        <Link
          href="/"
          className="font-extrabold tracking-wide text-lg text-[#F9F6F1] hover:text-[#F9F6F1]/80 transition-colors"
        >
          Gaudencio Rodríguez J.
        </Link>

        <div className="flex gap-6 text-sm md:text-base text-[#F9F6F1] font-semibold tracking-wider">
          <Link href="/sobre-mi" className="hover:text-[#F9F6F1]/80 transition-colors">
            Un poco sobre mí
          </Link>
          <Link href="/libros" className="hover:text-[#F9F6F1]/80 transition-colors">
            Libros
          </Link>
          <Link href="/cursos" className="hover:text-[#F9F6F1]/80 transition-colors">
            Cursos y Talleres
          </Link>
          <Link href="/contenido" className="hover:text-[#F9F6F1]/80 transition-colors">
            Contenido
          </Link>
          <Link
            href="/contrataciones"
            className="hover:text-[#F9F6F1]/80 transition-colors"
          >
            Contrataciones
          </Link>
        </div>
      </div>
    </nav>
  );
}
