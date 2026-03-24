"use client";

import { useState } from "react";
import { books } from "@/app/data/libros";
import BookCard, { Book } from "@/components/BookCard";
import Toast from "@/components/Toast";

export default function LibrosPage() {
  // --- ESTADOS ---
  const [buyItem, setBuyItem] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleBuy = (item: Book) => {
    setBuyItem(item);
  };

  const confirmBuy = async () => {
    if (!buyItem) return;
    
    setLoading(true); 
    try {
      // 1. LLAMADA A LA API (Corregida a SINGULAR: /api/solicitud)
      const response = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: buyItem.title,
          price: buyItem.price,
          image: "https://via.placeholder.com/300x400?text=Libro", 
        }),
      });

      // Validamos que la respuesta sea exitosa
      if (!response.ok) {
        throw new Error(`Error en el servidor (${response.status})`);
      }

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      // 2. REDIRECCIÓN MODERNA (Usando la URL que devuelve Stripe)
      if (data.url) {
        window.location.href = data.url; 
      } else {
        throw new Error("No se recibió la URL de pago de Stripe.");
      }

    } catch (err: any) {
      console.error("Error detallado:", err);
      // Mostramos el error en el Toast o alerta
      setToastMessage(err.message || "Error al procesar la compra.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 text-[#1F3A5F]">
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 italic">
            Libros para acompañar la crianza
          </h1>
          <p className="text-lg text-[#4F6572] leading-relaxed">
            Explora nuestra colección diseñada para una crianza respetuosa.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-sm p-6">
              <BookCard book={book} onBuy={handleBuy} />
            </div>
          ))}
        </section>
      </div>

      {/* Modal de compra */}
      {buyItem && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{buyItem.title}</h3>
            <p className="text-[#4F6572] mb-6 text-xl">${buyItem.price.toFixed(2)}</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setBuyItem(null)}
                className="px-4 py-2 rounded-full border border-gray-300 transition hover:bg-gray-50"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={confirmBuy}
                disabled={loading}
                className="px-5 py-2 rounded-full bg-[#E85D2A] text-white font-semibold transition hover:opacity-90 disabled:bg-gray-400"
              >
                {loading ? "Cargando..." : "Ir a pagar"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast 
        isVisible={showToast} 
        message={toastMessage} 
        onClose={() => setShowToast(false)} 
      />
    </main>
  );
}