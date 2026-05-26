import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
