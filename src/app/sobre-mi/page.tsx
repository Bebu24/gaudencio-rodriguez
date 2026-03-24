import Image from "next/image";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 text-[#1F2D3D]">
        {/* Encabezado */}
        <section className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Una trayectoria dedicada al bienestar infantil
          </h1>
          <p className="text-lg text-[#4F6572]">
            Psicólogo, formador y autor enfocado en el cuidado emocional de niñas,
            niños y adolescentes, desde una mirada científica, humana y respetuosa.
          </p>
        </section>

        {/* Bloque principal */}
        <section className="grid md:grid-cols-3 gap-10 items-start mb-20">
          {/* Foto */}
          <div className="md:col-span-1">
            <div className="relative aspect-[8/6] w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/2019. 9. Conferencia Celaya DIF 8.jpg"
                alt="Gaudencio Rodríguez"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-2 space-y-5 text-base leading-relaxed">
            <p>
              Gaudencio Rodríguez es psicólogo y educador con una profunda
              vocación por acompañar a madres, padres y cuidadores en la crianza
              de niñas y niños desde el respeto, la empatía y el conocimiento
              científico.
            </p>

            <p>
              A lo largo de su trayectoria ha trabajado con familias, escuelas e
              instituciones, promoviendo prácticas de buen trato que fortalecen
              el desarrollo emocional y social de la infancia y la adolescencia.
            </p>

            <p>
              Su enfoque parte de una convicción clara: educar sin violencia es
              posible cuando se comprende el desarrollo infantil y se acompaña
              con herramientas reales, sin culpa y sin juicios.
            </p>
          </div>
        </section>

        {/* Credibilidad */}
        <section className="bg-white rounded-2xl p-10 mb-20 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Experiencia y colaboración institucional
          </h2>
          <p className="text-[#4F6572] max-w-3xl leading-relaxed">
            Ha colaborado con diversas instituciones nacionales e internacionales
            en proyectos de formación, prevención y acompañamiento familiar,
            incluyendo organizaciones dedicadas a la protección y promoción de
            los derechos de la infancia, como UNICEF, así como escuelas,
            universidades y organismos comunitarios.
          </p>
        </section>

        {/* Enfoque */}
        <section className="max-w-4xl mb-20">
          <h2 className="text-2xl font-bold mb-4">
            Un enfoque claro y respetuoso
          </h2>
          <p className="text-[#4F6572] leading-relaxed">
            Su trabajo se centra en brindar información accesible y basada en
            evidencia científica, que permita a las familias comprender el
            comportamiento infantil, fortalecer el vínculo afectivo y construir
            entornos seguros donde niñas, niños y adolescentes puedan desarrollarse
            plenamente.
          </p>
        </section>

        {/* Llamado a la acción */}
        <section className="border-t border-[#E5E7EB] pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-lg font-medium">
            ¿Quieres profundizar en este enfoque?
          </p>

          <div className="flex gap-4">
            <Link
              href="/cursos"
              className="px-6 py-3 rounded-full bg-[#4F6572] text-white font-semibold hover:bg-[#6D8B91] transition"
            >
              Ver cursos y talleres
            </Link>
            <Link
              href="/libros"
              className="px-6 py-3 rounded-full border-2 border-[#4F6572] text-[#4F6572] font-semibold hover:bg-[#4F6572]/10 transition"
            >
              Ver libros
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
