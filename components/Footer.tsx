export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <img 
                  src="/assets/movel-plan/profile-logo.webp" 
                  alt="Móvel Plan Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Móvel<span className="text-primary">Plan</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
              Especialistas em transformar ambientes com móveis planejados de alto padrão.
            </p>
          </div>
          
          <p className="text-sm text-zinc-600 order-last md:order-none">
            &copy; {new Date().getFullYear()} Móvel Plan. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/movel.plan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-zinc-400 hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/5521992032834" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-zinc-400 hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
