export function Footer() {
  return (
    <footer className="border-t border-[#272727] bg-[#050505] py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 overflow-hidden border border-white/10">
              <img
                src="/assets/movel-plan/profile-logo.webp"
                alt="Móvel Plan Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              Móvel<span className="text-primary">Plan</span>
            </span>
          </div>

          <p className="text-xs text-[#9A9A9A] order-last md:order-none">
            &copy; {new Date().getFullYear()} Móvel Plan. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/movel.plan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.1em] text-[#9A9A9A] hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5521992032834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.1em] text-[#9A9A9A] hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
