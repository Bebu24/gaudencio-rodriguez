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
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Cursos y Talleres</h2>
      <p className="text-slate-600 mb-6">Cursos grabados disponibles para compra.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} onBuy={handleBuy} />
        ))}
      </div>

      {buy && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-sm w-full">
            <h3 className="font-bold">Comprar: {buy.title}</h3>
            <p className="mt-2">Precio: ${buy.price.toFixed(2)}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setBuy(null)}
                className="px-3 py-1 border rounded"
              >
                Cancelar
              </button>
              <button
                onClick={confirmBuy}
                className="px-3 py-1 bg-indigo-600 text-white rounded"
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
