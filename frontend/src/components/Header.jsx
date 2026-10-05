import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil", testid: "nav-accueil" },
  { label: "Comment ça marche", href: "#comment-ca-marche", testid: "nav-comment-ca-marche" },
  { label: "Solutions", href: "#solutions", testid: "nav-solutions" },
  { label: "Diagnostic", href: "#diagnostic", testid: "nav-diagnostic" },
  { label: "Contact", href: "#contact", testid: "nav-contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#accueil" data-testid="header-logo" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0F2537] to-[#0D9488]" />
            <span className="relative h-3 w-3 rotate-45 rounded-[3px] bg-white/95" />
            <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#FF6B4B]" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-[#0B192C]">
            GONAXIS
          </span>
        </a>

        <nav data-testid="header-nav" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={link.testid}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#0D9488]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#diagnostic"
            data-testid="header-cta-diagnostic"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B4B] to-[#F97316] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.03] hover:from-[#E05335] hover:to-[#EA580C] active:scale-[0.98] sm:inline-flex"
          >
            Faire mon diagnostic
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            data-testid="header-burger-button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B192C] transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="header-mobile-menu"
          className="border-t border-slate-200/60 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-${link.testid}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-[#0D9488]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#diagnostic"
              data-testid="mobile-cta-diagnostic"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B4B] to-[#F97316] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25"
            >
              Faire mon diagnostic
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
