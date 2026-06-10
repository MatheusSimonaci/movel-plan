import { movelPlanContent, waLink } from "@/lib/content/movel-plan";

export function Footer() {
  const { site } = movelPlanContent;

  return (
    <footer className="border-t border-[#272727] bg-[#050505] py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 overflow-hidden rounded-full border border-white/10">
                <img
                  src={site.logo}
                  alt={`${site.name} Logo`}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold tracking-[0.14em] text-white uppercase">
                Móvel<span className="text-primary">Plan</span>
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/35">
              {site.areas}
            </p>
          </div>

          <p className="text-xs text-[#9A9A9A] order-last md:order-none">
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.1em] text-[#9A9A9A] hover:text-primary transition-colors py-2"
            >
              Instagram
            </a>
            <a
              href={waLink(site.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.1em] text-[#9A9A9A] hover:text-primary transition-colors py-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
