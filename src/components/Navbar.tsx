// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-6 items-center">
        <Link href="/" className="font-bold text-lg">MiTío</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/articulos">Artículos</Link>
          <Link href="/libros">Libros</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/contrataciones">Contrataciones</Link>
          <Link href="/contenido">Contenido</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
        </div>
      </div>
    </nav>
  );
}
