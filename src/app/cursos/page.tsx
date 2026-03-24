"use client";

import { useState } from "react";
import { courses } from "@/app/data/cursos";
import CourseCard, { Course } from "@/components/CourseCard";

export default function CursosPage() {
  const [buy, setBuy] = useState<Course | null>(null);

  function handleBuy(c: Course) {
    setBuy(c);
  }

  function confirmBuy() {
    if (buy) {
      alert(`Compra simulada: ${buy.title}`);
      setBuy(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] tracking-tight">
          Cursos y Talleres
        </h1>

        <div className="w-16 h-[3px] bg-[#1F3A5F] mt-6 mb-6 rounded-full opacity-80"></div>

        <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
          Formación especializada con enfoque humano y profesional.
          Accede a contenido profundo, claro y aplicable.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} onBuy={handleBuy} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {buy && (
        <div className="fixed inset-0 bg-[#1F3A5F]/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-slate-200">
            
            <h3 className="text-2xl font-semibold text-[#1F3A5F]">
              Confirmar inscripción
            </h3>

            <p className="mt-6 text-slate-600">
              Curso seleccionado:
            </p>

            <p className="mt-2 font-semibold text-lg text-[#1F3A5F]">
              {buy.title}
            </p>

            <p className="mt-3 text-xl font-bold text-[#1F3A5F]">
              ${buy.price.toFixed(2)} MXN
            </p>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setBuy(null)}
                className="px-4 py-2 rounded-lg border border-[#1F3A5F] text-[#1F3A5F] hover:bg-slate-100 transition"
              >
                Cancelar
              </button>

              <button
                onClick={confirmBuy}
                className="px-4 py-2 rounded-lg bg-[#1F3A5F] text-white hover:opacity-90 transition shadow-md"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
