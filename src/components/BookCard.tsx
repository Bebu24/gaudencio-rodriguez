// app/components/BookCard.tsx
"use client";
import React from "react";

// --- Tipo definido internamente ---
export interface Book {
  id: string;
  title: string;
  desc: string;
  price: number;
}

interface BookCardProps {
  book: Book;
  onBuy: (b: Book) => void;
}

export default function BookCard({ book, onBuy }: BookCardProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="h-36 bg-slate-100 mb-3 flex items-center justify-center">Portada</div>
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-sm text-slate-600 mt-1">{book.desc}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">${book.price.toFixed(2)}</div>
        <button onClick={() => onBuy(book)} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">
          Comprar
        </button>
      </div>
    </div>
  );
}

