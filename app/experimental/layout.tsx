import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experimental — Móvel Plan",
  description: "Rota experimental de teste de nova feature. Não é a experiência de produção.",
  robots: { index: false, follow: false },
};

export default function ExperimentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Experimental banner — clearly isolated from production */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 text-xs font-semibold uppercase tracking-widest"
        style={{ backgroundColor: "#F8E058", color: "#050505" }}
        role="banner"
        aria-label="Aviso de rota experimental"
      >
        <span>⚗ Experimento PREA-308 — não é produção</span>
        <Link
          href="/"
          className="underline hover:no-underline focus-visible:outline focus-visible:outline-2"
          style={{ outlineColor: "#050505" }}
        >
          Ir para site principal →
        </Link>
      </div>
      {children}
    </>
  );
}
