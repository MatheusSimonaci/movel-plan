export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Móvel<span className="text-primary">Plan</span>
            </span>
            <p className="text-sm text-zinc-500">
              Excelência em móveis planejados sob medida.
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
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-zinc-400 hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-zinc-400 hover:text-primary transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
