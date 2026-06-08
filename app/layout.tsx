import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Móvel Plan | Móveis Planejados Personalizados",
  description: "Projetos planejados sob medida para Niterói, Barra e Zona Sul. Salas, quartos, cozinhas e banheiros com acabamentos de alto padrão.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://movelplan.com.br",
    title: "Móvel Plan | Móveis Planejados Personalizados",
    description: "Projetos planejados sob medida para Niterói, Barra e Zona Sul. Salas, quartos, cozinhas e banheiros com acabamentos de alto padrão.",
    siteName: "Móvel Plan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink-soft font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
