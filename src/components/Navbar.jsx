import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#quiz', label: 'Prakriti Quiz' },
    { href: '#planner', label: 'AI Diet Planner' },
    { href: '#recipes', label: 'Recipes & Remedies' },
    { href: '#lifestyle', label: 'Lifestyle & Yoga' },
    { href: '#dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold text-emerald-900 tracking-tight">Nivarana</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-emerald-900/80 hover:text-emerald-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#auth" className="px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              Sign In
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-emerald-200 text-emerald-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-emerald-900/90"
              >
                {l.label}
              </a>
            ))}
            <a href="#auth" onClick={() => setOpen(false)} className="block py-2 font-medium text-amber-600">
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
