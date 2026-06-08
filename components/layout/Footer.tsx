import { Container } from "./Container";

const navLinks = [
  { name: "Projetos", href: "/#portfolio" },
  { name: "Materiais", href: "/#materiais" },
  { name: "Contato", href: "/#contato" },
];

export function Footer() {
  return (
    <footer className="bg-walnut pt-8 pb-6 md:pt-[64px] md:pb-[32px]" aria-label="Rodapé">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-display-md text-on-walnut mb-3">Móvel Plan</p>
            <p className="text-meta text-on-walnut-muted leading-relaxed">
              Marcenaria sob medida para Niterói, Barra e Zona Sul.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-5">
            <p className="text-eyebrow uppercase text-on-walnut-muted mb-4">Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5521992032834"
                target="_blank"
                rel="noopener noreferrer"
                className="text-meta text-on-walnut hover:text-brass transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
              >
                WhatsApp
              </a>
              <a
                href="tel:+5521992032834"
                className="text-meta text-on-walnut hover:text-brass transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
              >
                (21) 99203-2834
              </a>
              <p className="text-meta text-on-walnut-muted">Niterói · Barra · Zona Sul</p>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <p className="text-eyebrow uppercase text-on-walnut-muted mb-4">Navegação</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-eyebrow uppercase text-on-walnut-muted hover:text-on-walnut hover:underline underline-offset-4 decoration-brass transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <p className="text-eyebrow uppercase text-on-walnut-muted mb-4">Social</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/movel.plan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-meta text-on-walnut-muted hover:text-brass transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
                aria-label="Instagram Móvel Plan"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5521992032834"
                target="_blank"
                rel="noopener noreferrer"
                className="text-meta text-on-walnut-muted hover:text-brass transition-colors duration-fast focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass"
                aria-label="WhatsApp Móvel Plan"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(244, 239, 231, 0.08)" }}
        >
          <p className="text-micro text-on-walnut-muted">
            &copy; {new Date().getFullYear()} Móvel Plan. Todos os direitos reservados.
          </p>
          <p className="text-micro text-on-walnut-muted">
            Niterói · Barra · Zona Sul
          </p>
        </div>
      </Container>
    </footer>
  );
}
