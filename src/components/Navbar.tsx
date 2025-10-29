// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F9F6F1]/90 backdrop-blur-sm border-b border-[#E2C6A8] z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-6 items-center">
        <Link
          href="/"
          className="font-bold text-lg text-[#5C3D2E] hover:text-[#A56C43] transition-colors"
        >
          Gaudencio Rodríguez
        </Link>
        <div className="flex gap-4 text-sm text-[#5C3D2E]">
          <Link href="/articulos" className="hover:text-[#A56C43] transition-colors">
            Para leer
          </Link>
          <Link href="/libros" className="hover:text-[#A56C43] transition-colors">
            Libros
          </Link>
          <Link href="/cursos" className="hover:text-[#A56C43] transition-colors">
            Cursos
          </Link>
          <Link href="/contrataciones" className="hover:text-[#A56C43] transition-colors">
            Contrataciones
          </Link>
          <Link href="/contenido" className="hover:text-[#A56C43] transition-colors">
            Contenido
          </Link>
          <Link href="/sobre-mi" className="hover:text-[#A56C43] transition-colors">
            Sobre mí
          </Link>
        </div>
      </div>
    </nav>
  );
}

