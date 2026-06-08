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
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 text-eyebrow uppercase font-medium bg-linen border-b border-ink-line text-ink-muted"
        role="banner"
        aria-label="Aviso de rota experimental"
      >
        <span>⚗ Experimento — não é produção</span>
        <Link
          href="/"
          className="underline hover:no-underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
        >
          Ir para site principal →
        </Link>
      </div>
      {children}
    </>
  );
}
