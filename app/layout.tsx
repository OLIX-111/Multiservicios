import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multiservicios | Proyectos, Materiales & Más",
  description: "Especialistas en cristalería, ventanas, aluminio, divisiones de vidrio, puertas y más. Calidad y profesionalismo en cada proyecto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
