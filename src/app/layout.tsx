// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gaudencio Rodríguez",
  description: "Para leer, libros, cursos y más",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

