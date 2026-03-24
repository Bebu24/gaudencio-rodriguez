// app/contenido/page.tsx

export default function ContenidoPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] tracking-tight">
          Contenido
        </h1>

        <div className="w-16 h-[3px] bg-[#1F3A5F] mt-6 mb-6 rounded-full opacity-80"></div>

        <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
          Reflexiones, conferencias y material audiovisual para profundizar 
          en temas psicológicos y humanos.
        </p>
      </section>

      {/* Lista de contenido */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-6">

          {/* Item */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#1F3A5F]">
              Podcast — Episodio 12
            </h3>

            <p className="text-slate-600 mt-2">
              Conversación sobre desarrollo emocional y vínculos humanos.
            </p>

            <a
              href="#"
              className="inline-block mt-4 text-[#1F3A5F] font-medium hover:underline transition"
            >
              Escuchar →
            </a>
          </div>

          {/* Item */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#1F3A5F]">
              Video — Conferencia en Z
            </h3>

            <p className="text-slate-600 mt-2">
              Presentación sobre psicología contemporánea y educación emocional.
            </p>

            <a
              href="#"
              className="inline-block mt-4 text-[#1F3A5F] font-medium hover:underline transition"
            >
              Ver conferencia →
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

