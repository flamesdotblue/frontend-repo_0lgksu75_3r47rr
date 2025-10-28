export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-md shadow-cyan-200" />
              <span className="font-semibold tracking-tight text-slate-900">MultiNiche</span>
            </div>
            <p className="mt-3 max-w-xs text-slate-600">A modern, multi‑category marketplace bringing together the best of every niche.</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">New arrivals</a></li>
              <li><a href="#" className="hover:text-slate-900">Best sellers</a></li>
              <li><a href="#" className="hover:text-slate-900">Gift cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Help</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Support</a></li>
              <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
              <li><a href="#" className="hover:text-slate-900">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MultiNiche. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
