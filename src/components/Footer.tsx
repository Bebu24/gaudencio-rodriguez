export default function Footer() {
  return (
    <footer className="bg-[#1F3A5F] text-[#F9F6F1]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Contenido superior */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* Enlaces */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold tracking-wider">Soluciones</h3>
              <ul className="mt-4 space-y-2 text-[#F9F6F1]/80">
                <li><a href="#" className="hover:text-[#F9F6F1]">Acompañamiento</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Cursos</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Talleres</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Libros</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider">Contenido</h3>
              <ul className="mt-4 space-y-2 text-[#F9F6F1]/80">
                <li><a href="#" className="hover:text-[#F9F6F1]">Artículos</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Reflexiones</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Recursos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider">Sobre mí</h3>
              <ul className="mt-4 space-y-2 text-[#F9F6F1]/80">
                <li><a href="#" className="hover:text-[#F9F6F1]">Trayectoria</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Enfoque</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2 text-[#F9F6F1]/80">
                <li><a href="#" className="hover:text-[#F9F6F1]">Aviso de privacidad</a></li>
                <li><a href="#" className="hover:text-[#F9F6F1]">Términos</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold tracking-wider">
              Suscríbete al boletín
            </h3>
            <p className="mt-4 text-sm text-[#F9F6F1]/80">
              Lecturas, ideas y recursos compartidos con calma y cercanía.
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="w-full rounded-md bg-transparent border border-[#F9F6F1]/40 px-4 py-2 text-sm text-[#F9F6F1] placeholder-[#F9F6F1]/60 focus:outline-none focus:ring-2 focus:ring-[#F9F6F1]/60"
              />
              <button
                type="submit"
                className="rounded-md bg-[#E85D2A] px-5 py-2 text-sm font-semibold text-[#F9F6F1] hover:bg-[#F9F6F1]/90 transition"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-[#F9F6F1]/70">
            © {new Date().getFullYear()} Gaudencio Rodríguez. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-[#F9F6F1]/80">
            <a href="#" className="hover:text-[#F9F6F1]">Facebook</a>
            <a href="#" className="hover:text-[#F9F6F1]">Instagram</a>
            <a href="#" className="hover:text-[#F9F6F1]">X</a>
            <a href="#" className="hover:text-[#F9F6F1]">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
