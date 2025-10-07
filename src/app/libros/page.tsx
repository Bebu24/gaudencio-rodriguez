// app/libros/page.tsx
"use client";

import { useState } from "react";
import { books } from "@/app/data/libros";
import BookCard, { Book } from "@/components/BookCard";

export default function LibrosPage() {
  const [buyItem, setBuyItem] = useState<Book | null>(null);

  function handleBuy(item: Book) {
    setBuyItem(item);
  }

  function confirmBuy() {
    if (buyItem) {
      alert(`Compra simulada: ${buyItem.title}`);
      setBuyItem(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Libros</h2>
      <p className="text-slate-600 mb-6">Los libros escritos por mi tío.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((b) => (
          <BookCard key={b.id} book={b} onBuy={handleBuy} />
        ))}
      </div>

      {buyItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-sm w-full">
            <h3 className="font-bold">Comprar: {buyItem.title}</h3>
            <p className="mt-2">Precio: ${buyItem.price.toFixed(2)}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setBuyItem(null)} className="px-3 py-1 border rounded">Cancelar</button>
              <button onClick={confirmBuy} className="px-3 py-1 bg-indigo-600 text-white rounded">Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
