"use client";
import { useState } from "react";

export default function ContratacionesPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    organizacion: "",
    fechaEvento: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Enviando solicitud...");

    try {
      const res = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Solicitud enviada correctamente.");
        setForm({
          nombre: "",
          email: "",
          organizacion: "",
          fechaEvento: "",
          mensaje: "",
        });
      } else {
        setStatus("Ocurrió un error al enviar.");
      }
    } catch (err) {
      setStatus("Error de conexión.");
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] tracking-tight">
          Contrataciones
        </h1>

        <div className="w-16 h-[3px] bg-[#1F3A5F] mt-6 mb-6 rounded-full opacity-80"></div>

        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Si deseas contratar una conferencia, taller o participación en tu 
          evento, completa el siguiente formulario y nos pondremos en contacto contigo.
        </p>
      </section>

      {/* Formulario */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-6"
        >
          
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-[#1F3A5F]">
              Nombre completo
            </label>
            <input
              value={form.nombre}
              onChange={(e) =>
                setForm({ ...form, nombre: e.target.value })
              }
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 focus:border-[#1F3A5F] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#1F3A5F]">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 focus:border-[#1F3A5F] transition"
            />
          </div>

          {/* Organización */}
          <div>
            <label className="block text-sm font-medium text-[#1F3A5F]">
              Organización
            </label>
            <input
              value={form.organizacion}
              onChange={(e) =>
                setForm({ ...form, organizacion: e.target.value })
              }
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 focus:border-[#1F3A5F] transition"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-sm font-medium text-[#1F3A5F]">
              Fecha preferida
            </label>
            <input
              type="date"
              value={form.fechaEvento}
              onChange={(e) =>
                setForm({ ...form, fechaEvento: e.target.value })
              }
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 focus:border-[#1F3A5F] transition"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium text-[#1F3A5F]">
              Mensaje
            </label>
            <textarea
              rows={4}
              value={form.mensaje}
              onChange={(e) =>
                setForm({ ...form, mensaje: e.target.value })
              }
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 focus:border-[#1F3A5F] transition"
            />
          </div>

          {/* Botón y estado */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#1F3A5F] text-white font-medium hover:opacity-90 transition shadow-md"
            >
              Enviar solicitud
            </button>

            {status && (
              <span className="text-sm text-slate-600">{status}</span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

