import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-black/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-md shadow-cyan-200" />
              <span className="font-semibold tracking-tight text-slate-900">MultiNiche</span>
            </a>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center px-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-black/5">
              <User size={18} />
              <span className="hidden md:inline">Sign in</span>
            </button>
            <button className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
              <ShoppingCart size={18} />
              <span className="hidden md:inline">Cart</span>
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-500 px-1 text-[10px] font-bold text-white">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <nav className="grid gap-2 text-sm">
              <a href="#" className="rounded-lg px-3 py-2 hover:bg-black/5">New Arrivals</a>
              <a href="#" className="rounded-lg px-3 py-2 hover:bg-black/5">Electronics</a>
              <a href="#" className="rounded-lg px-3 py-2 hover:bg-black/5">Fashion</a>
              <a href="#" className="rounded-lg px-3 py-2 hover:bg-black/5">Home</a>
              <a href="#" className="rounded-lg px-3 py-2 hover:bg-black/5">Sports</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
