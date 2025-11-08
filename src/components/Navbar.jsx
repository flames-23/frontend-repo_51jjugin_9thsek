import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Boxes, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">MyPortfolio</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
                {n.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <nav className="flex flex-col py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
