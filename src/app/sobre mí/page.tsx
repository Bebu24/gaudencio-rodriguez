// app/sobre-mi/page.tsx
export default function SobreMiPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Sobre mí</h2>
      <p className="text-slate-700 mt-3">Biografía corta de mi tío, trayectoria y proyectos destacados.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="col-span-1 bg-white p-4 rounded border">Foto / Portada</div>
        <div className="col-span-2 bg-white p-4 rounded border">Detalles biográficos y lista de proyectos.</div>
      </div>
    </div>
  );
}

