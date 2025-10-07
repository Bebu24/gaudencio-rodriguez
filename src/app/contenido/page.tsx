// app/contenido/page.tsx
export default function ContenidoPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Contenido</h2>
      <p className="text-slate-600 mb-6">Todo el contenido online: podcasts, videos y más.</p>

      <ul className="space-y-4">
        <li className="p-4 border rounded bg-white">Podcast episodio 12 — <a href="#" className="underline">Ver</a></li>
        <li className="p-4 border rounded bg-white">Video: Conferencia en Z — <a href="#" className="underline">Ver</a></li>
      </ul>
    </div>
  );
}

