// app/contrataciones/page.tsx
"use client";
import { useState } from "react";

export default function ContratacionesPage() {
  const [form, setForm] = useState({ nombre: "", email: "", organizacion: "", fechaEvento: "", mensaje: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("Solicitud enviada. Gracias.");
        setForm({ nombre: "", email: "", organizacion: "", fechaEvento: "", mensaje: "" });
      } else {
        setStatus("Error al enviar.");
      }
    } catch (err) {
      setStatus("Error de red.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Contrataciones</h2>
      <p className="text-slate-600 mb-6">Llena la solicitud para contratar a mi tío.</p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded border">
        <div>
          <label className="block text-sm">Nombre completo</label>
          <input value={form.nombre} onChange={(e)=>setForm({...form, nombre:e.target.value})} required className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Organización</label>
          <input value={form.organizacion} onChange={(e)=>setForm({...form, organizacion:e.target.value})} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Fecha preferida</label>
          <input type="date" value={form.fechaEvento} onChange={(e)=>setForm({...form, fechaEvento:e.target.value})} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Mensaje</label>
          <textarea value={form.mensaje} onChange={(e)=>setForm({...form, mensaje:e.target.value})} className="w-full mt-1 p-2 border rounded" />
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Enviar solicitud</button>
          <div className="text-sm text-slate-600">{status}</div>
        </div>
      </form>
    </div>
  );
}
