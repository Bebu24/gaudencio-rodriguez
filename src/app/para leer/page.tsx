// app/articulos/page.tsx
import { articles } from "@/app/data/paraleer";

export default function ArticulosPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold">Artículos</h2>
      <p className="text-slate-600 mb-6">Todos los artículos escritos para newsletters.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map(a => (
          <article key={a.id} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{a.title}</h3>
            <div className="text-xs text-slate-500">{a.date}</div>
            <p className="mt-2 text-slate-700">{a.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

